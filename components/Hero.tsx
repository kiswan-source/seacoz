export default function Hero() {
  const services = [
    { icon: '🌐', title: 'Domain & Hosting', desc: 'Setup profesional, cepat, dan aman' },
    { icon: '💻', title: 'Website Modern', desc: 'Desain responsif berbasis Next.js' },
    { icon: '🤖', title: 'Integrasi AI', desc: 'Chatbot & otomasi berbasis Claude AI' },
    { icon: '☁️', title: 'Microsoft 365', desc: 'Email, Teams, OneDrive terintegrasi' },
  ]

  return (
    <section style={{ background: '#020617', paddingTop: 96, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, overflowX: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', width: '100%' }}>
        <p style={{ color: '#22d3ee', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 16 }}>
          Solusi Digital Bisnis Lengkap
        </p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
          Transformasi Digital<br />
          <span style={{ color: '#22d3ee' }}>Bisnis Anda</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Domain, Website, AI, dan Microsoft 365 — semua terintegrasi dalam satu ekosistem digital yang powerful.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="#kontak">
            <button style={{ background: '#06b6d4', color: '#0f172a', fontWeight: 700, padding: '12px 28px', borderRadius: 999, border: 'none', cursor: 'pointer', fontSize: 15 }}>
              Konsultasi Gratis
            </button>
          </a>
          <a href="#layanan">
            <button style={{ background: 'transparent', color: '#fff', fontWeight: 600, padding: '12px 28px', borderRadius: 999, border: '1px solid #334155', cursor: 'pointer', fontSize: 15 }}>
              Lihat Layanan
            </button>
          </a>
        </div>
        <div id="layanan" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, width: '100%' }}>
          {services.map((s) => (
            <div key={s.title} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: 16, padding: '24px 20px', textAlign: 'left' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: 6, fontSize: 15 }}>{s.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}