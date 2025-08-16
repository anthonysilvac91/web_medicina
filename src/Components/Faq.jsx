

import { useState } from 'react';
import { Icon } from '@iconify/react';

function Faq({ items = [] }) {
    const [openIndex, setOpenIndex] = useState(null); // uno abierto a la vez

    const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="padding-general bg-bg-primary mt-10">
        <h2 className="h2-responsive mb-10">Preguntas Frecuentes</h2>
   
    <div className="space-y-4 px-10">
      {items.map((it, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={it.id || i}
            className="rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            {/* CABECERA */}
            <button
              onClick={() => toggle(i)}
              className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold
                          transition-colors h3-responsive
                          ${isOpen
                            ? 'bg-bg-secondary text-white'
                            : 'bg-card-primary hover:bg-bg-secondary hover:text-white'}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
            >
              <span>{it.title}</span>
              <Icon
                icon="mdi:chevron-down"
                className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                width="26"
                height="26"
              />
            </button>

            {/* CONTENIDO */}
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-hidden={!isOpen}
              className={`px-6 pb-5 text-[15px] p-responsive transition-all duration-300
                          ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
                          overflow-hidden`}
            >
              {it.text}
            </div>
          </div>
        );
      })}
    </div>

    </section>
  );
}
 

export default Faq