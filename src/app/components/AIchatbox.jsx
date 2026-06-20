"use client";

import { button } from "framer-motion/client";
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
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(null);

  const sendMessage = async () => {
    if (!message.trim()) return;
    if (loading) return;
    const abortController = new AbortController();
    setController(abortController);
    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortController.signal,
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || data.error || "Sorry, I coudn't answer that.",
        },
      ]);
    } catch (error) {
      console.log(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    }
    setLoading(false);
  };

  const stopGeneration = () => {
    controller?.abort();
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-5 z-50 rounded-full bg-[#000945] px-5 py-3 text-white shadow-lg cursor-pointer"
      >
        💬 Atharv AI
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 flex h-125 w-87.5 flex-col overflow-hidden rounded-xl border bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#000945] p-4 text-white">
            <h3 className="font-semibold">Atharv Travel AI</h3>

            <button
              onClick={() => setOpen(false)}
              className="text-lg font-bold cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  msg.role === "user" ? "ml-auto bg-blue-100" : "bg-slate-100"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="bg-slate-100 w-fit rounded-lg p-3">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></span>
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                    style={{ animationDelay: "0.15s" }}
                  ></span>
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                    style={{ animationDelay: "0.3s" }}
                  ></span>
                </div>
              </div>
            )}
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

            {loading ? (
              <button
                onClick={stopGeneration}
                className="rounded-md bg-red-500 px-4 py-2 text-white"
              >
                Stop
              </button>
            ) : (
              <button
                onClick={sendMessage}
                className="rounded-md bg-[#000945] px-4 py-2 text-white"
              >
                Send
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
