import React, { useState } from 'react';
import { Page } from '../../types';
import { 
  Instagram, 
  MessageCircle, 
  Send, 
  MapPin, 
  Mail, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
    }, 3000);
  };

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'gallery', label: 'Galeri Momen' },
    { id: 'contact', label: 'Kontak & Pendaftaran' },
  ];

  return (
    <footer className="bg-stone-950 border-t border-stone-850 text-stone-300 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-stone-900">
          {/* Brand & Slogan column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                Damboris
              </span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </div>
            
            <p className="text-amber-400 font-medium text-sm">
              &ldquo;Kolaborasi, Kreativitas, dan Koneksi Tanpa Batas&rdquo;
            </p>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Wadah bertumbuh terbuka bagi para desainer, pembuat kode, penulis, seniman visual, dan inovator muda di seluruh Indonesia untuk belajar bersama, berbagi portofolio, dan melahirkan karya kolektif.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/officialdmbrsv?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                aria-label="Instagram Resmi Damboris @officialdmbrsv"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@officialdmbrsv?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-400/50 transition-colors"
                aria-label="TikTok Resmi Damboris @officialdmbrsv"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-stone-400 hover:text-amber-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Markas & Kontak */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Markas & Hub Komunitas
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Damboris Creative Space, Jl. Tebet Timur Raya No. 42, Jakarta Selatan, 12820
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:halo@damboris.id" className="hover:text-amber-400 transition-colors">
                  halo@damboris.id
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>WhatsApp Hotline: +62 812-9988-7711</span>
              </li>
            </ul>

            <div className="pt-2 text-xs text-stone-500">
              <span>Wilayah / Chapter Aktif: </span>
              <span className="text-stone-400">Kab. Tasikmalaya, Kota. Tasikmalaya, Garut, Jabodetabek, Bandung Raya, Purwasuka Susuci</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Warta Damboris
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Dapatkan jadwal workshop eksklusif, ringkasan artikel inspiratif, dan peluang kolaborasi mingguan langsung di emailmu.
            </p>

            {subscribed ? (
              <div className="p-3 bg-stone-900 border border-amber-400/30 rounded-lg flex items-center gap-2 text-amber-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Terima kasih! Kamu sudah terdaftar di buletin warta mingguan.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="nama@emailmu.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-900 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Kirim langganan buletin"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded-md font-semibold text-xs flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-stone-500 block">
                  Bebas spam. Kamu bisa berhenti berlangganan kapan saja.
                </span>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium transition-colors"
              >
                <span>Daftar Jadi Anggota Resmi Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Komunitas Damboris Indonesia. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <span className="text-stone-400">Dibangun dengan semangat gotong royong</span>
            <span className="hover:text-stone-300 cursor-pointer">Panduan Komunitas</span>
            <span className="hover:text-stone-300 cursor-pointer">Privasi & Etika</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
