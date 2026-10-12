import React from 'react';
import { Page } from '../../types';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { PillarsSection } from './components/PillarsSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HomeCtaSection } from './components/HomeCtaSection';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <PillarsSection onNavigate={onNavigate} />
      <AtmosphereSection onNavigate={onNavigate} />
      <TestimonialsSection />
      <HomeCtaSection onNavigate={onNavigate} />
    </div>
  );
};
