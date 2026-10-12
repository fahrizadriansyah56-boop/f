import React, { useState } from 'react';
import { VirtualMemberCard } from '../../../types';
import { CITY_OPTIONS, INTEREST_OPTIONS } from '../contactData';
import { Sparkles } from 'lucide-react';

interface JoinMemberFormProps {
  onRegisterMember: (card: VirtualMemberCard) => void;
}

export const JoinMemberForm: React.FC<JoinMemberFormProps> = ({ onRegisterMember }) => {
  const [joinForm, setJoinForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Kab. Tasikmalaya',
    interest: 'UI/UX & Desain Produk',
    portfolio: '',
    reason: '',
  });

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinForm.fullName || !joinForm.email || !joinForm.phone) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newCard: VirtualMemberCard = {
      memberId: `DMB-2026-${randomSuffix}`,
      fullName: joinForm.fullName,
      email: joinForm.email,
      phone: joinForm.phone,
      city: joinForm.city,
      primaryInterest: joinForm.interest,
      joinedDate: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    onRegisterMember(newCard);
  };

  return (
    <form onSubmit={handleJoinSubmit} className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white font-heading">
          Formulir Keanggotaan Damboris
        </h3>
        <p className="text-xs text-stone-400">
          Keanggotaan gratis seumur hidup. Setelah submit, kamu akan langsung menerima Kartu Anggota Virtual Damboris.
        </p>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-300 block">
          Nama Lengkap *
        </label>
        <input
          type="text"
          required
          placeholder="Contoh: Budi Santoso"
          value={joinForm.fullName}
          onChange={(e) => setJoinForm({ ...joinForm, fullName: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-stone-300 block">
            Alamat Email *
          </label>
          <input
            type="email"
            required
            placeholder="nama@email.com"
            value={joinForm.email}
            onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-stone-300 block">
            Nomor WhatsApp Aktif *
          </label>
          <input
            type="tel"
            required
            placeholder="0812xxxxxxxx"
            value={joinForm.phone}
            onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-stone-300 block">
            Domisili / Kota Saat Ini
          </label>
          <select
            value={joinForm.city}
            onChange={(e) => setJoinForm({ ...joinForm, city: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors"
          >
            {CITY_OPTIONS.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-stone-300 block">
            Bidang Minat Utama
          </label>
          <select
            value={joinForm.interest}
            onChange={(e) => setJoinForm({ ...joinForm, interest: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors"
          >
            {INTEREST_OPTIONS.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-300 block">
          Link Portofolio / GitHub / LinkedIn (Opsional)
        </label>
        <input
          type="url"
          placeholder="https://behance.net/kamu atau https://github.com/kamu"
          value={joinForm.portfolio}
          onChange={(e) => setJoinForm({ ...joinForm, portfolio: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-medium text-stone-300 block">
          Apa Harapan Terbesarmu Bergabung dengan Damboris?
        </label>
        <textarea
          rows={3}
          placeholder="Contoh: Ingin mencari teman ngoding bareng dan belajar bikin design system..."
          value={joinForm.reason}
          onChange={(e) => setJoinForm({ ...joinForm, reason: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Daftar Sekarang & Terbitkan Kartu Anggota</span>
        </button>
      </div>
    </form>
  );
};
