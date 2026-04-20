export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Rp 500rb',
      period: '/bulan',
      desc: 'Untuk bisnis yang baru memulai',
      features: ['Domain .com 1 tahun', 'Website Landing Page', 'Email Profesional (1 akun)', 'SSL Gratis', 'Support via WhatsApp'],
      highlighted: false,
    },
    {
      name: 'Business',
      price: 'Rp 1,5jt',
      period: '/bulan',
      desc: 'Paling populer untuk bisnis berkembang',
      features: ['Semua fitur Starter', 'Microsoft 365 (5 akun)', 'AI Chatbot terintegrasi', 'Teams & OneDrive', 'Support prioritas 24/7'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Solusi skala penuh untuk perusahaan',
      features: ['Semua fitur Business', 'Microsoft 365 unlimited', 'Pengembangan AI custom', 'Dedicated server', 'Account manager khusus'],
      highlighted: false,
    },
  ]

  return (
    <section id="harga" style={{ background: '#020617', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#22d3ee', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>
          Paket Harga
        </p>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Pilih Paket yang Tepat</h2>
        <p style={{ color: '#94a3b8', marginBottom: 64, maxWidth: 480, margin: '0 auto 64px' }}>
          Transparan, terjangkau, dan fleksibel sesuai kebutuhan bisnis Anda.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {plans.map((p) => (
            <div key={p.name} style={{
              borderRadius: 20,
              padding: 32,
              textAlign: 'left',
              background: p.highlighted ? '#06b6d4' : '#0f172a',
              border: p.highlighted ? '1px solid #22d3ee' : '1px solid #1e293b',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: p.highlighted ? '#0f172a' : '#22d3ee', marginBottom: 4 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, color: p.highlighted ? '#0f172a' : '#fff', marginBottom: 4 }}>
                {p.price}<span style={{ fontSize: 16, fontWeight: 400 }}>{p.period}</span>
              </div>
              <p style={{ fontSize: 13, color: p.highlighted ? '#164e63' : '#94a3b8', marginBottom: 24 }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: p.highlighted ? '#0f172a' : '#cbd5e1' }}>
                    <span style={{ color: p.highlighted ? '#0f172a' : '#22d3ee', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#kontak">
                <button style={{
                  width: '100%',
                  padding: '12px 0',
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  background: p.highlighted ? '#0f172a' : 'transparent',
                  color: '#fff',
                  border: p.highlighted ? 'none' : '1px solid #334155',
                }}>
                  {p.price === 'Custom' ? 'Hubungi Kami' : 'Pilih Paket'}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}