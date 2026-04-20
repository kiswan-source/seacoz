export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl tracking-tight">
          sea<span className="text-cyan-400">coz</span>
        </span>
        <div className="hidden md:flex gap-8 text-sm text-slate-400">
          <a href="#layanan" className="hover:text-white transition">Layanan</a>
          <a href="#tentang" className="hover:text-white transition">Tentang</a>
          <a href="#harga" className="hover:text-white transition">Harga</a>
          <a href="#kontak" className="hover:text-white transition">Kontak</a>
        </div>
        <a href="#kontak">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold px-5 py-2 rounded-full transition">
            Mulai Sekarang
          </button>
        </a>
      </div>
    </nav>
  )
}