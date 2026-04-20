'use client'
import { useState } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Halo! Ada yang bisa saya bantu tentang layanan Seacoz?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!input.trim()) return
    const userMsg = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMsg })
    })
    const data = await res.json()
    setMessages(prev => [...prev, { role: 'assistant', text: data.reply }])
    setLoading(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span className="text-white text-sm font-semibold">Seacoz AI Assistant</span>
          </div>
          <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm px-3 py-2 rounded-xl max-w-[85%] ${
                m.role === 'assistant'
                  ? 'bg-slate-800 text-slate-200 self-start'
                  : 'bg-cyan-500 text-slate-950 self-end font-medium'
              }`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="text-slate-500 text-sm">Mengetik...</div>}
          </div>
          <div className="p-3 border-t border-slate-700 flex gap-2">
            <input
              className="flex-1 bg-slate-800 text-white text-sm px-3 py-2 rounded-xl outline-none placeholder:text-slate-500"
              placeholder="Tulis pesan..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button onClick={send} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-3 py-2 rounded-xl text-sm font-bold transition">
              →
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl transition"
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}