import { GalleryItem } from '../../types';
import { HERO_IMAGE, WORKSHOP_IMAGE, GATHERING_IMAGE, TEAM_IMAGE } from '../../constants/images';

export const GALLERY_CATEGORIES = [
  'all',
  'GATHERING AKBAR',
  'BANTUAN SOSIAL',
  'BUKA BERSAMA',
  'DISKUSI RUTIN',
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Day In Dey: Acara pertama yang dilaksanakan oleh anggota lama dan anggota baru',
    category: 'Annual Gathering',
    date: '28 Desember 2023',
    location: 'Ciwidey, Bandung, Jawa Barat',
    image: HERO_IMAGE,
    description: 'Dokumentasi temu akbar anggota pemuda Damboris dengan agenda gathering, bonfire, diskusi, dan kebersamaan di Ciwidey.',
    photographer: 'Dokumentasi Resmi Damboris'
  },
  {
    id: 'gal-02',
    title: 'Lokakarya UI/UX & Code Prototyping Praktis',
    category: 'Workshop Kreatif',
    date: '28 Agustus 2026',
    location: 'Bandung Creative Hub',
    image: WORKSHOP_IMAGE,
    description: 'Mentor mendampingi peserta menyusun alur antarmuka dan design token.',
    photographer: 'Bayu Saputra'
  },
  {
    id: 'gal-03',
    title: 'Keseruan Obrolan Santai di Kopdar Coffee Meetup',
    category: 'Kopdar & Meetup',
    date: '10 Juli 2026',
    location: 'Kopi Ruang Temu, Tebet',
    image: GATHERING_IMAGE,
    description: 'Suasana hangat anggota saling bertukar cerita karir dan pengalaman freelance.',
    photographer: 'Siti Rahma'
  },
  {
    id: 'gal-04',
    title: 'Rapat Perencanaan Tahunan Pengurus & Mentor',
    category: 'Annual Gathering',
    date: '15 Mei 2026',
    location: 'Damboris Basecamp Studio',
    image: TEAM_IMAGE,
    description: 'Penyusunan blueprint program pemberdayaan dan ekspansi chapter kota baru.',
    photographer: 'Tim Media Damboris'
  },
  {
    id: 'gal-05',
    title: 'Damboris Mengabdi: Kelas Desain untuk UMKM Lokal',
    category: 'Kolaborasi Sosial',
    date: '19 April 2026',
    location: 'Pasar Seni Rawa Belong',
    image: WORKSHOP_IMAGE,
    description: 'Anggota Damboris membimbing pelaku usaha kecil merancang logo dan kemasan produk.',
    photographer: 'Ahmad Faiz'
  },
  {
    id: 'gal-06',
    title: 'Panggung Apresiasi & Showcase Karya Anggota',
    category: 'Annual Gathering',
    date: '20 Desember 2025',
    location: 'Galeri Nasional Indonesia',
    image: HERO_IMAGE,
    description: 'Pameran interaktif 40+ karya seni visual dan produk digital terpilih.',
    photographer: 'Dewi Kartika'
  }
];
