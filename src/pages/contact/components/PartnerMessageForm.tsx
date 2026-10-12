import React, { useState } from 'react';
import { MESSAGE_SUBJECT_OPTIONS } from '../contactData';
import { Send, CheckCircle2 } from 'lucide-react';

export const PartnerMessageForm: React.FC = () => {
  const [msgForm, setMsgForm] = useState({
    name: '',
    email: '',
    subject: 'Pertanyaan Umum',
    message: '',
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgForm.name || !msgForm.email || !msgForm.message) return;

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setMsgForm({
        name: '',
        email: '',
        subject: 'Pertanyaan Umum',
        message: '',
      });
    }, 4000);
  };

  return (
    <form onSubmit={handleMessageSubmit} className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white font-heading">
          Kirim Pesan / Kolaborasi Kemitraan
        </h3>
        <p className="text-xs text-stone-400">
          Ajukan tawaran sponsorship, undang pembicara komunitas, atau tanyakan perihal kegiatan.
        </p>
      </div>

      {messageSent ? (
        <div className="p-6 bg-amber-400/10 border border-amber-400/30 rounded-2xl text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto" />
          <h4 className="text-base font-bold text-white">Pesan Berhasil Terkirim!</h4>
          <p className="text-xs text-stone-300 max-w-sm mx-auto">
            Terima kasih telah menghubungi Damboris. Tim Hubungan Komunitas kami akan merespons melalui email dalam 1x24 jam.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-300 block">
                Nama Pengirim / Organisasi *
              </label>
              <input
                type="text"
                required
                placeholder="Nama kamu"
                value={msgForm.name}
                onChange={(e) => setMsgForm({ ...msgForm, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-stone-300 block">
                Email Kontak *
              </label>
              <input
                type="email"
                required
                placeholder="nama@perusahaan.com"
                value={msgForm.email}
                onChange={(e) => setMsgForm({ ...msgForm, email: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-stone-300 block">
              Tujuan / Subjek Pesan
            </label>
            <select
              value={msgForm.subject}
              onChange={(e) => setMsgForm({ ...msgForm, subject: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors"
            >
              {MESSAGE_SUBJECT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-stone-300 block">
              Isi Pesan / Proposal Singkat *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Jelaskan kebutuhan, tanggal agenda, atau bentuk kolaborasi yang diharapkan..."
              value={msgForm.message}
              onChange={(e) => setMsgForm({ ...msgForm, message: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-800 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Kirimkan Pesan</span>
            </button>
          </div>
        </>
      )}
    </form>
  );
};
