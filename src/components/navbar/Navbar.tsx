"use client";

import { 
  Search, ChevronDown, Radio, History, Users, Scale, FileText, PieChart, 
  MessageSquare, Menu, X, ArrowRight, PlayCircle, Building2, Award, 
  BookOpen, BarChart3, Construction, Book, FileEdit, Info, Phone, Mail, Instagram, Facebook
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = {
      prefeitura: [
        { name: 'Gabinete do Prefeito', icon: <Users size={16} />, href: '/institucional/estrutura' },
        { name: 'Secretarias', icon: <Building2 size={16} />, href: '/institucional/estrutura' },
        { name: 'Órgãos e Conselhos', icon: <Scale size={16} />, href: '/institucional/estrutura' },
        { name: 'Dados do Município', icon: <BarChart3 size={16} />, href: '/institucional/dados-municipio' },
        { name: 'Galeria de Gestores', icon: <History size={16} />, href: '/institucional/historia' },
      ],
      municipio: [
        { name: 'Nossa História', icon: <History size={16} />, href: '/institucional/historia' },
        { name: 'Hino e Símbolos', icon: <Award size={16} />, href: '/institucional/historia' },
        { name: 'Guia do Cidadão', icon: <BookOpen size={16} />, href: '/' },
      ],
      transparencia: [
        { name: 'Portal da Transparência', icon: <PieChart size={16} />, href: '/transparencia' },
        { name: 'LRF / RGF / RREO', icon: <FileText size={16} />, href: '/transparencia' },
        { name: 'LOA / LDO / PPA', icon: <BarChart3 size={16} />, href: '/transparencia' },
        { name: 'Obras Públicas', icon: <Construction size={16} />, href: '/transparencia' },
      ],
      publicacoes: [
        { name: 'Diário Oficial', icon: <Book size={16} />, href: '/' },
        { name: 'Leis e Decretos', icon: <Scale size={16} />, href: '/' },
        { name: 'Licitações e Contratos', icon: <Search size={16} />, href: '/transparencia' },
      ],
      governo_digital: [
        { name: 'Protocolos', icon: <FileEdit size={16} />, href: '/' },
        { name: 'Ouvidoria', icon: <MessageSquare size={16} />, href: '/ouvidoria' },
        { name: 'e-SIC', icon: <Info size={16} />, href: '/ouvidoria' },
      ]
    };

    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = [
      { name: 'Portal da Transparência', href: '/transparencia' },
      { name: 'Nossos Representantes', href: '/institucional/representantes' },
      { name: 'Projetos de Lei', href: '/processo/projetos' },
      { name: 'História do Município', href: '/institucional/historia' },
    ].filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
      <>
        {/* Skip Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only fixed top-4 left-4 z-[200] bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold shadow-2xl ring-4 ring-black/10">
          Pular para o conteúdo principal
        </a>

        {/* Top Bar */}
        <div className="hidden lg:block w-full bg-zinc-100 border-b border-zinc-200 py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-[var(--primary)]" />
                <span>(84) 3525-2161</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-[var(--primary)]" />
                <span>contato@portalmunicipal.gov.br</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <span>Siga-nos:</span>
              <div className="flex gap-2">
                <a href="#" className="hover:text-[var(--primary)] transition-colors"><Instagram size={14} /></a>
                <a href="#" className="hover:text-[var(--primary)] transition-colors"><Facebook size={14} /></a>
              </div>
            </div>
          </div>
        </div>

        <nav className="text-white w-full h-20 sticky top-0 z-[100] bg-[var(--primary)] shadow-md">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 gap-4">
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 flex-1 lg:flex-none">
              <Link href="/" className="text-xl md:text-2xl font-bold hover:text-blue-100 transition-colors flex items-center gap-2">
                <span className="bg-white text-[var(--primary)] px-2 py-0.5 md:py-1 rounded text-sm md:text-base">GOV</span>
                <span className="hidden xs:inline truncate">Portal Municipal</span>
              </Link>
            </div>
        
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1 items-center">
              <Link href="/" className="px-4 py-2 font-bold hover:bg-white/10 rounded-lg transition-colors text-sm uppercase tracking-wider">Home</Link>
              
              {/* Mega Menu Triggers */}
              {Object.entries(menuItems).map(([key, items]) => (
                <div key={key} className="relative" onMouseEnter={() => setActiveMenu(key)} onMouseLeave={() => setActiveMenu(null)}>
                  <button className="flex items-center gap-1 px-4 py-2 font-bold hover:bg-white/10 rounded-lg transition-colors cursor-pointer outline-none focus-visible:ring-2 ring-yellow-400 text-sm uppercase tracking-wider">
                    {key.replace('_', ' ')} <ChevronDown size={14} className={`transition-transform duration-200 ${activeMenu === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMenu === key && (
                    <div className="absolute top-full left-0 w-64 bg-white text-zinc-800 shadow-2xl rounded-xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {items.map(item => (
                        <Link key={item.name} href={item.href} className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors font-medium text-sm">
                          <span className="text-[var(--primary)]">{item.icon}</span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
        
            {/* Live Status & Search */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
              <div className="hidden sm:flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full animate-pulse cursor-pointer hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
                <Radio size={12} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Ao Vivo</span>
              </div>

              <div className="flex-shrink-0 relative group/search">
                <input 
                  type='text' 
                  name='buscar' 
                  placeholder='Pesquisar...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-24 xs:w-32 sm:w-48 xl:w-64 py-2 pl-3 md:pl-4 pr-8 md:pr-10 rounded-full bg-white/10 text-white placeholder:text-blue-100 text-xs md:text-sm border border-white/20 focus:bg-white focus:text-zinc-800 transition-all outline-none focus-visible:ring-2 ring-yellow-400'
                />
                <button className='absolute top-1.5 md:top-2 right-2 md:right-3 bg-transparent text-blue-100 hover:text-white transition-colors cursor-pointer'>
                  <Search className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                </button>
                
                {searchTerm.length > 1 && (
                  <div className="absolute top-full right-0 mt-2 w-64 md:w-72 bg-white text-zinc-800 shadow-2xl rounded-xl p-2 animate-in fade-in zoom-in-95 duration-200 z-50">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest px-4 py-2 border-b border-zinc-100">Resultados sugeridos</p>
                    {searchResults.length > 0 ? (
                      searchResults.map(result => (
                        <Link 
                          key={result.name} 
                          href={result.href}
                          onClick={() => setSearchTerm('')}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-lg transition-colors font-medium text-xs md:text-sm text-zinc-700"
                        >
                          <Search size={14} className="text-[var(--primary)] flex-shrink-0" />
                          <span className="truncate">{result.name}</span>
                        </Link>
                      ))
                    ) : (
                      <p className="px-4 py-4 text-[10px] md:text-xs text-zinc-500 italic">Nenhum atalho encontrado...</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar Drawer */}
        <div className={`fixed inset-y-0 left-0 w-[280px] xs:w-80 bg-white z-[200] shadow-2xl transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-5 xs:p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6 xs:mb-8">
              <span className="text-[var(--primary)] font-black text-lg xs:text-xl flex items-center gap-2">
                <span className="bg-[var(--primary)] text-white px-2 py-0.5 rounded">GOV</span>
                Menu
              </span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-zinc-100 rounded-full text-zinc-500 hover:bg-zinc-200 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
              <div className="space-y-6 xs:space-y-8">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between font-black text-zinc-800 text-base xs:text-lg uppercase tracking-tight"
                >
                  Home <ArrowRight size={20} className="text-[var(--primary)]" />
                </Link>

                {Object.entries(menuItems).map(([key, items]) => (
                  <div key={key} className="space-y-3 xs:space-y-4">
                    <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{key.replace('_', ' ')}</h3>
                    <div className="grid gap-2">
                      {items.map(item => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 xs:gap-4 p-3 xs:p-4 bg-zinc-50 rounded-xl xs:rounded-2xl hover:bg-blue-50 transition-colors group"
                        >
                          <div className="p-1.5 xs:p-2 bg-white rounded-lg xs:rounded-xl shadow-sm text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                            {React.cloneElement(item.icon as React.ReactElement, { size: 14 })}
                          </div>
                          <span className="font-bold text-zinc-700 text-sm">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 xs:pt-6 border-t border-zinc-100">
              <div className="bg-red-50 p-3 xs:p-4 rounded-xl xs:rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Sessão ao vivo</span>
                </div>
                <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <PlayCircle size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      );
      };

      export default Navbar;