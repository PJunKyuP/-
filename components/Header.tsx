import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const getLinkClass = (view: ViewState) => {
    const isActive = currentView === view;
    // Group enables child elements to react to hover
    return `group relative cursor-pointer text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
      isActive ? "text-blue-900 font-medium" : "text-neutral-400 hover:text-black"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-40 py-6 md:py-8 px-6 md:px-12 flex justify-between items-center border-b border-neutral-100 transition-all duration-500">
      <div 
        className="group cursor-pointer select-none"
        onClick={() => setView(ViewState.GALLERY)}
        title="White Frost"
      >
        <h1 className="text-3xl md:text-5xl font-serif-kr font-bold text-neutral-900 tracking-tighter group-hover:opacity-70 transition-opacity duration-500">
          白霜
        </h1>
      </div>
      
      <nav className="flex space-x-8 md:space-x-12">
        {[
          { label: 'Work', value: ViewState.GALLERY },
          { label: 'About', value: ViewState.ABOUT },
          { label: 'Contact', value: ViewState.CONTACT },
        ].map((item) => (
          <span 
            key={item.label}
            onClick={() => setView(item.value)} 
            className={getLinkClass(item.value)}
          >
            {item.label}
            {/* Animated Underline - Centered Expansion */}
            {/* Uses left-1/2 and -translate-x-1/2 to ensure it grows from the exact center */}
            <span className={`absolute -bottom-2 left-1/2 h-[1px] bg-blue-800 transform -translate-x-1/2 transition-all duration-300 ease-out ${
              currentView === item.value ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Header;