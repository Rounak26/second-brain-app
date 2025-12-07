
import { Button } from '../components/ui/Button'
import '../App.css'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModel } from '../components/ui/CreateContentModel'
import { useEffect, useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../components/ui/hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'




export function Dashboard() {
    const [modelOpen, setModelOpen] = useState(false);
    const { contents, refresh } = useContent();

    useEffect(() => {
        refresh();
    }, [modelOpen])

    return (

        <div className='pl-4'>
            <Sidebar />
            <div className='p-2 ml-62 min-screen bg-gray-100 '>
                <CreateContentModel open={modelOpen} onclose={() => { setModelOpen(false); }} />
                <div className='flex justify-end gap-4'>
                    <Button onClick={() => {
                        setModelOpen(true)
                    }} variant='primary' text='Add Content' startIcon={<PlusIcon />} />

                    <Button onClick={async () => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                            share: true
                        }, {
                            headers: {
                                "Authorization": localStorage.getItem("token")
                            }
                        })
                        const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                        alert(shareUrl);
                    }} variant='secondary' text='Share brain' startIcon={<ShareIcon />} />
                </div>
                <div className='flex gap-3 flex-wrap'>

                    {contents.map(({ type, link, title }) => <Card
                        type={type}
                        link={link}
                        title={title}
                    />)}

                    <Sidebar />

                </div>
            </div>
        </div>

    )
}


