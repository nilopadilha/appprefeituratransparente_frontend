"use client";

import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import CityExplorer from '@/components/city-dashboard/CityExplorer';

export default function DadosMunicipioPage() {
  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen">
      <Navbar />
      
      <div className="w-full bg-[var(--primary)] text-white py-16 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Dados do Município</h1>
          <p className="text-blue-100 text-lg">Informações socioeconômicas e transparência pública em um só lugar.</p>
        </div>
      </div>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4">
        <CityExplorer />
        
        <section className="pb-20">
          <div className="bg-white p-8 md:p-12 rounded-[32px] border border-zinc-100 shadow-sm">
            <h2 className="text-2xl font-black text-zinc-800 mb-6 uppercase tracking-tight">Sobre esta ferramenta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Esta seção foi desenvolvida para oferecer uma visão clara e comparativa do desempenho municipal. Utilizamos dados oficiais do **IBGE (Censo 2022 e PIB Municípios)** para garantir a precisão dos indicadores socioeconômicos.
                </p>
                <p>
                  A integração com o **Radar da Transparência Pública (Atricon)** permite que o cidadão fiscalize o nível de transparência ativa de cada órgão público, promovendo o controle social e a governança participativa.
                </p>
              </div>
              <div className="bg-zinc-50 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-zinc-800">Fontes Oficiais:</h3>
                <ul className="space-y-2 text-sm font-medium text-zinc-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                    IBGE SIDRA (Tabelas 9514 e 5938)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                    Programa Nacional de Transparência Pública (PNTP)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                    Associação dos Membros dos Tribunais de Contas (Atricon)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
