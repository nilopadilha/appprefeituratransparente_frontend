'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const data = [
  { name: 'Paulo Ananias', party: 'PTN', image: '/img1.jpg' },
  { name: 'Irene Yara Tapajós', party: 'UEB', image: '/img2.jpg' },
  { name: 'Dr. Augusto Lira', party: 'PJS', image: '/img3.jpg' },
  { name: 'Marcos Tavares', party: 'AND', image: '/img4.jpg' },
  { name: 'Verônica Matos', party: 'FPB', image: '/img5.jpg' },
  { name: 'Fábio Mendonça', party: 'PLE', image: '/img6.jpg' },
  { name: 'Renata Dourado', party: 'PRC', image: '/img7.jpg' },
  { name: 'Cel. Ricardo Vianna', party: 'POD', image: '/img8.jpg' },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 1, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative w-full max-w-7xl mx-auto px-12 group">
      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-2 rounded-full transition-all text-white backdrop-blur-sm border border-white/20"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] lg:flex-[0_0_20%] xl:flex-[0_0_16.6667%] px-3"
            >
              <div className="bg-white/5 rounded-xl overflow-hidden shadow-xl relative group/card cursor-pointer border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                {/* Image Container */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                </div>
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20 text-center">
                  <h3 className="text-white text-xs font-bold uppercase tracking-tight line-clamp-1 group-hover/card:text-yellow-400 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mt-0.5">
                    <span className="text-[9px] font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full uppercase tracking-widest">
                      {item.party}
                    </span>
                  </div>
                </div>

                {/* Profile Link Button (Visible on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center z-30 opacity-0 group-hover/card:opacity-100 transition-opacity">
                  <div className="bg-yellow-500 text-black px-3 py-1.5 rounded-lg text-[10px] font-bold shadow-2xl flex items-center gap-1.5">
                    <User size={12} />
                    PERFIL COMPLETO
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-2 rounded-full transition-all text-white backdrop-blur-sm border border-white/20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}
