import { Input } from "../components/ui/input"
import { Button } from '../components/ui/Button'
import { useRef } from "react"
import axios from 'axios'
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        try {
            const response = await axios.post(
                BACKEND_URL + "/api/v1/signup",
                {
                    username,
                    password
                }
            );

            navigate("/signin");

            alert("Signed up!");
            console.log(response.data);
        } catch (error: any) {
            console.error("Signup error:", error);
            alert(error.response?.data?.message || "Signup failed!");
        }
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl  min-w-48 p-8">
            <Input ref={usernameRef} placeholder={"Username"} />
            <Input ref={passwordRef} placeholder={"Password"} />
            <div className="flex justify-center pt-4">
                <Button onClick={signup} variant="primary" text="Signup" fullWidth={true} />
            </div>
        </div>

    </div>
}