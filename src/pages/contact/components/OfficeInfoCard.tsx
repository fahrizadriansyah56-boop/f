import React from 'react';
import { HEADQUARTERS_INFO } from '../contactData';
import { 
  MapPin, 
  Mail, 
  MessageCircle, 
  Instagram, 
  ExternalLink 
} from 'lucide-react';

export const OfficeInfoCard: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
          Pusat Informasi
        </span>
        <h3 className="text-xl font-bold text-white font-heading">
          Markas & Kanal Resmi
        </h3>
      </div>

      <div className="space-y-4 text-xs text-stone-300">
        <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-850 flex items-start gap-3">
          <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-white text-sm">{HEADQUARTERS_INFO.name}</h4>
            <p className="text-stone-400 mt-1 leading-relaxed">
              {HEADQUARTERS_INFO.address}
            </p>
            <span className="text-[11px] text-amber-400 block mt-1">
              Jam Kunjungan / Coworking: {HEADQUARTERS_INFO.operatingHours}
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-850 flex items-start gap-3">
          <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-white text-sm">Surat Elektronik</h4>
            <p className="text-stone-400 mt-0.5">Pertanyaan: {HEADQUARTERS_INFO.emailQuestions}</p>
            <p className="text-stone-400">Kemitraan: {HEADQUARTERS_INFO.emailPartnership}</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-850 flex items-start gap-3">
          <MessageCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-white text-sm">Hotline WhatsApp</h4>
            <p className="text-stone-400 mt-0.5">{HEADQUARTERS_INFO.phoneHotline}</p>
            <span className="text-[10px] text-stone-500">Respon cepat hari kerja</span>
          </div>
        </div>
      </div>

      {/* Official Social Media Links */}
      <div className="pt-4 border-t border-stone-850 space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
          Media Sosial Resmi Damboris
        </h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <a
            href="https://www.instagram.com/officialdmbrsv?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-stone-950 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between"
            aria-label="Instagram Resmi Damboris"
          >
            <span className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>@officialdmbrsv</span>
            </span>
            <ExternalLink className="w-3 h-3 text-stone-600" />
          </a>

          <a
            href="https://www.tiktok.com/@officialdmbrsv?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-stone-950 hover:bg-stone-850 border border-stone-800 text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between"
            aria-label="TikTok Resmi Damboris"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
              <span>TikTok</span>
            </span>
            <ExternalLink className="w-3 h-3 text-stone-600" />
          </a>
        </div>
      </div>
    </div>
  );
};
