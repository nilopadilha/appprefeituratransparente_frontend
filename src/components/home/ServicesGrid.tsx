import React from 'react';
import { 
  FileText, MessageSquare, BadgeCheck, UserCircle, 
  Landmark, Receipt, Globe, ShieldCheck 
} from 'lucide-react';

const services = [
  { icon: Landmark, title: 'IPTU 2026', desc: 'Emissão de boletos e débitos', color: 'bg-blue-600' },
  { icon: MessageSquare, title: 'Ouvidoria', desc: 'Elogios, denúncias e sugestões', color: 'bg-green-600' },
  { icon: BadgeCheck, title: 'Certidões', desc: 'Negativas e autenticidade', color: 'bg-yellow-600' },
  { icon: UserCircle, title: 'Contracheque', desc: 'Portal do Servidor Municipal', color: 'bg-purple-600' },
  { icon: Receipt, title: 'Nota Fiscal', desc: 'Emissão de NFS-e eletrônica', color: 'bg-red-600' },
  { icon: Globe, title: 'Transparência', desc: 'Contas e gastos públicos', color: 'bg-cyan-600' },
  { icon: FileText, title: 'Licitações', desc: 'Editais e contratos vigentes', color: 'bg-zinc-800' },
  { icon: ShieldCheck, title: 'e-SIC', desc: 'Pedido de informação (LAI)', color: 'bg-orange-600' },
];

const ServicesGrid = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-zinc-800 uppercase tracking-tighter">Serviços Digitais</h2>
        <div className="h-1.5 w-20 bg-[var(--accent)] mt-2 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {services.map((item, idx) => (
          <div 
            key={idx} 
            className="group bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl hover:border-[var(--primary)] transition-all cursor-pointer flex flex-col items-center text-center"
          >
            <div className={`${item.color} w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
              <item.icon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h3 className="font-bold text-zinc-800 text-base md:text-lg mb-1">{item.title}</h3>
            <p className="text-xs text-zinc-500 font-medium leading-tight max-w-[200px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
