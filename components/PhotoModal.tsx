import React, { useState, useEffect, useRef } from 'react';
import { Photo } from '../types';
import { PORTFOLIO_DATA } from '../constants';

interface PhotoModalProps {
  photo: Photo | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  // New prop to handle clicking related photos inside the modal
  onRelatedClick?: (photo: Photo) => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose, onNext, onPrev, onRelatedClick }) => {
  const [isClosing, setIsClosing] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when photo changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    
    if (photo) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [photo]);

  if (!photo) return null;

  const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => {
          setIsClosing(false);
          onClose();
      }, 300);
  };

  // Filter related photos (same category, excluding current)
  const relatedPhotos = PORTFOLIO_DATA
    .filter(p => p.category === photo.category && p.id !== photo.id)
    .slice(0, 3);

  // Fallback if no related photos in same category (just take others)
  const displayRelated = relatedPhotos.length > 0 
    ? relatedPhotos 
    : PORTFOLIO_DATA.filter(p => p.id !== photo.id).slice(0, 3);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-white/95 backdrop-blur-md transition-opacity duration-300" 
        onClick={handleClose}
      />

      {/* Fixed UI Elements */}
      <button 
        onClick={(e) => { e.stopPropagation(); handleClose(); }} 
        className="fixed top-6 right-6 text-neutral-400 hover:text-blue-900 transition-colors z-[60] p-2 transform hover:rotate-90 duration-500 bg-white/50 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev/Next Navigation (Fixed) */}
      <div className="fixed inset-y-0 left-0 w-16 md:w-24 z-[55] flex items-center justify-center pointer-events-none">
        <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="pointer-events-auto text-neutral-300 hover:text-black hover:scale-110 transition-all duration-300 p-4"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
      </div>
      <div className="fixed inset-y-0 right-0 w-16 md:w-24 z-[55] flex items-center justify-center pointer-events-none">
        <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="pointer-events-auto text-neutral-300 hover:text-black hover:scale-110 transition-all duration-300 p-4"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
      </div>

      {/* Scrollable Content Container */}
      <div 
        ref={scrollContainerRef}
        className="w-full h-full overflow-y-auto no-scrollbar relative z-10 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Stop click from closing modal
      >
        <div className="w-full min-h-full flex flex-col items-center pb-24">
            
            {/* Hero Image Section */}
            <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-neutral-50/50 p-6 md:p-12 relative group">
                <img 
                    src={photo.url} 
                    alt={photo.title} 
                    className="max-w-full max-h-full object-contain shadow-2xl shadow-blue-900/5 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
            </div>

            {/* Detailed Content */}
            <div className="w-full max-w-5xl px-6 md:px-12 mt-12 md:mt-16">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 mb-12 gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-800 mb-2 block">{photo.category} Collection</span>
                        <h2 className="text-4xl md:text-5xl font-serif-kr text-black">{photo.title}</h2>
                    </div>
                    <div className="text-right hidden md:block">
                         <span className="text-4xl font-light text-neutral-200 font-serif-kr">{photo.year}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Main Text Column (Left) */}
                    <div className="md:col-span-7 space-y-16">
                        {/* Artist Note */}
                        <div className="prose prose-neutral">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-4">Artist Note</h3>
                            <p className="text-neutral-600 leading-loose text-lg font-light">
                                {photo.description}
                            </p>
                        </div>

                        {/* Series / Gallery Section */}
                        {photo.gallery && photo.gallery.length > 0 && (
                          <div className="space-y-8 animate-fade-in-up">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-100 pb-4">
                              The Series <span className="text-neutral-400 font-normal ml-2">({photo.gallery.length} images)</span>
                            </h3>
                            <div className="flex flex-col gap-12">
                              {photo.gallery.map((imgUrl, index) => (
                                <div key={index} className="w-full">
                                  <img 
                                    src={imgUrl} 
                                    alt={`${photo.title} detail ${index + 1}`} 
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>

                    {/* Meta Data Column (Right) */}
                    <div className="md:col-span-5 space-y-10">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 pb-2 border-b border-neutral-100">Details</h3>
                            <dl className="grid grid-cols-[100px_1fr] gap-y-4 text-sm">
                                <dt className="text-neutral-500">Location</dt>
                                <dd className="text-black font-medium">{photo.location}</dd>
                                
                                <dt className="text-neutral-500">Year</dt>
                                <dd className="text-black font-medium">{photo.year}</dd>
                                
                                <dt className="text-neutral-500">Category</dt>
                                <dd className="text-black font-medium">{photo.category}</dd>

                                <dt className="text-neutral-500">Camera</dt>
                                <dd className="text-black font-medium">{photo.camera}</dd>
                            </dl>
                        </div>
                        
                        <div>
                             <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 pb-2 border-b border-neutral-100">License</h3>
                             <p className="text-xs text-neutral-500 leading-relaxed">
                                 © {photo.year} Baek-Sang. All rights reserved. <br/>
                                 Limited edition prints available upon inquiry.
                             </p>
                        </div>
                    </div>
                </div>

                {/* Related Works Section */}
                <div className="mt-24 pt-12 border-t border-neutral-100">
                    <h3 className="text-xl font-serif-kr mb-8">Related Works</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {displayRelated.map((related) => (
                            <div 
                                key={related.id} 
                                className="group cursor-pointer"
                                onClick={(e) => { 
                                    e.stopPropagation(); 
                                    if(onRelatedClick) onRelatedClick(related); 
                                }}
                            >
                                <div className="overflow-hidden aspect-[4/3] mb-3 relative">
                                    <img 
                                        src={related.thumbnail} 
                                        alt={related.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h4 className="text-sm font-medium text-neutral-900 group-hover:text-blue-900 transition-colors">{related.title}</h4>
                                <p className="text-xs text-neutral-400 uppercase tracking-wider">{related.category}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;