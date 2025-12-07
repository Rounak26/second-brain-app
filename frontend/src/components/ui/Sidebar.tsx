import { LogoIcon } from "../../icons/LogoIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YouTubeIcon } from "../../icons/YouTubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white  w-66 left-0 top-0 fixed pl-6">
        <div className="flex text-4xl pt-4 items-center">
            <div className="pr-2 ">
                <LogoIcon />
            </div>
            Brainly

        </div>

        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YouTubeIcon />} />
        </div>
    </div>
} 