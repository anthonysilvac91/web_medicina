import { useRef } from 'react';
import { Icon } from '@iconify/react';
import ReviewCard from './ReviewCard.jsx';

export default function TestimonialsCarousel({ items = [] }) {
  const listRef = useRef(null);
  const scrollBy = (dir) => {
    const el = listRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.9), behavior: 'smooth' });
  };

  return (
    <section className="padding-general bg-bg-primary mt-15">
      <h2 className="h2-responsive mb-10">¿Qué dicen nuestros pacientes?</h2>

      <div className="relative px-7">
        {/* Botón izquierdo */}
        <button
          aria-label="Anterior"
          onClick={() => scrollBy(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 items-center justify-center rounded-full bg-white/90
                     shadow hover:bg-white"
        >
          <Icon icon="mdi:chevron-left" className="w-6 h-6 text-gray-600" />
        </button>

        {/* Lista scrollable */}
        <div
          ref={listRef}
          className="overflow-x-auto no-scrollbar px-2"
        >
          <div className="flex gap-6 snap-x snap-mandatory">
            {items.map((it) => (
              <div key={it.id} className="snap-start">
                <ReviewCard item={it} />
              </div>
            ))}
          </div>
        </div>

        {/* Botón derecho */}
        <button
          aria-label="Siguiente"
          onClick={() => scrollBy(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-9 h-9 items-center justify-center rounded-full bg-white/90
                     shadow hover:bg-white"
        >
          <Icon icon="mdi:chevron-right" className="w-6 h-6 text-gray-600" />
        </button>
      </div>


    </section>
  );
}
