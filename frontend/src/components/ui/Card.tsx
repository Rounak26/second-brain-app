import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: 'twitter' | "youtube";

}

export function Card({ title, link, type }: CardProps) {
    return <div >
        <div className="p-4 bg-white rounded-md shadow-md outline-slate-200 max-w-72 min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-sm">
                    <div className="text-gray-500 pr-2" > <ShareIcon /></div>

                    {title}

                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank" ><ShareIcon />
                        </a>

                    </div>
                    <div className="pr-2 text-gray-500">
                        <ShareIcon />
                    </div>
                </div>
            </div>
            <div className="pt-3">
                {type === "youtube" && (
                    <iframe
                        className="w-full h-52"
                        src={link.includes("watch?v=")
                            ? link.replace("watch?v=", "embed/").split("&")[0]
                            : link
                        }
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
                {type === "twitter" &&
                    <blockquote className="twitter-tweet"><a href={link.replace("x.com", "twitter.com")}></a></blockquote>}

            </div>
        </div>
    </div>
}