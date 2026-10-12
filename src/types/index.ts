export type Page = 'home' | 'about' | 'gallery' | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: string;
  bio: string;
  avatar: string;
  quote: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'GATHERING AKBAR' | 'BANTUAN SOSIAL' | 'BUKA BERSAMA' | 'DISKUSI RUTIN';
  date: string;
  location: string;
  image: string;
  description: string;
  photographer?: string;
}

export interface CommunityChapter {
  city: string;
  lead: string;
  membersCount: number;
  activeStatus: string;
}

export interface VirtualMemberCard {
  memberId: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  primaryInterest: string;
  joinedDate: string;
}
