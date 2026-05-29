"use client";
import React, { useState } from 'react';
import { FileText, ChevronRight, Download, Calendar } from 'lucide-react';

const publicationData = {
  Leis: [
    { title: 'Lei Complementar nº 045/2026', desc: 'Dispõe sobre o regime jurídico dos servidores públicos.', date: '15/05/2026' },
    { title: 'Lei Ordinária nº 1234/2026', desc: 'Denomina logradouro público no Bairro Centro.', date: '10/05/2026' },
    { title: 'Lei nº 1233/2026', desc: 'Autoriza abertura de crédito suplementar.', date: '05/05/2026' },
  ],
  Decretos: [
    { title: 'Decreto nº 012/2026', desc: 'Regulamenta o uso de veículos oficiais.', date: '18/05/2026' },
    { title: 'Decreto nº 011/2026', desc: 'Prorroga o prazo de validade de concurso público.', date: '12/05/2026' },
  ],
  Portarias: [
    { title: 'Portaria nº 567/2026', desc: 'Nomeia comissão de fiscalização de contratos.', date: '19/05/2026' },
    { title: 'Portaria nº 566/2026', desc: 'Concede licença prêmio a servidor.', date: '19/05/2026' },
  ],
  Licitações: [
    { title: 'Pregão Eletrônico 005/2026', desc: 'Aquisição de merenda escolar.', date: '20/05/2026' },
    { title: 'Tomada de Preços 002/2026', desc: 'Reforma da Unidade Básica de Saúde.', date: '14/05/2026' },
  ]
};

const PublicationTabs = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof publicationData>('Leis');

  return (
    <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden">
      <div className="flex border-b border-zinc-100 overflow-x-auto bg-zinc-50/50">
        {Object.keys(publicationData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as keyof typeof publicationData)}
            className={`px-6 py-4 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeTab === tab 
                ? 'text-[var(--primary)] border-b-4 border-[var(--primary)] bg-white' 
                : 'text-zinc-400 hover:text-zinc-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="p-2 md:p-4">
        {publicationData[activeTab].map((item, idx) => (
          <div 
            key={idx} 
            className="p-3 md:p-4 hover:bg-zinc-50 rounded-2xl transition-all cursor-pointer group flex items-start justify-between gap-4 border-b border-zinc-50 last:border-0"
          >
            <div className="flex gap-3 md:gap-4 items-start flex-1 min-w-0">
              <div className="p-2 md:p-3 bg-blue-50 text-[var(--primary)] rounded-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-colors flex-shrink-0">
                <FileText className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-zinc-800 text-sm group-hover:text-[var(--primary)] transition-colors truncate">{item.title}</h4>
                <p className="text-xs text-zinc-500 line-clamp-1 mt-1 font-medium">{item.desc}</p>
                <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  <Calendar size={12} />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            <div className="flex md:opacity-0 group-hover:opacity-100 transition-opacity gap-1.5 flex-shrink-0">
               <button className="p-1.5 md:p-2 bg-white shadow-sm border border-zinc-100 rounded-lg text-zinc-400 hover:text-[var(--primary)]" title="Visualizar">
                 <ChevronRight size={16} />
               </button>
               <button className="p-1.5 md:p-2 bg-white shadow-sm border border-zinc-100 rounded-lg text-zinc-400 hover:text-[var(--secondary)]" title="Baixar PDF">
                 <Download size={16} />
               </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full py-4 bg-zinc-50 text-xs font-black text-[var(--primary)] hover:bg-zinc-100 transition-colors uppercase tracking-widest border-t border-zinc-100">
        Ver todas as publicações
      </button>
    </div>
  );
};

export default PublicationTabs;
