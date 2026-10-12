import { TeamMember, CommunityChapter } from '../../types';
import fahrizImg from '../../assets/images/fahriz.jpeg';
import tazImg from '../../assets/images/taz.jpeg';
import akfalImg from '../../assets/images/akfal.jpeg';
import konongImg from '../../assets/images/konong_2.jpeg';

export const ABOUT_VALUES = [
  {
    title: 'Inklusivitas Terbuka',
    desc: 'Setiap individu terlepas dari latar belakang pengalaman berhak mendapatkan ruang aman untuk bersuara dan belajar.'
  },
  {
    title: 'Kreativitas Aplikatif',
    desc: 'Ide bernilai ketika diterjemahkan menjadi solusi fungsional yang mampu memecahkan tantangan riil di sekeliling kita.'
  },
  {
    title: 'Kolaborasi Radikal',
    desc: 'Meruntuhkan tembok pemisah antar keahlian. Saling merangkul dan berdampingan untuk melahirkan aksi nyata.'
  },
  {
    title: 'Dampak Berkelanjutan',
    desc: 'Mendorong karya dan inisiatif yang tidak sekadar viral sesaat, namun memberi nilai tambah bagi masyarakat luas.'
  }
];

export const TEAM_DIVISIONS = [
  { id: 'all', label: 'Semua Pengurus' },
  { id: 'BPH', label: 'BPH / Pimpinan' },
  { id: 'korlap-all', label: 'Semua Korlap' },
  { id: 'Korlap Kab. Tasikmalaya', label: 'Korlap Kab. Tasikmalaya' },
  { id: 'Korlap Kota. Tasikmalaya', label: 'Korlap Kota. Tasikmalaya' },
  { id: 'Korlap Garut', label: 'Korlap Garut' },
  { id: 'Korlap Jabodetabek', label: 'Korlap Jabodetabek' },
  { id: 'Korlap Bandung Raya', label: 'Korlap Bandung Raya' },
  { id: 'Korlap Purwasuka Susuci', label: 'Korlap Purwasuka Susuci' },
  { id: 'Korlap Ciamis', label: 'Korlap Ciamis' },
];

