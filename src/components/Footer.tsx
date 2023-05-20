import { ChatMessageInput } from "./ChatMessageInput"

type Props = {
    onSendMessage: (message: string) => void
    disabled: boolean
}

export const Footer = ({disabled, onSendMessage}: Props) => {
    return (
        <div className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput 
                    onSendMessage={onSendMessage}  
                    disabled={disabled}  
                />   
            </div>  
            <div className="pt-3 text-center text-xs text-gray-300">
                Feito por Cristiano Ap Lázaro. Permitida a cópia e uso. <br />
                <a href="#" className="underline cursor-pointer">Qualquer problema clique aqui</a>
            </div>  
        </div>
    )
}