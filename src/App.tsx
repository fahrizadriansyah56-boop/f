import React, { useState, useEffect } from 'react';
import { Page, GalleryItem, VirtualMemberCard } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages organized by feature/domain
import { HomePage } from './pages/home/HomePage';
import { AboutPage } from './pages/about/AboutPage';
import { GalleryPage } from './pages/gallery/GalleryPage';
import { ContactPage } from './pages/contact/ContactPage';

// Modals co-located with their respective pages
import { GalleryLightbox } from './pages/gallery/components/GalleryLightbox';
import { SubmitMomentModal } from './pages/gallery/components/SubmitMomentModal';
import { VirtualMemberCardModal } from './pages/contact/components/VirtualMemberCardModal';

// Initial gallery collection
import { INITIAL_GALLERY } from './pages/gallery/galleryData';

export default function App() {
  // Page routing state: Home, About, Gallery, Contact
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Interactive Modals state
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [submitMomentOpen, setSubmitMomentOpen] = useState(false);
  const [virtualMemberCard, setVirtualMemberCard] = useState<VirtualMemberCard | null>(null);

  // Dynamic state for gallery to allow user photo contributions
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(INITIAL_GALLERY);

  // URL Hash Sync for bookmarking & browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages: Page[] = ['home', 'about', 'gallery', 'contact'];
      if (validPages.includes(hash as Page)) {
        setCurrentPage(hash as Page);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = `#/${page === 'home' ? '' : page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddMoment = (newItem: GalleryItem) => {
    setGalleryItems([newItem, ...galleryItems]);
  };

  const handleRegisterMember = (card: VirtualMemberCard) => {
    setVirtualMemberCard(card);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 text-stone-100 font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* 1. Global Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* 2. Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            items={galleryItems}
            onSelectItem={(item) => setSelectedGalleryItem(item)}
            onOpenSubmitModal={() => setSubmitMomentOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onRegisterMember={handleRegisterMember}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Page Modals */}
      {selectedGalleryItem && (
        <GalleryLightbox
          item={selectedGalleryItem}
          items={galleryItems}
          onClose={() => setSelectedGalleryItem(null)}
          onSelect={(item) => setSelectedGalleryItem(item)}
        />
      )}

      {submitMomentOpen && (
        <SubmitMomentModal
          isOpen={submitMomentOpen}
          onClose={() => setSubmitMomentOpen(false)}
          onSubmit={handleAddMoment}
        />
      )}

      {virtualMemberCard && (
        <VirtualMemberCardModal
          card={virtualMemberCard}
          onClose={() => setVirtualMemberCard(null)}
        />
      )}
    </div>
  );
}
