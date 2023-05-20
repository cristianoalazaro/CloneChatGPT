import { Chat } from "@/types/Chat"
import { useState } from "react"
import IconChatLeft from "./icons/IconChatLeft"
import IconTrash from "./icons/IconTrash"
import IconEdit from "./icons/IconEdit"
import IconClose from "./icons/IconClose"
import IconCheck from "./icons/IconCheck"

type Props = {
    chatItem: Chat
    active: boolean
    onClick: (id: string) => void
    onDelete: (id: string) => void
    onEdit: (id: string, newTitle: string) => void
}

export const SidebarChatButton = ({ chatItem, active, onClick, onDelete, onEdit }: Props) => {
    const [deleting, setDeleting] = useState(false)
    const [editing, setEditing] = useState(false)
    const [titleInput, setTitleInput] = useState(chatItem.title)

    const handleClickButton = () => {
        console.log('aqui')
        if (!deleting && !editing) onClick(chatItem.id)
    }

    const handleConfirmButton = () => {
        if (deleting) onDelete(chatItem.id)

        if (editing && titleInput.trim()) onEdit(chatItem.id, titleInput)

        setDeleting(false)
        setEditing(false)
    }

    const handleCancelButton = () => {
        setDeleting(false)
        setEditing(false)
    }

    return (
        <div onClick={handleClickButton} className={`flex items-center rounded p-3 text-sm cursor-pointer 
            ${active ? 'bg-gray-500/20' : 'bg-transparent'} hover:bg-gray-500/10`}>
            <div className="mr-3">
                {!deleting && <IconChatLeft width={16} height={16} />}
                {deleting && <IconTrash width={16} height={16} />}
            </div>

            <div className="flex-1 text-sm overflow-x-hidden">
                {editing &&
                    <input className="w-full bg-transparent text-sm outline-none border border-blue-500"
                        value={titleInput}
                        onChange={e => setTitleInput(e.target.value)}
                    />
                }
                {!editing &&
                    <div className="border border-transparent truncate">
                        {!deleting && chatItem.title}
                        {deleting && `Delete "${chatItem.title}"`}
                    </div>
                }
            </div>

            {active && !deleting && !editing &&
                <div className="flex">
                    <div
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
                        onClick={() => setEditing(true)}
                    >
                        <IconEdit width={16} height={16} />
                    </div>

                    <div
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
                        onClick={() => setDeleting(true)}
                    >
                        <IconTrash width={16} height={16} />
                    </div>
                </div>
            }

            {(deleting || editing) &&
                <div className="flex">
                    <div
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
                        onClick={handleConfirmButton}
                    >
                        <IconCheck width={16} height={16} />
                    </div>

                    <div
                        className="cursor-pointer mx-1 opacity-60 hover:opacity-100"
                        onClick={handleCancelButton}
                    >
                        <IconClose width={16} height={16} />
                    </div>
                </div>
            }
        </div>
    )
}