export const MOCK_TEAM: TeamMember[] = [
  // BPH / Pimpinan
  {
    id: 'tm-01',
    name: 'SALMAN MUHARAM',
    role: 'Ketua Umum',
    division: 'BPH',
    bio: 'Product Strategist & Inisiator kepemudaan yang memimpin visi Damboris sebagai ekosistem aksi sosial kolaboratif di Jawa Barat dan sekitarnya.',
    avatar: 'src/assets/images/emon.jpeg',
    quote: 'Komunitas yang hebat bukanlah yang paling banyak anggotanya, melainkan yang paling banyak melahirkan kebermanfaatan nyata.',
    socials: {
      instagram: 'https://www.instagram.com/sal.mhrm_?mdxt=NDQxZjFjbmE3ZmVi',
    }
  },
  {
    id: 'tm-02',
    name: 'SALMAN MUHARAM',
    role: 'Ketua I',
    division: 'BPH',
    bio: 'Mengkoordinasikan pergerakan struktural, pengawasan program kerja, dan konsolidasi pengurus Damboris.',
    avatar: 'src/assets/images/emon.jpeg',
    quote: 'Saling menguatkan dan berkolaborasi adalah kunci menjaga api semangat pergerakan.',
    socials: {
      instagram: 'https://www.instagram.com/sal.mhrm_?mdxt=NDQxZjFjbmE3ZmVi',
    }
  },

  {
    id: 'tm-03',
    name: 'SALMAN MUHARAM',
    role: 'Ketua II',
    division: 'BPH',
    bio: 'Penggerak komunitas dengan dedikasi tinggi pada tata kelola organisasi nirlaba, program pemberdayaan, dan penguatan jejaring pemuda.',
    avatar: 'src/assets/images/emon.jpeg',
    quote: 'Ruang yang aman dan suportif adalah tempat terbaik bagi niat baik untuk bertumbuh.',
    socials: {
      instagram: 'https://www.instagram.com/sal.mhrm_?mdxt=NDQxZjFjbmE3ZmVi',
    }
  },
  {
    id: 'tm-04',
    name: 'FAHRIZ ADRIANSYAH',
    role: 'Sekretaris Umum',
    division: 'BPH',
    bio: 'Mengelola tata kelola administrasi, kesekretariatan, dan keterhubungan internal antar pengurus serta korlap daerah komunitas Damboris.',
    avatar: fahrizImg,
    quote: 'Setiap perjumpaan adalah panggung bersatunya rasa penasaran dengan rekan sepemikiran.',
    socials: {
      instagram: 'https://instagram.com/bagasramadhan',
    }
  },
  {
    id: 'tm-05',
    name: 'M TAZ ZHARFAN',
    role: 'Bendahara Umum',
    division: 'BPH',
    bio: 'Mengelola tata kelola keuangan, transparansi anggaran, serta alokasi pendanaan program aksi sosial komunitas Damboris.',
    avatar: tazImg,
    quote: 'Amanah dalam pengelolaan keuangan adalah pondasi utama keberlanjutan sebuah pergerakan.',
    socials: {
      instagram: 'https://instagram.com',
    }
  },
  {
    id: 'tm-06',
    name: 'IQBAL MAULANA YASIN',
    role: 'Wakil Bendahara',
    division: 'BPH',
    bio: 'Mendukung pencatatan kas, pelaporan keuangan berkala, dan operasional pendanaan kegiatan komunitas Damboris.',
    avatar: 'src/assets/images/SEBUY.jpeg',
    quote: 'Transparansi dan ketelitian membawa keberkahan dalam setiap langkah kebaikan bersama.',
    socials: {
      instagram: 'https://instagram.com',
    }
  },
  
  // Korlap Per Wilayah
  {
    id: 'tm-07',
    name: 'YUDA NUGRAHA',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Kab. Tasikmalaya',
    bio: 'Mengkoordinasikan simpul pergerakan pemuda, kajian diskusi santai, dan agenda bakti sosial Damboris di wilayah Kabupaten Tasikmalaya.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: 'Bergerak bersama dari akar rumput demi kebermanfaatan nyata bagi masyarakat.',
    socials: {
      instagram: 'https://instagram.com/dimassetiawan',
    }
  },

  {
    id: 'tm-08',
    name: 'DEDE ABDUL BASITH',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Kab. Tasikmalaya',
    bio: 'Mengkoordinasikan simpul pergerakan pemuda, kajian diskusi santai, dan agenda bakti sosial Damboris di wilayah Kabupaten Tasikmalaya.',
    avatar: 'src/assets/images/DEBAS.jpeg',
    quote: 'Bergerak bersama dari akar rumput demi kebermanfaatan nyata bagi masyarakat.',
    socials: {
      instagram: 'https://instagram.com/dimassetiawan',
    }
  },

   {
    id: 'tm-09',
    name: 'BINTANG FAREL',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Kab. Tasikmalaya',
    bio: 'Mengkoordinasikan simpul pergerakan pemuda, kajian diskusi santai, dan agenda bakti sosial Damboris di wilayah Kabupaten Tasikmalaya.',
    avatar: ' ',
    quote: 'Bergerak bersama dari akar rumput demi kebermanfaatan nyata bagi masyarakat.',
    socials: {
      instagram: 'https://instagram.com/dimassetiawan',
    }
  },

  {
    id: 'tm-10',
    name: 'HAIKAL NURFADILAH',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Kab. Tasikmalaya',
    bio: 'Mengkoordinasikan simpul pergerakan pemuda, kajian diskusi santai, dan agenda bakti sosial Damboris di wilayah Kabupaten Tasikmalaya.',
    avatar: ' ',
    quote: 'Bergerak bersama dari akar rumput demi kebermanfaatan nyata bagi masyarakat.',
    socials: {
      instagram: 'https://instagram.com/dimassetiawan',
    }
  },

  {
    id: 'tm-11',
    name: 'RIF,AT RIFAATUL A',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Kab. Tasikmalaya',
    bio: 'Mengkoordinasikan simpul pergerakan pemuda, kajian diskusi santai, dan agenda bakti sosial Damboris di wilayah Kabupaten Tasikmalaya.',
    avatar: ' ',
    quote: 'Bergerak bersama dari akar rumput demi kebermanfaatan nyata bagi masyarakat.',
    socials: {
      instagram: 'https://instagram.com/dimassetiawan',
    }
  },

  {
    id: 'tm-11',
    name: 'AKFALUL MUGHNI',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Kota. Tasikmalaya',
    bio: 'Menghubungkan simpul pemuda perkotaan, santri, dan komunitas lokal di Kota Tasikmalaya untuk kolaborasi aksi nyata.',
    avatar: 'src/assets/images/akfal.jpeg',
    quote: 'Ruang temu yang hangat melahirkan aksi kepemudaan yang hebat.',
    socials: {
      instagram: 'https://instagram.com/haikalzaidan',
    }
  },

  {
    id: 'tm-12',
    name: 'REZA',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Kota. Tasikmalaya',
    bio: 'Menghubungkan simpul pemuda perkotaan, santri, dan komunitas lokal di Kota Tasikmalaya untuk kolaborasi aksi nyata.',
    avatar: ,
    quote: 'Ruang temu yang hangat melahirkan aksi kepemudaan yang hebat.',
    socials: {
      instagram: 'https://instagram.com/haikalzaidan',
    }
  },

  {
    id: 'tm-13',
    name: 'NIJAN ARIFAN',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Garut',
    bio: 'Mengawal pergerakan jejaring pemuda dan inisiatif kemanusiaan Damboris di seluruh penjuru wilayah Kabupaten Garut.',
    avatar: 'src/assets/images/konong 2.jpeg',
    quote: 'Ketulusan niat adalah penggerak utama langkah kebaikan di tanah kelahiran.',
    socials: {
      instagram: 'https://www.instagram.com/nijanarifan_?dlrf=MTNvbHpzbzM5ZnN4aw==',
    }
  },

  {
    id: 'tm-14',
    name: 'RIFQI TRI G',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Garut',
    bio: 'Mengawal pergerakan jejaring pemuda dan inisiatif kemanusiaan Damboris di seluruh penjuru wilayah Kabupaten Garut.',
    avatar: 'src/assets/images/raju.jpeg',
    quote: 'Ketulusan niat adalah penggerak utama langkah kebaikan di tanah kelahiran.',
    socials: {
      instagram: 'https://www.instagram.com/nijanarifan_?dlrf=MTNvbHpzbzM5ZnN4aw==',
    }
  },

  {
    id: 'tm-15',
    name: 'zaki Ahmad',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Jabodetabek',
    bio: 'Mengkoordinasikan simpul-simpul anggota pemuda dan mahasiswa di kawasan Jakarta, Bogor, Depok, Tangerang, dan Bekasi.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    quote: 'Jarak metropolitan tidak menghalangi ikatan kepedulian dan kebersamaan.',
    socials: {
      instagram: 'https://instagram.com/bagasramadhan',
    }
  },

  {
    id: 'tm-16',
    name: 'RAIHAN MUSADAD',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Jabodetabek',
    bio: 'Mengkoordinasikan simpul-simpul anggota pemuda dan mahasiswa di kawasan Jakarta, Bogor, Depok, Tangerang, dan Bekasi.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    quote: 'Jarak metropolitan tidak menghalangi ikatan kepedulian dan kebersamaan.',
    socials: {
      instagram: 'https://instagram.com/bagasramadhan',
    }
  },

  {
    id: 'tm-17',
    name: 'MAULANA SAMSYUL',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Jabodetabek',
    bio: 'Mengkoordinasikan simpul-simpul anggota pemuda dan mahasiswa di kawasan Jakarta, Bogor, Depok, Tangerang, dan Bekasi.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    quote: 'Jarak metropolitan tidak menghalangi ikatan kepedulian dan kebersamaan.',
    socials: {
      instagram: 'https://instagram.com/bagasramadhan',
    }
  },

  {
    id: 'tm-18',
    name: 'AHMAD DYAN',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Bandung Raya',
    bio: 'Memfasilitasi diskusi rutin santai, jejaring kreatif, dan aksi sosial pemuda di wilayah Kota & Kab. Bandung serta Cimahi.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    quote: 'Pemuda yang bersatu akan melipatgandakan dampak kebaikan bagi sesama.',
    socials: {
      instagram: 'https://instagram.com/clarissaputri',
    }
  },

  {
    id: 'tm-19',
    name: 'ANDIKA M RIZKI',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Bandung Raya',
    bio: 'Memfasilitasi diskusi rutin santai, jejaring kreatif, dan aksi sosial pemuda di wilayah Kota & Kab. Bandung serta Cimahi.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    quote: 'Pemuda yang bersatu akan melipatgandakan dampak kebaikan bagi sesama.',
    socials: {
      instagram: 'https://instagram.com/clarissaputri',
    }
  },

  {
    id: 'tm-20',
    name: 'ASOP SOPYUDIN',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Purwasuka Susuci',
    bio: 'Mengawal koordinasi wilayah Purwakarta, Subang, Karawang, Sukabumi, dan Cianjur dalam aksi sosial terpadu.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    quote: 'Gerakan nyata berakar dari kepedulian yang konsisten di tengah masyarakat.',
    socials: {
      instagram: 'https://instagram.com/rizkyfauzan',
    }
  },

  {
    id: 'tm-21',
    name: 'AKMAL PAMUNGKAS',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap Purwasuka Susuci',
    bio: 'Mengawal koordinasi wilayah Purwakarta, Subang, Karawang, Sukabumi, dan Cianjur dalam aksi sosial terpadu.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    quote: 'Gerakan nyata berakar dari kepedulian yang konsisten di tengah masyarakat.',
    socials: {
      instagram: 'https://instagram.com/rizkyfauzan',
    }
  },

  {
    id: 'tm-22',
    name: 'ALVAN RIYADHI',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap CIAMIS',
    bio: 'Mengawal koordinasi wilayah Purwakarta, Subang, Karawang, Sukabumi, dan Cianjur dalam aksi sosial terpadu.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    quote: 'Gerakan nyata berakar dari kepedulian yang konsisten di tengah masyarakat.',
    socials: {
      instagram: 'https://instagram.com/rizkyfauzan',
    }
  },

   {
    id: 'tm-22',
    name: 'ISMI AZIZ',
    role: 'Koordinator Lapangan (Korlap)',
    division: 'Korlap CIAMIS',
    bio: 'Mengawal koordinasi wilayah Purwakarta, Subang, Karawang, Sukabumi, dan Cianjur dalam aksi sosial terpadu.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    quote: 'Gerakan nyata berakar dari kepedulian yang konsisten di tengah masyarakat.',
    socials: {
      instagram: 'https://instagram.com/rizkyfauzan',
    }
  }
];

export const COMMUNITY_CHAPTERS: CommunityChapter[] = [
  { city: 'Kab. Tasikmalaya', lead: 'YUDA NUGRAHA', membersCount: 28, activeStatus: 'Aktif' },
  { city: 'Kota. Tasikmalaya', lead: 'AKFALUL MUGHNI', membersCount: 22, activeStatus: 'Aktif' },
  { city: 'Garut', lead: 'NIJAN ARIFAN', membersCount: 18, activeStatus: 'Aktif' },
  { city: 'Jabodetabek', lead: 'ZAKI AHMAD', membersCount: 24, activeStatus: 'Aktif' },
  { city: 'Bandung Raya', lead: 'AHMAD DYAN', membersCount: 20, activeStatus: 'Aktif' },
  { city: 'Purwasuka Susuci', lead: 'ASOP SOPYUDIN', membersCount: 15, activeStatus: 'Aktif' },
  { city: 'Ciamis', lead: 'ALVAN RIYADHI', membersCount: 15, activeStatus: 'Aktif' },
];
