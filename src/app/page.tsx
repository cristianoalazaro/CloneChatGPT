"use client"

import { ChatArea } from "@/components/ChatArea"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { Chat } from "@/types/Chat"
import { useState } from "react"

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [chatActive, setChatActive] = useState<Chat>()

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversation = () => {

  }

  const handleNewChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversation}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={`Bla Bla Bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea 
          chat={chatActive}
        />
      </section>
    </main>
  )
}

export default Page