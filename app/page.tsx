import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <ChatWidget />
    </main>
  )
}