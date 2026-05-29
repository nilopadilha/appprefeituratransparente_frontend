"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, X, Loader2 } from 'lucide-react';

interface City {
  id: string;
  name: string;
  uf: string;
}

interface CitySearchProps {
  onSelect: (city: City) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setLoading(true);
        try {
          const res = await fetch(`/api/cities?q=${encodeURIComponent(query)}`);
          const data = await res.json();
          setResults(data);
          setIsOpen(true);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-full max-w-xl mx-auto" ref={containerRef}>
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[var(--primary)] transition-colors" size={20} />
        <input
          type="text"
          placeholder="Busque por município ou estado (ex: Natal, RN)..."
          className="w-full pl-12 pr-12 py-4 bg-white border-2 border-zinc-100 rounded-2xl shadow-sm focus:border-[var(--primary)] outline-none transition-all text-zinc-800 font-medium placeholder:text-zinc-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
        />
        {query && (
          <button 
            onClick={() => { setQuery(''); setResults([]); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-zinc-100 rounded-full text-zinc-400 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {loading ? (
            <div className="p-8 flex flex-col items-center justify-center gap-3">
              <Loader2 className="animate-spin text-[var(--primary)]" size={24} />
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Buscando localidades...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="max-h-80 overflow-y-auto custom-scrollbar">
              <p className="px-5 py-3 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-50">Resultados encontrados</p>
              {results.map((city) => (
                <button
                  key={city.id}
                  onClick={() => {
                    onSelect(city);
                    setQuery(`${city.name}, ${city.uf}`);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-blue-50 transition-colors border-b border-zinc-50 last:border-0 text-left group"
                >
                  <div className="p-2 bg-zinc-100 text-zinc-400 rounded-lg group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-zinc-800">{city.name}</span>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{city.uf}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-zinc-500 font-medium">Nenhum município encontrado para &quot;{query}&quot;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CitySearch;
