import { ChatMessage } from "@/types/ChatMessage"

type Props = {
    item: ChatMessage
}

export const ChatMessageItem = ({ item }: Props) => {
    return (
        <div className={`py-5 ${item.author === 'ai' && 'bg-gray-600/50'}`}>

        </div>
    )
}