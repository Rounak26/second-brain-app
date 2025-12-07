import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModel({ open, onclose }) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }

        })
        onclose();

    }
    return <div>
        {open && <div>
            <div className="w-screen h-screen  bg-slate-500 fixed  left-0 opacity-60 flex justify-center">

            </div>
            <div className="w-screen h-screen bg-transparent fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-5  rounded-xl ">
                        <div className="flex justify-end">
                            <div onClick={onclose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>
                        <div>
                            <Input ref={titleRef} placeholder={"title"} />
                            <Input ref={linkRef} placeholder={"link"} />

                        </div>

                        <div>
                            <h1>Type</h1>
                            <div className="flex justify-center">
                                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Youtube)
                                }} ></Button>

                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Twitter)
                                }}></Button>

                            </div>
                            <div className="flex justify-center">
                                <Button onClick={addContent} variant="primary" text="submit"></Button>

                            </div>
                        </div>

                    </span>
                </div>

            </div>

        </div >}

    </div >
}

