"use client";

import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Send, MessageSquare, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function OuvidoriaPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="w-full bg-[var(--primary)] text-white py-16 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Ouvidoria Municipal</h1>
          <p className="text-blue-100 text-lg">Sua voz é fundamental para a construção de um município melhor. Envie denúncias, elogios ou sugestões.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
              <h2 className="text-xl font-bold text-zinc-800 mb-6 flex items-center gap-2">
                <MessageSquare className="text-[var(--primary)]" />
                Canais Diretos
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-[var(--primary)] rounded-xl">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Telefone</p>
                    <p className="text-zinc-800 font-bold">(84) 3333-0000</p>
                    <p className="text-zinc-500 text-xs mt-1">Segunda a Sexta, 08h às 14h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-[var(--primary)] rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Endereço Físico</p>
                    <p className="text-zinc-800 font-bold">Rua do Legislativo, nº 100</p>
                    <p className="text-zinc-500 text-xs mt-1">Centro Administrativo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl text-white shadow-xl">
              <h3 className="font-bold text-lg mb-4">Por que usar a Ouvidoria?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                A Ouvidoria é o elo entre o cidadão e a administração pública. Através dela, você exerce o controle social e ajuda a fiscalizar a aplicação dos recursos públicos.
              </p>
              <ul className="space-y-3 text-xs font-bold text-zinc-300">
                <li className="flex items-center gap-2 text-green-400"><CheckCircle2 size={14} /> Resposta em até 15 dias</li>
                <li className="flex items-center gap-2 text-green-400"><CheckCircle2 size={14} /> Sigilo garantido</li>
                <li className="flex items-center gap-2 text-green-400"><CheckCircle2 size={14} /> Acompanhamento via protocolo</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100">
                <h2 className="text-2xl font-black text-zinc-800 mb-8 uppercase tracking-tight">Formulário de Contato</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Nome Completo</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
                        placeholder="Ex: Maria Silva"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">E-mail para resposta</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all"
                        placeholder="exemplo@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Assunto / Categoria</label>
                    <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all cursor-pointer">
                      <option>Sugestão</option>
                      <option>Reclamação / Denúncia</option>
                      <option>Elogio</option>
                      <option>Solicitação de Informação (LAI)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest ml-1">Sua Mensagem</label>
                    <textarea 
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all resize-none"
                      placeholder="Descreva detalhadamente sua solicitação..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-[var(--primary)] text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200"
                  >
                    <Send size={18} /> ENVIAR SOLICITAÇÃO
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-green-50 p-12 rounded-3xl border-2 border-dashed border-green-200 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-100">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black text-green-800 mb-4 uppercase">Solicitação Enviada!</h2>
                <p className="text-green-700 max-w-md mx-auto mb-8 font-medium">
                  Agradecemos seu contato. Um número de protocolo foi enviado para seu e-mail. Nossa equipe analisará sua mensagem em breve.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-green-600 text-white font-black rounded-xl hover:bg-green-700 transition-colors"
                >
                  ENVIAR NOVA MENSAGEM
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
