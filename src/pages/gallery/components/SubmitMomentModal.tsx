import React, { useState } from 'react';
import { GalleryItem } from '../../../types';
import { X, Upload, CheckCircle2 } from 'lucide-react';
import { GATHERING_IMAGE } from '../../../constants/images';

interface SubmitMomentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newItem: GalleryItem) => void;
}

export const SubmitMomentModal: React.FC<SubmitMomentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<GalleryItem['category']>('Kopdar & Meetup');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [photographer, setPhotographer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !location) return;

    const newItem: GalleryItem = {
      id: `gal-custom-${Date.now()}`,
      title,
      category,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      location,
      image: GATHERING_IMAGE,
      description: description || 'Momen seru kebersamaan anggota komunitas Damboris.',
      photographer: photographer || 'Anggota Damboris',
    };

    onSubmit(newItem);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Upload className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Kirim Momen Komunitas
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">Momen Berhasil Ditambahkan!</h4>
            <p className="text-xs text-stone-400">
              Terima kasih telah berkontribusi mendokumentasikan kegiatan Damboris. Foto kini muncul di galeri.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="text-stone-300 font-medium block">Judul Momen / Aktivitas *</label>
              <input
                type="text"
                required
                placeholder="Contoh: Diskusi Hangat Kopdar Senja di Tebet"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-stone-300 font-medium block">Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as GalleryItem['category'])}
                  className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="GATHERING AKBAR">GATHERING AKBAR</option>
                  <option value="BANTUAN SOSIAL">BANTUAN SOSIAL</option>
                  <option value="BUKA BERSAMA">BUKA BERSAMA</option>
                  <option value="DISKUSI RUTIN">DISKUSI RUTIN</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-stone-300 font-medium block">Lokasi Pertemuan *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bandung Hub"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-stone-300 font-medium block">Deskripsi Singkat Cerita</label>
              <textarea
                rows={3}
                placeholder="Ceritakan keseruan dan wawasan yang didapatkan..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="space-y-1">
              <label className="text-stone-300 font-medium block">Nama Pengunggah / Fotografer</label>
              <input
                type="text"
                placeholder="Nama kamu"
                value={photographer}
                onChange={(e) => setPhotographer(e.target.value)}
                className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-stone-400 hover:text-white bg-stone-950 rounded-lg border border-stone-800"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-lg transition-colors"
              >
                Kirim Dokumentasi
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
