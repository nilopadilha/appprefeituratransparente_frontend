import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { History as HistoryIcon, MapPin, Award, Building2 } from 'lucide-react';

const historyTimeline = [
  { year: '1850', title: 'Fundação do Município', desc: 'Início do povoamento e primeira organização administrativa.', icon: <MapPin size={24} /> },
  { year: '1900', title: 'Emancipação Política', desc: 'O município ganha autonomia e instala sua primeira sede de governo.', icon: <Award size={24} /> },
  { year: '1950', title: 'Expansão Urbana', desc: 'Período de grande crescimento populacional e obras de infraestrutura.', icon: <Building2 size={24} /> },
  { year: '2024', title: 'Era Digital', desc: 'Lançamento do novo portal de transparência e modernização administrativa.', icon: <HistoryIcon size={24} /> },
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="w-full bg-[var(--primary)] text-white py-16 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Nossa História</h1>
          <p className="text-blue-100 text-lg">Conheça a trajetória de desenvolvimento e conquistas do nosso município.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-16">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-100 hidden md:block" />

          <div className="space-y-12">
            {historyTimeline.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="hidden md:flex absolute left-0 w-16 h-16 bg-white rounded-full border-4 border-blue-500 items-center justify-center text-[var(--primary)] shadow-lg z-10">
                  {item.icon}
                </div>
                <div className="md:ml-24 bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex-1 hover:border-blue-300 transition-colors">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-[var(--primary)] font-black rounded-lg text-lg mb-4">
                    {item.year}
                  </span>
                  <h2 className="text-2xl font-bold text-zinc-800 mb-3">{item.title}</h2>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-20 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm">
          <h2 className="text-3xl font-black text-zinc-800 mb-6 uppercase tracking-tight">O Brasão Municipal</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400">
              <Building2 size={64} />
            </div>
            <p className="flex-1 text-zinc-600 leading-relaxed italic">
              &quot;O nosso brasão representa a união, a força do povo e a riqueza das nossas terras. Cada elemento foi pensado para honrar as gerações passadas e inspirar o futuro próspero que construímos juntos.&quot;
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
