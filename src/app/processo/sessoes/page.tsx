"use client";

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Calendar, PlayCircle, FileText, MapPin, Clock } from 'lucide-react';

const sessions = [
  { id: 1, title: '45ª Sessão Ordinária', date: '28/05/2025', time: '09:00', type: 'Ordinária', status: 'Agendada', location: 'Plenário Principal' },
  { id: 2, title: 'Audiência Pública: Saúde Municipal', date: '29/05/2025', time: '14:00', type: 'Audiência', status: 'Agendada', location: 'Auditório A' },
  { id: 3, title: '44ª Sessão Ordinária', date: '21/05/2025', time: '09:00', type: 'Ordinária', status: 'Realizada', location: 'Plenário Principal', video: '#' },
  { id: 4, title: 'Sessão Solene: Dia do Professor', date: '15/05/2025', time: '19:00', type: 'Solene', status: 'Realizada', location: 'Plenário Principal', video: '#' },
];

export default function SessionsPage() {
  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="w-full bg-[var(--primary)] text-white py-16 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Sessões e Audiências</h1>
          <p className="text-blue-100 text-lg">Acompanhe as reuniões do legislativo municipal ao vivo ou acesse o arquivo de vídeos e atas.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-12">
        <div className="grid gap-6">
          {sessions.map(session => (
            <div key={session.id} className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-100 flex flex-col md:flex-row items-center gap-8 hover:border-blue-300 transition-all">
              <div className="flex flex-col items-center justify-center bg-blue-50 text-[var(--primary)] p-6 rounded-2xl min-w-[120px]">
                <span className="text-sm font-black uppercase">{session.date.split('/')[2]}</span>
                <span className="text-3xl font-black">{session.date.split('/')[0]}</span>
                <span className="text-sm font-bold uppercase">{session.date.split('/')[1]}</span>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                  <span className="px-3 py-0.5 bg-zinc-100 text-zinc-500 rounded-full text-[10px] font-black uppercase">{session.type}</span>
                  <span className={`px-3 py-0.5 rounded-full text-[10px] font-black uppercase ${
                    session.status === 'Agendada' ? 'bg-green-50 text-green-600' : 'bg-zinc-100 text-zinc-400'
                  }`}>{session.status}</span>
                </div>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4">{session.title}</h2>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-zinc-500 text-sm">
                  <span className="flex items-center gap-2"><Clock size={16} /> {session.time}</span>
                  <span className="flex items-center gap-2"><MapPin size={16} /> {session.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 min-w-[200px] w-full md:w-auto">
                {session.status === 'Agendada' ? (
                  <button className="w-full py-3 bg-zinc-900 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
                    <Calendar size={14} /> LEMBRAR-ME
                  </button>
                ) : (
                  <button className="w-full py-3 bg-red-600 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-200">
                    <PlayCircle size={14} /> VER GRAVAÇÃO
                  </button>
                )}
                <button className="w-full py-3 bg-white border border-zinc-200 text-zinc-600 font-black rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors">
                  <FileText size={14} /> ACESSAR PAUTA
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
