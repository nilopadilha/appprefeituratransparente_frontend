import React from 'react';
import { Book, ChevronRight, Search, Calendar } from 'lucide-react';

const OfficialDiary = () => {
  return (
    <div className="bg-[var(--primary)] rounded-[32px] md:rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden group">
      {/* Decorative element */}
      <div className="absolute -right-8 -top-8 text-white/5 group-hover:scale-110 transition-transform duration-700">
        <Book className="w-48 h-48 md:w-60 md:h-60" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 md:p-3 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl">
            <Book className="w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">Diário Oficial</h2>
            <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">Atos do Poder Executivo</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-[20px] md:rounded-2xl p-5 md:p-6 border border-white/10 mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">Última Edição</span>
            <span className="text-[10px] font-black bg-[var(--accent)] text-black px-2 py-0.5 rounded">HOJE</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">Edição nº 1.284/2026</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-blue-100">
             <div className="flex items-center gap-1.5">
               <Calendar size={14} />
               <span>28 de Maio, 2026</span>
             </div>
             <span className="hidden sm:inline">•</span>
             <span>128 Páginas</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-white text-[var(--primary)] py-3.5 md:py-4 rounded-xl md:rounded-2xl font-black text-sm hover:bg-[var(--accent)] hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg">
            ACESSAR EDIÇÃO ATUAL
            <ChevronRight size={18} />
          </button>
          <button className="w-full bg-white/5 border border-white/10 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Search size={18} />
            PESQUISAR NO ACERVO
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
            <div className="text-center">
                <p className="text-xl md:text-2xl font-black text-white">452</p>
                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Edições em 2026</p>
            </div>
            <div className="text-center border-l border-white/10">
                <p className="text-xl md:text-2xl font-black text-white">12.4k</p>
                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Atos Publicados</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialDiary;
