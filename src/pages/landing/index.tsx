'use client';

import LandingHero from '@/components/landing-page/LandingHero';

export default function LandingPage() {
  return (
    <div 
      style={{
        backgroundImage: "url('/images/Indo.svg')",
        backgroundSize: '97%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f0f8ff',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
        position: 'relative'
      }}
    >
      <LandingHero />
    </div>
  );
}