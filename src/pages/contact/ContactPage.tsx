import React, { useState } from 'react';
import { Page, VirtualMemberCard } from '../../types';
import { JoinMemberForm } from './components/JoinMemberForm';
import { PartnerMessageForm } from './components/PartnerMessageForm';
import { OfficeInfoCard } from './components/OfficeInfoCard';
import { FaqSection } from './components/FaqSection';
import { UserCheck, Mail } from 'lucide-react';

interface ContactPageProps {
  onRegisterMember: (card: VirtualMemberCard) => void;
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onRegisterMember,
}) => {
  const [activeTab, setActiveTab] = useState<'join' | 'message'>('join');

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Section */}
      <section className="relative pt-8 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Pendaftaran & Hubungi Kami
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Mari Menjadi Bagian dari Ekosistem Damboris
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Daftar sebagai anggota baru untuk mendapatkan akses jejaring dan kartu anggota digital resmi, atau kirimkan pertanyaan dan proposal kemitraan kepada pengurus kami.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Form & Contact Channels Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Forms */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mode Switcher Tab */}
            <div className="flex items-center p-1.5 bg-stone-900 border border-stone-800 rounded-2xl shadow-sm">
              <button
                onClick={() => setActiveTab('join')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'join'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-md shadow-amber-500/10'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Pendaftaran Anggota (Join)</span>
              </button>

              <button
                onClick={() => setActiveTab('message')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'message'
                    ? 'bg-amber-400 text-stone-950 font-bold shadow-md shadow-amber-500/10'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Pesan & Kemitraan</span>
              </button>
            </div>

            {/* Form Container */}
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-900 border border-stone-800 shadow-xl">
              {activeTab === 'join' ? (
                <JoinMemberForm onRegisterMember={onRegisterMember} />
              ) : (
                <PartnerMessageForm />
              )}
            </div>
          </div>

          {/* Right Column: Information & Socials Card */}
          <div className="lg:col-span-5 space-y-6">
            <OfficeInfoCard />
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <FaqSection />
    </div>
  );
};
