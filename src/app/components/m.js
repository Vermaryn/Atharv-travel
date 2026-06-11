"use client";

import { useState } from "react";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello 👋 I'm Atharv Travel AI. How can I help you?",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#000945] px-5 py-3 text-white shadow-lg"
      >
        💬 Chat
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-xl border bg-white shadow-2xl">
          <div className="bg-[#000945] p-4 text-white font-semibold">
            Atharv Travel AI
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-100"
                    : "bg-slate-100"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t p-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about tours..."
              className="flex-1 rounded-md border px-3 py-2 outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              className="rounded-md bg-[#000945] px-4 py-2 text-white"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}