import { Input } from "../components/ui/input"
import { Button } from '../components/ui/Button'
import { useRef } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export function Signin() {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin() {

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;


        try {
            const response = await axios.post(
                BACKEND_URL + "/api/v1/signin",
                {
                    username,
                    password
                }
            );
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);



            console.log("Token saved:", jwt);

            navigate("/dashboard")


        } catch (error: any) {
            console.error("Signin error:", error);
            alert(error.response?.data?.message || "Signin failed!");
        }
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl  min-w-48 p-8">
            <Input ref={usernameRef} placeholder={"Username"} />
            <Input ref={passwordRef} placeholder={"Password"} />
            <div className="flex justify-center pt-4">
                <Button onClick={signin} variant="primary" text="Signin" fullWidth={true} />
            </div>
        </div>

    </div>
}