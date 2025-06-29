import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyCwbjgbwMpyhB_7qgBZX_gAGTpscOrooUo"
});

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((msgs) => [...msgs, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: input,
            });
            setMessages((msgs) => [
                ...msgs,
                { sender: "bot", text: response.text || "Sorry, I didn't get that." }
            ]);
        } catch (err) {
            setMessages((msgs) => [
                ...msgs,
                { sender: "bot", text: "Error: Unable to get response." }
            ]);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-full h-full mx-auto border border-gray-300 rounded-lg p-4 bg-white shadow">
            <div className="fixed mb-4 flex flex-col gap-2">
                {messages.map((msg, idx) => (
                    <div    
                        key={idx}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <span
                            className={`inline-block rounded-xl px-3 py-2 ${
                                msg.sender === "user"
                                    ? "bg-blue-100 text-right"
                                    : "bg-gray-100 text-left"
                            }`}
                        >
                            {msg.text}
                        </span>
                    </div>
                ))}
                {loading && <div className="text-gray-500">Bot is typing...</div>}
            </div>
            <form onSubmit={sendMessage} className="flex">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={loading}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white disabled:bg-blue-200"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBot;