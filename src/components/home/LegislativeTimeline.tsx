import React from 'react';
import { CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';

const steps = [
  { status: 'completed', title: 'Protocolo', date: '10/05/2025', desc: 'Projeto de Lei nº 123/2025 protocolado.' },
  { status: 'completed', title: 'Comissão de Justiça', date: '22/05/2025', desc: 'Parecer favorável aprovado por unanimidade.' },
  { status: 'current', title: 'Votação em Plenário', date: 'Hoje', desc: 'Incluído na ordem do dia para primeira votação.' },
  { status: 'upcoming', title: 'Sanção do Prefeito', date: '--/--', desc: 'Aguardando resultado da votação.' },
];

const LegislativeTimeline: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold text-zinc-800 flex items-center gap-2">
            <FileText className="text-[var(--primary)]" />
            Tramitação de Destaque
          </h2>
          <p className="text-zinc-500 text-sm">Acompanhe o progresso dos projetos de lei mais importantes.</p>
        </div>
        <button className="text-sm font-bold text-[var(--primary)] flex items-center gap-1 hover:underline">
          Ver SAPL completo <ArrowRight size={14} />
        </button>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-100 -z-10" />

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6">
              <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step.status === 'completed' ? 'bg-green-50 border-green-500 text-green-500' :
                step.status === 'current' ? 'bg-blue-50 border-[var(--primary)] text-[var(--primary)] animate-pulse' :
                'bg-zinc-50 border-zinc-200 text-zinc-300'
              }`}>
                {step.status === 'completed' ? <CheckCircle2 size={18} /> : <Clock size={18} />}
              </div>
              
              <div className="flex-1 pb-2 border-b border-zinc-50 last:border-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-bold ${
                    step.status === 'upcoming' ? 'text-zinc-400' : 'text-zinc-800'
                  }`}>
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-bold bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded">
                    {step.date}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegislativeTimeline;
