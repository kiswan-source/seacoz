'use client'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kontak" style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#0891b2', fontSize: 12, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 12 }}>
          Kontak
        </p>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0f172a', marginBottom: 12 }}>
          Mulai Perjalanan Digital Anda
        </h2>
        <p style={{ color: '#64748b', marginBottom: 48 }}>
          Isi form di bawah dan tim kami akan menghubungi Anda dalam 1x24 jam.
        </p>

        {sent ? (
          <div style={{ background: '#ecfeff', border: '1px solid #a5f3fc', borderRadius: 20, padding: '48px 32px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>Pesan Terkirim!</h3>
            <p style={{ color: '#64748b' }}>Tim Seacoz akan menghubungi Anda segera.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: '#f8fafc', borderRadius: 20, padding: 32, textAlign: 'left', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Nama</label>
                <input
                  required
                  placeholder="Nama lengkap"
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 12, padding: '12px 16px', fontSize: 14, outline: 'none', background: '#fff', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Email</label>
                <input
                  required
                  type="email"
                  placeholder="email@bisnis.com"
                  style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 12, padding: '12px 16px', fontSize: 14, outline: 'none', background: '#fff', boxSizing: 'border-box' }}
                />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Paket yang diminati</label>
              <select style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 12, padding: '12px 16px', fontSize: 14, outline: 'none', background: '#fff', boxSizing: 'border-box' }}>
                <option>Starter</option>
                <option>Business</option>
                <option>Enterprise</option>
                <option>Konsultasi dulu</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>Pesan</label>
              <textarea
                required
                rows={4}
                placeholder="Ceritakan kebutuhan bisnis Anda..."
                style={{ width: '100%', border: '1px solid #e2e8f0', borderRadius: 12, padding: '12px 16px', fontSize: 14, outline: 'none', background: '#fff', resize: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <button
              type="submit"
              style={{ width: '100%', background: '#06b6d4', color: '#0f172a', fontWeight: 700, fontSize: 15, padding: '14px 0', borderRadius: 999, border: 'none', cursor: 'pointer' }}
            >
              Kirim Pesan
            </button>
          </form>
        )}
      </div>
    </section>
  )
}