import type { ReactElement } from "react"

export function SidebarItem({ text, icon }: {
    text: string,
    icon: ReactElement
}) {
    return <div className="flex text-gray-700 py-1 cursor-pointer hover:bg-gray-200 rounded max-w-48 duration-1000 ">

        <div>
            {icon}
        </div>
        <div className="px-2">
            {text}
        </div>

    </div >
} 