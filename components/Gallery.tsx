import React from 'react';
import { Photo } from '../types';

interface GalleryProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

const Gallery: React.FC<GalleryProps> = ({ photos, onPhotoClick }) => {
  return (
    <div className="w-full px-4 md:px-12 pb-24 pt-32 md:pt-40">
      {/* Tailwind Columns for Masonry Effect */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            // Staggered animation delay based on index
            className="break-inside-avoid group cursor-pointer relative overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => onPhotoClick(photo)}
          >
            <div className="relative overflow-hidden w-full h-auto">
                <img 
                src={photo.thumbnail} 
                alt={photo.title}
                className="w-full h-auto object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
                />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 pointer-events-none" />
            
            {/* Hover Info - Slide up effect */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <div className="bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="block text-xs text-neutral-400 font-bold tracking-widest uppercase mb-1">{photo.category}</span>
                    <span className="block text-sm text-black font-serif-kr">{photo.title}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;