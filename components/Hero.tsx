export default function Hero() {
  const services = [
    { icon: '🌐', title: 'Domain & Hosting', desc: 'Setup profesional, cepat, dan aman' },
    { icon: '💻', title: 'Website Modern', desc: 'Desain responsif berbasis Next.js' },
    { icon: '🤖', title: 'Integrasi AI', desc: 'Chatbot & otomasi berbasis Claude AI' },
    { icon: '☁️', title: 'Microsoft 365', desc: 'Email, Teams, OneDrive terintegrasi' },
  ]

  return (
    <section className="bg-slate-950 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Solusi Digital Bisnis Lengkap
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Transformasi Digital<br />
          <span className="text-cyan-400">Bisnis Anda</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
          Domain, Website, AI, dan Microsoft 365 — semua terintegrasi dalam satu ekosistem digital yang powerful.
        </p>
        <div className="flex gap-4 justify-center mb-20">
          <a href="#kontak">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3 rounded-full transition">
              Konsultasi Gratis
            </button>
          </a>
          <a href="#layanan">
            <button className="border border-slate-600 hover:border-slate-400 text-white px-8 py-3 rounded-full transition">
              Lihat Layanan
            </button>
          </a>
        </div>
        <div id="layanan" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 text-left transition">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-white font-semibold mb-1">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}