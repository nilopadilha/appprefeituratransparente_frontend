"use client";

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import { Search, Filter, Mail, Phone, Info } from 'lucide-react';

const representatives = [
  { id: 1, name: 'Paulo Ananias', party: 'PTN', role: 'Presidente', image: '/img1.jpg', contact: 'paulo@exemplo.gov', phone: '(84) 3333-0001' },
  { id: 2, name: 'Irene Yara Tapajós', party: 'UEB', role: 'Vice-Presidente', image: '/img2.jpg', contact: 'irene@exemplo.gov', phone: '(84) 3333-0002' },
  { id: 3, name: 'Dr. Augusto Lira', party: 'PJS', role: '1º Secretário', image: '/img3.jpg', contact: 'augusto@exemplo.gov', phone: '(84) 3333-0003' },
  { id: 4, name: 'Marcos Tavares', party: 'AND', role: 'Vereador', image: '/img4.jpg', contact: 'marcos@exemplo.gov', phone: '(84) 3333-0004' },
  { id: 5, name: 'Verônica Matos', party: 'FPB', role: 'Vereadora', image: '/img5.jpg', contact: 'veronica@exemplo.gov', phone: '(84) 3333-0005' },
  { id: 6, name: 'Fábio Mendonça', party: 'PLE', role: 'Vereador', image: '/img6.jpg', contact: 'fabio@exemplo.gov', phone: '(84) 3333-0006' },
];

export default function RepresentativesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [partyFilter, setPartyFilter] = useState('Todos');

  const parties = ['Todos', ...Array.from(new Set(representatives.map(r => r.party)))];

  const filtered = representatives.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesParty = partyFilter === 'Todos' || r.party === partyFilter;
    return matchesSearch && matchesParty;
  });

  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="w-full bg-[var(--primary)] text-white py-16 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Nossos Representantes</h1>
          <p className="text-blue-100 text-lg">Conheça os parlamentares que trabalham pelo desenvolvimento do nosso município.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar pelo nome..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-4 shadow-sm">
            <Filter size={18} className="text-zinc-400" />
            <select 
              className="py-3 bg-transparent outline-none text-zinc-600 font-medium cursor-pointer"
              value={partyFilter}
              onChange={(e) => setPartyFilter(e.target.value)}
            >
              {parties.map(party => (
                <option key={party} value={party}>{party}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(r => (
            <div key={r.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 group hover:border-blue-300 transition-all hover:-translate-y-2">
              <div className="aspect-[4/5] relative overflow-hidden bg-zinc-100">
                <Image 
                  src={r.image} 
                  alt={r.name} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full py-3 bg-yellow-400 text-black font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-xl">
                    <Info size={14} /> PERFIL COMPLETO
                  </button>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <span className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.2em] mb-1 block">
                  {r.role}
                </span>
                <h3 className="text-xl font-bold text-zinc-800 mb-2 group-hover:text-[var(--primary)] transition-colors">{r.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full text-[10px] font-bold">
                    PARTIDO: {r.party}
                  </span>
                </div>
                
                <div className="pt-4 border-t border-zinc-50 flex justify-center gap-4 text-zinc-400">
                  <a href={`mailto:${r.contact}`} className="hover:text-[var(--primary)] transition-colors"><Mail size={20} /></a>
                  <a href={`tel:${r.phone}`} className="hover:text-[var(--primary)] transition-colors"><Phone size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-zinc-200 mt-8">
            <p className="text-zinc-400 font-bold">Nenhum representante encontrado com este critério.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
