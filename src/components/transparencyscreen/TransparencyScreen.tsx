"use client";
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import { Download, ExternalLink, Search, Filter, FileText, ChevronRight, TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';
import Footer from '../footer/Footer';

const functions = [
    {
        name: "LRF - LEI DE RESPONSABILIDADE FISCAL",
        type: "dropdown",
        category: "Fiscal",
        content: [
          { label: 'RGF - Relatório de Gestão Fiscal 2026', format: 'PDF', size: '2.4MB' },
          { label: 'RREO - Relatório Resumido de Execução Orçamentária', format: 'PDF', size: '3.1MB' },
          { label: 'PCG - Prestação de Contas de Gestão', format: 'PDF', size: '5.8MB' }
        ]
    },
    {
        name: "INSTRUMENTOS DE PLANEJAMENTO",
        type: "dropdown",
        category: "Orçamento",
        content: [
          { label: 'LOA - Lei Orçamentária Anual 2026', format: 'PDF', size: '4.2MB' },
          { label: 'LDO - Lei de Diretrizes Orçamentárias 2026', format: 'PDF', size: '2.4MB' },
          { label: 'PPA - Plano Plurianual 2026-2029', format: 'PDF', size: '10.8MB' }
        ]
    },
    {
        name: "LICITAÇÕES E CONTRATOS",
        type: "dropdown",
        category: "Administrativo",
        content: [
          { label: 'Editais e Anexos 2026', format: 'PDF', size: '5.2MB' },
          { label: 'Contratos e Aditivos', format: 'PDF', size: '12.4MB' },
          { label: 'Dispensa e Inexigibilidade', format: 'PDF', size: '1.8MB' }
        ]
    },
    {
        name: "PORTAL DO SERVIDOR",
        type: 'download',
        category: "Recursos Humanos",
        content: '/servidores.pdf',
        format: 'PDF',
        size: '1.5MB'
    },
    {
        name: "OBRAS PÚBLICAS",
        type: 'redirect',
        category: "Infraestrutura",
        content: '#'
    }
];

interface ContentItem {
  label: string;
  format: string;
  size: string;
}

const TransparencyScreen = () => {
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("Todos");
  const [filterYear, setFilterYear] = useState("2025");

  const categories = ["Todos", ...Array.from(new Set(functions.map(f => f.category)))];
  const years = ["2025", "2024", "2023", "2022"];

  const filteredFunctions = functions.filter(fn => {
    const matchesSearch = fn.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === "Todos" || fn.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className='bg-zinc-50 flex flex-col w-full min-h-screen'>
      <Navbar />
      
      {/* Header Section */}
      <div className='w-full bg-[var(--primary)] text-white py-12 px-4 shadow-lg'>
        <div className="max-w-5xl mx-auto text-center">
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight'>Portal da Transparência</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">Acesso rápido e fácil às informações públicas, garantindo a fiscalização e a participação cidadã.</p>
        </div>
      </div>

      <main id="main-content" className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        {/* Dashboard Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                        <TrendingUp size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12% vs 2024</span>
                </div>
                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Receita Arrecadada</h4>
                <p className="text-2xl font-black text-zinc-800 mt-1">R$ 14.2M</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-50 text-[var(--primary)] rounded-lg">
                        <DollarSign size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">85% Empenhado</span>
                </div>
                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Orçamento Total</h4>
                <p className="text-2xl font-black text-zinc-800 mt-1">R$ 28.5M</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                        <TrendingDown size={24} />
                    </div>
                    <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-1 rounded">-5% vs Jan</span>
                </div>
                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Despesas Mensais</h4>
                <p className="text-2xl font-black text-zinc-800 mt-1">R$ 2.1M</p>
            </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                <input 
                    type="text" 
                    placeholder="O que você procura? (ex: licitações, salários...)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex gap-2">
                <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-3 shadow-sm">
                    <Filter size={18} className="text-zinc-400" />
                    <select 
                        className="py-3 pr-8 bg-transparent outline-none text-zinc-600 font-medium cursor-pointer"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-3 shadow-sm">
                    <Calendar size={18} className="text-zinc-400" />
                    <select 
                        className="py-3 pr-8 bg-transparent outline-none text-zinc-600 font-medium cursor-pointer"
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                    >
                        {years.map(yr => (
                            <option key={yr} value={yr}>{yr}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>

        {/* Content List */}
        <div className="grid gap-4">
            {filteredFunctions.length > 0 ? (
                filteredFunctions.map((fn, index) => {
                    const isDropdown = fn.type === 'dropdown';
                    const isOpen = openDropdown[fn.name];

                    return (
                        <div key={index} className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden transition-all hover:border-[var(--primary)]">
                            <button
                                onClick={() => isDropdown ? toggleDropdown(fn.name) : (fn.type === 'redirect' ? window.open(fn.content as string, '_blank') : null)}
                                className={`w-full flex justify-between items-center p-5 text-left transition-colors ${isOpen ? 'bg-zinc-50' : ''}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-50 text-[var(--primary)] rounded-lg">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest">{fn.category}</span>
                                            {fn.type === 'download' && (
                                                <span className="text-[9px] font-bold bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded uppercase">{fn.format} • {fn.size}</span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-zinc-800 uppercase leading-tight">{fn.name}</h3>
                                    </div>
                                </div>
                                {isDropdown ? (
                                    <ChevronRight className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                                ) : (
                                    fn.type === 'download' ? <Download className="text-zinc-400" /> : <ExternalLink className="text-zinc-400" />
                                )}
                            </button>

                            {isOpen && isDropdown && Array.isArray(fn.content) && (
                                <div className="bg-zinc-50 border-t border-zinc-100 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {fn.content.map((item: ContentItem, i) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className="flex justify-between items-center px-8 py-4 border-b border-zinc-100 last:border-0 hover:bg-white transition-colors group"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-zinc-600 font-medium group-hover:text-[var(--primary)]">{item.label}</span>
                                                <span className="text-[10px] text-zinc-400 font-bold uppercase">{item.format} • {item.size}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-bold">BAIXAR</span>
                                                <Download size={14} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })
            ) : (
                <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-zinc-200">
                    <p className="text-zinc-400 font-medium">Nenhum resultado encontrado para sua busca.</p>
                </div>
            )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TransparencyScreen;
