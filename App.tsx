import React, { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import PhotoModal from './components/PhotoModal';
import About from './components/About';
import Contact from './components/Contact';
import { Photo, ViewState } from './types';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.GALLERY);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = PORTFOLIO_DATA.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_DATA.length;
    setSelectedPhoto(PORTFOLIO_DATA[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = PORTFOLIO_DATA.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length;
    setSelectedPhoto(PORTFOLIO_DATA[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Header currentView={currentView} setView={setCurrentView} />

      <main className="w-full mx-auto max-w-[1920px]">
        {currentView === ViewState.GALLERY && (
          <Gallery photos={PORTFOLIO_DATA} onPhotoClick={handlePhotoClick} />
        )}
        
        {currentView === ViewState.ABOUT && <About />}
        
        {currentView === ViewState.CONTACT && <Contact />}
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-neutral-50 mt-12">
        <p className="text-[10px] text-neutral-300 uppercase tracking-widest leading-loose">
          © 2026 白霜 Baek-Sang. All rights reserved. <br />
          Made by Forme.
        </p>
      </footer>

      {/* Modal */}
      <PhotoModal 
        photo={selectedPhoto} 
        onClose={handleCloseModal}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
        onRelatedClick={handlePhotoClick}
      />
    </div>
  );
};

export default App;