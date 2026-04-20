export default function About() {
  const stats = [
    { value: '50+', label: 'Klien Aktif' },
    { value: '99%', label: 'Uptime Server' },
    { value: '24/7', label: 'Dukungan Tim' },
    { value: '5★', label: 'Rating Klien' },
  ]

  return (
    <section id="tentang" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 64, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ color: '#0891b2', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>
            Tentang Kami
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: 20 }}>
            Mitra Digital Terpercaya untuk Bisnis Modern
          </h2>
          <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Seacoz hadir sebagai solusi lengkap transformasi digital bisnis Anda. Kami mengintegrasikan domain, website, kecerdasan buatan, dan ekosistem Microsoft 365 dalam satu platform yang terpadu.
          </p>
          <p style={{ color: '#64748b', lineHeight: 1.8 }}>
            Berbasis di Indonesia, kami memahami kebutuhan bisnis lokal dengan standar teknologi global.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 280, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: '#f8fafc', borderRadius: 16, padding: '24px 16px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#06b6d4', marginBottom: 8 }}>{s.value}</div>
              <div style={{ color: '#64748b', fontSize: 14 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}