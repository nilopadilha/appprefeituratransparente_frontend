"use client";

import React, { useState, useEffect } from 'react';
import { Type, Contrast, Eye } from 'lucide-react';

const AccessibilityBar: React.FC = () => {
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 10, 80));
  const toggleHighContrast = () => setIsHighContrast(!isHighContrast);

  return (
    <div className="w-full bg-zinc-900 text-white text-[10px] md:text-xs py-1 px-4 z-[110] relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <button 
            onClick={decreaseFontSize}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
            title="Diminuir fonte"
          >
            A-
          </button>
          <button 
            onClick={() => setFontSize(100)}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
            title="Tamanho padrão"
          >
            <Type size={14} />
          </button>
          <button 
            onClick={increaseFontSize}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
            title="Aumentar fonte"
          >
            A+
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={toggleHighContrast}
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
            title="Contraste"
          >
            <Contrast size={14} />
            <span className="hidden sm:inline">Alto Contraste</span>
          </button>
          <a 
            href="https://www.vlibras.gov.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-yellow-400 transition-colors"
          >
            <Eye size={14} />
            <span className="hidden sm:inline">VLibras</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityBar;
