import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Carousel from '../carousel/Carousel';
import ServicesGrid from './ServicesGrid';
import PublicationTabs from './PublicationTabs';
import OfficialDiary from './OfficialDiary';
import Image from 'next/image';
import {
  Calendar,
  ChevronRight,
  ArrowRight,
  PlayCircle,
} from 'lucide-react';

const Home = () => {
  const newsData = [
    {
      date: '28/05/2026',
      category: '#Saúde',
      title: 'Nova Unidade Básica de Saúde é inaugurada no Bairro das Flores',
    },
    {
      date: '27/05/2026',
      category: '#Infraestrutura',
      title: 'Prefeitura inicia obras de pavimentação em 10 novas ruas do centro',
    },
    {
      date: '26/05/2026',
      category: '#Educação',
      title: 'Rede municipal de ensino recebe novos equipamentos tecnológicos',
    },
    {
      date: '25/05/2026',
      category: '#Turismo',
      title: 'Festival Gastronômico Municipal atrai recorde de público no final de semana',
    },
    {
      date: '24/05/2026',
      category: '#MeioAmbiente',
      title: 'Campanha de reflorestamento planta mais de 500 mudas nativas',
    },
  ];

  return (
    <div className="flex flex-col bg-zinc-50 items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main id="main-content" className="flex flex-col gap-[64px] mt-8 w-full max-w-7xl px-4 mb-20">
        
        {/* Hero Section: Dynamic Service Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Banner */}
          <div className="lg:col-span-2 relative h-[500px] group overflow-hidden rounded-[40px] shadow-2xl">
            <Image 
              src="/bignews.png" 
              alt="Destaque" 
              fill 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-10 z-20 text-white max-w-2xl">
              <span className="bg-[var(--accent)] text-black px-4 py-1.5 rounded-full text-xs font-black mb-4 inline-block uppercase tracking-widest shadow-lg">
                Portal do Contribuinte
              </span>
              <h1 className="text-4xl font-black leading-tight mb-4 group-hover:text-[var(--accent)] transition-colors cursor-pointer">
                Pague seu IPTU 2026 com desconto de até 20% em cota única
              </h1>
              <p className="text-zinc-300 font-medium mb-6 line-clamp-2">Aproveite as condições especiais e ajude no desenvolvimento do nosso município. O prazo encerra em 30 de Junho.</p>
              <button className="bg-white text-[var(--primary)] px-8 py-3 rounded-2xl font-black hover:bg-[var(--accent)] hover:text-black transition-all flex items-center gap-3 shadow-xl">
                GERAR BOLETO AGORA
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* News Sidebar */}
          <div className="flex flex-col bg-white rounded-[40px] border border-zinc-100 overflow-hidden shadow-sm">
            <div className="bg-white p-6 border-b border-zinc-100">
              <h2 className="text-zinc-800 font-black flex items-center gap-2 uppercase tracking-tighter text-xl">
                Últimas Notícias
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto max-h-[420px] custom-scrollbar">
              {newsData.map((item, idx) => (
                <div key={idx} className="p-6 hover:bg-zinc-50 transition-colors border-b border-zinc-50 last:border-0 cursor-pointer group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black text-[var(--secondary)] uppercase tracking-widest">{item.category}</span>
                    <span className="text-[10px] font-bold text-zinc-400">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-800 group-hover:text-[var(--primary)] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
            <button className="p-5 text-xs font-black text-[var(--primary)] hover:bg-zinc-50 transition-colors text-center border-t border-zinc-100 uppercase tracking-widest">
              Ver todo o informativo
            </button>
          </div>
        </div>

        {/* Services Grid Section */}
        <ServicesGrid />

        {/* Official Diary & Publications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
                <OfficialDiary />
            </div>
            <div className="lg:col-span-3 flex flex-col">
                <div className="flex flex-col mb-8">
                    <h2 className="text-3xl font-black text-zinc-800 uppercase tracking-tighter">Publicações Oficiais</h2>
                    <div className="h-1.5 w-20 bg-[var(--secondary)] mt-2 rounded-full" />
                </div>
                <PublicationTabs />
            </div>
        </div>

        {/* Video Section: Canal do Município */}
        <div className="w-full bg-[var(--primary)] rounded-[40px] p-10 flex flex-col lg:flex-row gap-12 items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <span className="text-[var(--accent)] text-xs font-black uppercase tracking-[0.3em] mb-4 block">Fique por dentro</span>
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">TV Portal Municipal</h2>
            <p className="text-blue-100 mb-8 text-xl font-medium leading-relaxed">Acompanhe ao vivo as coletivas, inaugurações e a prestação de contas da nossa gestão municipal.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[var(--accent)] text-black px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl">
                  ASSISTIR AO VIVO
                  <PlayCircle size={20} />
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-2xl font-black hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  VER ARQUIVO
                </button>
            </div>
          </div>
          <div className="w-full lg:w-[500px] aspect-video rounded-3xl overflow-hidden shadow-2xl ring-8 ring-white/10 relative group">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GACcr0NJee8?si=qdqvfJHDaiSE41D-"
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Gestão e Transparência Section */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 bg-white py-20 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
              <div>
                <h2 className="text-4xl font-black text-zinc-800 uppercase tracking-tighter">Nossa Gestão</h2>
                <p className="text-zinc-500 mt-2 font-bold text-lg uppercase tracking-widest text-[var(--primary)]">Compromisso com o cidadão</p>
              </div>
              <button type="button" className="bg-[var(--primary)] text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-xl flex items-center gap-2">
                VER TODOS OS SECRETÁRIOS <ArrowRight size={20} />
              </button>
            </div>
            <Carousel />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Home;
