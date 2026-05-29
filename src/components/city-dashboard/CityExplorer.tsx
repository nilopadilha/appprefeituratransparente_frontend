"use client";

import React, { useState } from 'react';
import CitySearch from './CitySearch';
import { 
  Users, TrendingUp, Award, Info, Loader2, AlertCircle, Building2, 
  MapPin, FileText, Calendar, Table as TableIcon, LayoutDashboard, Download
} from 'lucide-react';

interface City {
  id: string;
  name: string;
  uf: string;
}

interface IbgeData {
  population: string;
  gdpPerCapita: string;
  cityName: string;
  year: string;
}

interface AtriconData {
  score: number;
  rating: string;
  cycle: string;
}

interface SocialProgram {
  name: string;
  beneficiaries: number | string;
  value: string;
  status: string;
}

interface SocialData {
  impact: string;
  programs: SocialProgram[];
  source: string;
}

interface FinancialData {
  fpm: string;
  state: string;
  federal: string;
  period: string;
  available: boolean;
  message?: string;
  isFallback?: boolean;
}

const CityExplorer = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [ibgeData, setIbgeData] = useState<IbgeData | null>(null);
  const [atriconData, setAtriconData] = useState<AtriconData | null>(null);
  const [socialData, setSocialData] = useState<SocialData | null>(null);
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'dashboard' | 'report'>('report');

  const handleCitySelect = async (city: City) => {
    setSelectedCity(city);
    setLoading(true);
    setError(null);
    setIbgeData(null);
    setAtriconData(null);
    setSocialData(null);
    setFinancialData(null);

    try {
      const [ibgeRes, atriconRes, socialRes, financialRes] = await Promise.all([
        fetch(`/api/city/${city.id}/ibge`),
        fetch(`/api/city/${city.id}/atricon`),
        fetch(`/api/city/${city.id}/social`),
        fetch(`/api/city/${city.id}/financial`)
      ]);

      if (ibgeRes.ok) setIbgeData(await ibgeRes.json());
      if (atriconRes.ok) setAtriconData(await atriconRes.json());
      if (socialRes.ok) setSocialData(await socialRes.json());
      if (financialRes.ok) setFinancialData(await financialRes.json());

    } catch (err) {
      console.error("Error loading dashboard data:", err);
      setError("Ocorreu um erro ao carregar os dados desta cidade.");
    } finally {
      setLoading(false);
    }
  };

  const getRatingBadge = (rating: string) => {
    switch (rating) {
      case 'Diamante': return 'bg-blue-600 text-white';
      case 'Ouro': return 'bg-yellow-500 text-white';
      case 'Prata': return 'bg-zinc-400 text-white';
      default: return 'bg-zinc-200 text-zinc-600';
    }
  };

  return (
    <div className="w-full space-y-12 py-12">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-zinc-800 uppercase tracking-tighter">Explorador de Municípios</h2>
        <p className="text-zinc-500 font-medium">Relatórios socioeconômicos e indicadores de transparência consolidados.</p>
        <div className="pt-4">
          <CitySearch onSelect={handleCitySelect} />
        </div>
      </div>

      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-4">
          <Loader2 className="animate-spin text-[var(--primary)]" size={48} />
          <p className="text-sm font-black text-zinc-400 uppercase tracking-widest animate-pulse">Gerando relatório consolidado...</p>
        </div>
      ) : selectedCity && ibgeData ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-8">
          
          {/* View Mode Toggle & Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm">
            <div className="flex bg-zinc-100 p-1 rounded-xl">
              <button 
                onClick={() => setViewMode('report')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${viewMode === 'report' ? 'bg-white text-[var(--primary)] shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
              >
                <TableIcon size={14} /> Relatório
              </button>
              <button 
                onClick={() => setViewMode('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${viewMode === 'dashboard' ? 'bg-white text-[var(--primary)] shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
              >
                <LayoutDashboard size={14} /> Dashboard
              </button>
            </div>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg">
              <Download size={14} /> Exportar PDF
            </button>
          </div>

          {viewMode === 'report' ? (
            /* Report/Spreadsheet View */
            <div className="bg-white rounded-[32px] border border-zinc-100 shadow-xl overflow-hidden">
              <div className="p-8 border-b border-zinc-100 bg-zinc-50/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[var(--primary)] text-white rounded-lg">
                      <Building2 size={20} />
                    </div>
                    <h3 className="text-2xl font-black text-zinc-800 uppercase tracking-tighter">Ficha Técnica Municipal</h3>
                  </div>
                  <p className="text-zinc-500 text-sm font-medium flex items-center gap-2">
                    <MapPin size={14} className="text-[var(--primary)]" />
                    {selectedCity.name} — {selectedCity.uf} | IBGE: {selectedCity.id}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest block mb-1">Data de Referência</span>
                  <div className="flex items-center gap-2 text-zinc-800 font-bold">
                    <Calendar size={14} className="text-[var(--primary)]" />
                    Ciclo 2024/2025
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-zinc-100">
                      <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Indicador / Métrica</th>
                      <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Valor Consolidado</th>
                      <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Fonte Oficial</th>
                      <th className="px-8 py-5 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Status/Qualidade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users size={18} /></div>
                          <div>
                            <p className="font-bold text-zinc-800">População Residente</p>
                            <p className="text-[10px] text-zinc-400 uppercase font-black">Censo Demográfico</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-black text-zinc-700 text-lg">
                        {Number(ibgeData.population).toLocaleString('pt-BR')} hab.
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-xs font-bold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">IBGE / SIDRA 2022</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-green-600 font-bold text-xs">
                          <AlertCircle size={14} /> Atualizado
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-green-50 text-green-600 rounded-lg"><TrendingUp size={18} /></div>
                          <div>
                            <p className="font-bold text-zinc-800">PIB per capita</p>
                            <p className="text-[10px] text-zinc-400 uppercase font-black">Produção Econômica</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-black text-zinc-700 text-lg">
                        R$ {Number(ibgeData.gdpPerCapita).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-xs font-bold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">IBGE / SIDRA 2021</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
                          <Info size={14} /> Projeção
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-zinc-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg"><Award size={18} /></div>
                          <div>
                            <p className="font-bold text-zinc-800">Selo de Transparência</p>
                            <p className="text-[10px] text-zinc-400 uppercase font-black">Qualidade Governamental</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        {atriconData ? (
                          <div className={`inline-block px-4 py-1.5 rounded-xl font-black text-xs uppercase tracking-widest ${getRatingBadge(atriconData.rating)}`}>
                            {atriconData.rating} ({atriconData.score}%)
                          </div>
                        ) : (
                          <span className="text-zinc-400 text-xs italic">Não disponível</span>
                        )}
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-xs font-bold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">ATRICON / PNTP</span>
                      </td>
                      <td className="px-8 py-6">
                        {atriconData ? (
                          <div className="flex items-center gap-2 text-green-600 font-bold text-xs">
                            <AlertCircle size={14} /> Validado
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-zinc-300 font-bold text-xs">
                            <AlertCircle size={14} /> Pendente
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Social Programs Section (New) */}
              <div className="p-8 border-t border-zinc-100 bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                    <Users size={20} />
                  </div>
                  <h3 className="text-xl font-black text-zinc-800 uppercase tracking-tighter">Programas Sociais do Governo</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Impacto na Renda</p>
                      <p className="text-2xl font-black text-zinc-800">{socialData?.impact || 'N/A'}</p>
                      <p className="text-[10px] text-zinc-500 font-medium mt-2 leading-tight">Participação dos programas no rendimento domiciliar total.</p>
                   </div>
                   <div className="md:col-span-2 bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex items-center gap-4">
                      <Info className="text-blue-500 flex-shrink-0" size={24} />
                      <p className="text-xs text-blue-700 font-medium leading-relaxed">
                        Estes dados representam as transferências diretas do Governo Federal para os cidadãos residentes no município, auxiliando no combate à extrema pobreza.
                      </p>
                   </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-zinc-100">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-100">
                        <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Programa</th>
                        <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Beneficiários</th>
                        <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Valor Repassado/mês</th>
                        <th className="px-6 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                      {socialData?.programs.map((prog, idx) => (
                        <tr key={idx} className="hover:bg-zinc-50/30 transition-colors">
                          <td className="px-6 py-4 font-bold text-zinc-800">{prog.name}</td>
                          <td className="px-6 py-4 text-sm font-medium text-zinc-600">
                            {typeof prog.beneficiaries === 'number' ? prog.beneficiaries.toLocaleString('pt-BR') : prog.beneficiaries}
                          </td>
                          <td className="px-6 py-4 font-black text-zinc-700">{prog.value}</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-black uppercase rounded-md">{prog.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <Info size={12} /> Fonte: {socialData?.source || 'MDS / Portal da Transparência'}
                </div>
              </div>

              {/* Financial Transfers Section (New) */}
              <div className="p-8 border-t border-zinc-100 bg-zinc-50/30">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-zinc-800 uppercase tracking-tighter">Recursos e Repasses Financeiros</h3>
                      <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">{financialData?.period || 'Ciclo Atual'}</p>
                    </div>
                  </div>
                  {financialData?.isFallback && (
                    <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-yellow-100 animate-pulse">
                      Valores Estimados
                    </div>
                  )}
                </div>

                {financialData?.available ? (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">FPM (Constitucional)</p>
                        <p className="text-xl font-black text-zinc-800">{financialData.fpm}</p>
                        <div className="mt-3 flex items-center gap-2 text-[9px] font-bold text-green-600 uppercase">
                          <AlertCircle size={10} /> Repasse Obrigatório
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Recursos Estaduais</p>
                        <p className="text-xl font-black text-zinc-800">{financialData.state}</p>
                        <div className="mt-3 flex items-center gap-2 text-[9px] font-bold text-blue-600 uppercase">
                          <AlertCircle size={10} /> ICMS / IPVA / Convênios
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-all">
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Repasses Federais</p>
                        <p className="text-xl font-black text-zinc-800">{financialData.federal}</p>
                        <div className="mt-3 flex items-center gap-2 text-[9px] font-bold text-[var(--primary)] uppercase">
                          <AlertCircle size={10} /> Transferências da União
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded-xl flex items-center justify-between text-white">
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Total de Repasses Identificados</span>
                       <span className="font-black text-lg text-yellow-400">
                          {financialData.fpm !== 'Consulte o Portal do Tesouro' ? 'Consulte o Relatório Detalhado' : 'Aguardando Sincronização'}
                       </span>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 bg-white rounded-3xl border-2 border-dashed border-zinc-100 flex flex-col items-center justify-center text-center px-6">
                    <Info className="text-zinc-200 mb-4" size={48} />
                    <p className="text-zinc-500 font-medium max-w-sm">
                      {financialData?.message || 'Os dados financeiros detalhados para esta região ainda não foram integrados ao portal.'}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <Info size={12} /> Fonte: Tesouro Transparente / TCE-RN / Portal da Transparência Federal
                </div>
              </div>
              
              <div className="p-8 bg-zinc-900 text-white flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <FileText className="text-yellow-400" size={32} />
                  <div>
                    <p className="font-black uppercase tracking-tight">Análise Sintética</p>
                    <p className="text-xs text-zinc-400">O município possui indicadores estáveis com foco em transparência ativa.</p>
                  </div>
                </div>
                <button className="w-full md:w-auto px-8 py-3 bg-white text-black font-black rounded-2xl hover:bg-yellow-400 transition-colors text-sm shadow-xl">
                  SOLICITAR DADOS ADICIONAIS (e-SIC)
                </button>
              </div>
            </div>
          ) : (
            /* Original Dashboard View (Enhanced) */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-blue-50 text-[var(--primary)] rounded-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                      <Users size={24} />
                    </div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Censo 2022</span>
                  </div>
                  <h4 className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-1">População Residente</h4>
                  <p className="text-3xl font-black text-zinc-800">{Number(ibgeData.population).toLocaleString('pt-BR')} hab.</p>
                  <div className="mt-4 pt-4 border-t border-zinc-50 flex items-center gap-2 text-zinc-400">
                    <Info size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tight">Fonte: IBGE / SIDRA</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-green-50 text-green-600 rounded-2xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <TrendingUp size={24} />
                    </div>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">PIB Municípios</span>
                  </div>
                  <h4 className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-1">PIB per capita</h4>
                  <p className="text-3xl font-black text-zinc-800">R$ {Number(ibgeData.gdpPerCapita).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                  <div className="mt-4 pt-4 border-t border-zinc-50 flex items-center gap-2 text-zinc-400">
                    <Info size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-tight">Fonte: IBGE / SIDRA (2021)</span>
                  </div>
                </div>

                <div className="sm:col-span-2 bg-zinc-900 p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Panorama de {selectedCity.name}</h3>
                      <p className="text-zinc-400 text-sm max-w-md">Dados atualizados baseados nos últimos levantamentos oficiais do Governo Federal e IBGE.</p>
                    </div>
                    <button className="bg-white text-black px-8 py-3 rounded-2xl font-black hover:bg-[var(--accent)] transition-colors text-sm flex items-center gap-2 shadow-xl">
                      <Building2 size={18} /> PORTAL DA PREFEITURA
                    </button>
                  </div>
                  <div className="absolute right-[-5%] top-[-20%] opacity-10 pointer-events-none">
                    <MapPin size={200} />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white h-full p-8 rounded-[32px] border border-zinc-100 shadow-sm flex flex-col items-center text-center justify-between relative overflow-hidden">
                  <div className="space-y-6 w-full">
                    <div className="flex flex-col items-center">
                      <div className="p-4 bg-zinc-50 text-[var(--primary)] rounded-full mb-4">
                        <Award size={48} />
                      </div>
                      <h3 className="text-xl font-black text-zinc-800 uppercase tracking-tighter">Radar da Transparência</h3>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">Selo de Qualidade PNTP</p>
                    </div>

                    {atriconData ? (
                      <div className="space-y-6">
                        <div className={`py-4 px-6 rounded-2xl border-2 font-black text-2xl uppercase tracking-widest ${getRatingBadge(atriconData.rating)}`}>
                          {atriconData.rating}
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-black uppercase tracking-widest text-zinc-400">
                            <span>Índice</span>
                            <span>{atriconData.score}%</span>
                          </div>
                          <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[var(--primary)] transition-all duration-1000 ease-out" 
                              style={{ width: `${atriconData.score}%` }} 
                            />
                          </div>
                        </div>
                        <p className="text-xs text-zinc-500 leading-relaxed font-medium italic">
                          &quot;O município atende aos rigorosos critérios de transparência ativa avaliados pela Atricon.&quot;
                        </p>
                      </div>
                    ) : (
                      <div className="py-12 px-6 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
                        <AlertCircle className="mx-auto text-zinc-300 mb-3" size={32} />
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                          Dados de transparência ainda não integrados para esta localidade.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-50 w-full">
                    <a 
                      href="https://radartransparente.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] font-black text-[var(--primary)] hover:underline uppercase tracking-[0.2em]"
                    >
                      Ver análise completa na Atricon →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : !selectedCity && (
        <div className="py-20 flex flex-col items-center justify-center text-zinc-300 gap-6 opacity-40">
           <MapPin size={80} strokeWidth={1} />
           <p className="font-bold uppercase tracking-[0.3em] text-sm">Selecione uma cidade acima</p>
        </div>
      )}

      {error && (
        <div className="max-w-md mx-auto bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-3 text-red-600">
          <AlertCircle size={20} />
          <p className="text-sm font-bold">{error}</p>
        </div>
      )}
    </div>
  );
};

export default CityExplorer;
