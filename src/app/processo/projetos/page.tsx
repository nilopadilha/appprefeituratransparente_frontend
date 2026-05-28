"use client";

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Search, Filter, FileText, ChevronRight, Download, Calendar } from 'lucide-react';

const projects = [
  { id: '123/2025', title: 'Projeto de Lei de Transporte Gratuito', author: 'Paulo Ananias', status: 'Em Tramitação', date: '10/05/2025', type: 'Projeto de Lei' },
  { id: '045/2025', title: 'Revisão do Plano Diretor Municipal', author: 'Executivo Municipal', status: 'Aprovado', date: '15/05/2025', type: 'Projeto de Lei Complementar' },
  { id: '088/2025', title: 'Criação da Frente de Sustentabilidade', author: 'Verônica Matos', status: 'Vetado', date: '20/05/2025', type: 'Resolução' },
  { id: '012/2025', title: 'Orçamento Anual 2026', author: 'Executivo Municipal', status: 'Aguardando Votação', date: '22/05/2025', type: 'Projeto de Lei Orçamentária' },
  { id: '156/2025', title: 'Denominação de Praça no Bairro Norte', author: 'Marcos Tavares', status: 'Aprovado', date: '25/05/2025', type: 'Projeto de Lei' },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const statuses = ['Todos', ...Array.from(new Set(projects.map(p => p.status)))];

  const filtered = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.includes(searchTerm);
    const matchesStatus = statusFilter === 'Todos' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aprovado': return 'bg-green-50 text-green-600 border-green-100';
      case 'Vetado': return 'bg-red-50 text-red-600 border-red-100';
      case 'Em Tramitação': return 'bg-blue-50 text-blue-600 border-blue-100';
      default: return 'bg-zinc-100 text-zinc-500 border-zinc-200';
    }
  };

  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="w-full bg-[var(--primary)] text-white py-16 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Processo Legislativo</h1>
          <p className="text-blue-100 text-lg">Acompanhe todos os projetos, leis e resoluções em tramitação no nosso município.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        {/* Advanced Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 mb-8 flex flex-col lg:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar por título ou número (ex: 123/2025)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full lg:w-auto">
            <div className="flex-1 lg:w-48 relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <select 
                className="w-full pl-9 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-[var(--primary)] cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors flex items-center gap-2">
              <Search size={18} /> BUSCAR
            </button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-zinc-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-100">
                  <th className="px-6 py-4 text-xs font-black text-zinc-400 uppercase tracking-widest">Número</th>
                  <th className="px-6 py-4 text-xs font-black text-zinc-400 uppercase tracking-widest">Título / Ementa</th>
                  <th className="px-6 py-4 text-xs font-black text-zinc-400 uppercase tracking-widest">Autor</th>
                  <th className="px-6 py-4 text-xs font-black text-zinc-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-black text-zinc-400 uppercase tracking-widest text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {filtered.map(p => (
                  <tr key={p.id} className="hover:bg-zinc-50/50 transition-colors group">
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className="font-mono text-sm font-bold text-[var(--primary)]">{p.id}</span>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col">
                        <span className="text-zinc-800 font-bold group-hover:text-[var(--primary)] transition-colors leading-tight mb-1">{p.title}</span>
                        <div className="flex items-center gap-3 text-[10px] text-zinc-400 font-bold">
                          <span className="flex items-center gap-1 uppercase"><FileText size={10} /> {p.type}</span>
                          <span className="flex items-center gap-1 uppercase"><Calendar size={10} /> {p.date}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className="text-sm text-zinc-600">{p.author}</span>
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border ${getStatusColor(p.status)}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right whitespace-nowrap">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-zinc-400 hover:text-[var(--primary)] transition-colors" title="Ver Detalhes">
                          <ChevronRight size={20} />
                        </button>
                        <button className="p-2 text-zinc-400 hover:text-green-600 transition-colors" title="Baixar PDF">
                          <Download size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-400 font-bold">Nenhum projeto encontrado para esta pesquisa.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
