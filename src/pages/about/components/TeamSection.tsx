import React, { useState } from 'react';
import { MOCK_TEAM, TEAM_DIVISIONS } from '../aboutData';
import { Instagram, Linkedin, Github, Quote } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  const filteredTeam = selectedDivision === 'all'
    ? MOCK_TEAM
    : selectedDivision === 'korlap-all'
    ? MOCK_TEAM.filter((m) => m.division.toLowerCase().includes('korlap'))
    : MOCK_TEAM.filter((m) => m.division === selectedDivision);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
            Struktur Organisasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Profil Tim Inti & Pengurus Damboris
          </h2>
          <p className="text-xs text-stone-400">
            Pimpinan BPH dan Koordinator Lapangan (Korlap) di setiap titik wilayah Jawa Barat & sekitarnya.
          </p>
        </div>

        {/* Filter Divisi & Korlap per Wilayah */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-xl overflow-x-auto max-w-full pb-1 sm:pb-1">
          {TEAM_DIVISIONS.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDivision(d.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedDivision === d.id
                  ? 'bg-amber-400 text-stone-950 font-bold shadow-sm'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeam.map((member) => (
          <div
            key={member.id}
            className="p-6 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-2xl object-cover border border-amber-400/30 shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-white font-heading">{member.name}</h3>
                  <p className="text-xs font-semibold text-amber-400">{member.role}</p>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                    {member.division}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                {member.bio}
              </p>

              <div className="p-3 bg-stone-950/70 border border-stone-850 rounded-xl text-stone-400 text-[11px] italic flex items-start gap-2">
                <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>&ldquo;{member.quote}&rdquo;</span>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-850 flex items-center justify-between text-xs text-stone-400">
              <span className="text-[10px] text-stone-500">Tautan Jejaring</span>
              <div className="flex items-center gap-2">
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 text-stone-400 hover:text-amber-400 transition-colors"
                    aria-label={`Instagram ${member.name}`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 text-stone-400 hover:text-amber-400 transition-colors"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 text-stone-400 hover:text-amber-400 transition-colors"
                    aria-label={`GitHub ${member.name}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
