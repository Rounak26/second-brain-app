// src/pages/SharedBrain.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/ui/Card";

interface Content {
    _id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function SharedBrain() {
    const { shareLink } = useParams();
    const [contents, setContents] = useState<Content[]>([]);
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSharedBrain() {
            try {
                const response = await axios.get(
                    `${BACKEND_URL}/api/v1/brain/${shareLink}`
                );

                setUsername(response.data.username);
                setContents(response.data.content);
            } catch (error) {
                console.error("Error fetching shared brain:", error);
                alert("Invalid share link!");
            } finally {
                setLoading(false);
            }
        }

        fetchSharedBrain();
    }, [shareLink]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
        </div>;
    }

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">
                    {username}'s Brain
                </h1>
                <p className="text-gray-600 mb-8">
                    Shared collection of content
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {contents.map(content => (
                        <Card
                            key={content._id}
                            title={content.title}
                            link={content.link}
                            type={content.type}
                        />
                    ))}
                </div>

                {contents.length === 0 && (
                    <p className="text-center text-gray-500">
                        No content shared yet!
                    </p>
                )}
            </div>
        </div>
    );
}