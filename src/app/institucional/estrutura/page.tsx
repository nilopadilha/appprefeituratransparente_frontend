import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Users, Scale, FileText, Landmark, ShieldCheck, HeartPulse } from 'lucide-react';

const departments = [
  { name: 'Mesa Diretora', icon: <Landmark size={32} />, desc: 'Órgão de direção superior responsável pela coordenação dos trabalhos legislativos e administrativos.' },
  { name: 'Secretaria Geral', icon: <FileText size={32} />, desc: 'Responsável pelo apoio técnico e legislativo às sessões e comissões.' },
  { name: 'Procuradoria Jurídica', icon: <Scale size={32} />, desc: 'Presta assessoria jurídica e zela pela legalidade dos atos administrativos e legislativos.' },
  { name: 'Comunicaçao Social', icon: <Users size={32} />, desc: 'Gerencia a transparência, TV, rádio e o portal oficial de notícias.' },
  { name: 'Segurança e Patrimônio', icon: <ShieldCheck size={32} />, desc: 'Zela pela segurança das instalações e a preservação do patrimônio público.' },
  { name: 'Recursos Humanos', icon: <HeartPulse size={32} />, desc: 'Gestão de pessoal, servidores e programas de bem-estar.' },
];

export default function StructurePage() {
  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="w-full bg-[var(--primary)] text-white py-16 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Estrutura Organizacional</h1>
          <p className="text-blue-100 text-lg">Entenda como o governo municipal está organizado para servir à população.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:border-blue-300 transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-blue-50 text-[var(--primary)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                {dept.icon}
              </div>
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">{dept.name}</h2>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {dept.desc}
              </p>
              <button className="mt-8 text-[var(--primary)] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Ver detalhes <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>

        <section className="mt-24 p-12 bg-zinc-900 rounded-3xl text-white shadow-2xl overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Organograma Completo</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Visualize a hierarquia completa e as conexões entre todos os órgãos do governo municipal em nosso documento oficial atualizado.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-black hover:bg-yellow-400 transition-colors shadow-lg">
              BAIXAR PDF (4.2MB)
            </button>
          </div>
          <div className="absolute right-[-10%] top-[-20%] opacity-10">
            <Landmark size={400} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
