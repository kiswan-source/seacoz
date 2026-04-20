import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 500,
    system: 'Kamu adalah asisten AI untuk Seacoz, perusahaan solusi digital bisnis. Jawab singkat, ramah, dan profesional dalam Bahasa Indonesia.',
    messages: [{ role: 'user', content: message }]
  })
  const reply = response.content[0].type === 'text' ? response.content[0].text : ''
  return NextResponse.json({ reply })
}