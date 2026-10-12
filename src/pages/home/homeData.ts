import { Layers, Compass, HeartHandshake, Sparkles } from 'lucide-react';

export const HERO_CONTENT = {
  kicker: 'DAMBORIS',
  headlineStart: 'WE ARE  READY ',
  headlineAccent: 'WE ARE STRONG',
  description:
    'Damboris lahir dari sebuah gerakan tulus para pemuda yang memiliki satu visi yang sama: menghadirkan kebermanfaatan seluas-luasnya bagi sesama melalui aksi nyata di bidang sosial.',
  trustBadges: [
    'Terbuka untuk semua tingkatan',
    '7 titik di jawa barat',
    'diskusi rutin',
  ],
};

export const COMMUNITY_STATS = [
  { label: 'Anggota Terdaftar', value: '100+', detail: 'Pemuda Aktif & Inovatif' },
  { label: 'lokasi', value: '6', detail: 'di jawa barat' },
];

export const HOME_PILLARS = [
  {
    icon: Layers,
    title: 'Ketulusan Berbagi',
    description: 'Setiap program santunan dan aksi sosial yang dijalankan berlandaskan niat ikhlas untuk meringankan beban sesama.'
  },
  {
    icon: Compass,
    title: 'Kolaborasi Tanpa Batas',
    description: 'Membuka pintu seluas-luasnya bagi siapa saja baik profesional, pelajar, maupun masyarakat umum untuk bersatu dalam gerakan kebaikan.'
  },
  {
    icon: HeartHandshake,
    title: 'Koneksi & Mentorship',
    description: 'Temui rekan berkarya satu frekuensi dan dapatkan arahan langsung dari para praktisi berpengalaman.'
  },
  {
    icon: Sparkles,
    title: 'Dampak Berkelanjutan',
    description: 'Tidak hanya memberikan bantuan sesaat, tetapi juga membangun kepedulian jangka panjang dan memberdayakan umat.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Siti Sarah',
    role: 'UI Designer di Tech Startup',
    chapter: 'Chapter Bandung',
    text: 'Damboris mengubah cara saya memandang networking. Di sini suasananya sangat rendah hati, mentornya terbuka diajak ngobrol santai, dan saya mendapatkan rekan kerja freelance pertama saya lewat temu komunitas!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Fikri Haikal',
    role: 'Fullstack Developer',
    chapter: 'Chapter Jakarta',
    text: 'Sebagai programmer, sering kali saya kekurangan rekan desainer visual untuk memvalidasi ide aplikasi. Di Damboris, kolaborasi lintas disiplin berjalan alami tanpa sekat.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Kirana Laras',
    role: 'Content Strategist & Copywriter',
    chapter: 'Chapter Yogyakarta',
    text: 'Slogan Kolaborasi, Kreativitas, dan Koneksi Tanpa Batas benar-benar dihidupkan dalam setiap inisiatifnya. Bukan sekadar teori, tapi praktek bareng yang aplikatif.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];
