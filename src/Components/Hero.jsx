import logo from '../assets/logo.png'
import { Icon } from "@iconify/react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-tertiary">
      {/* Gradientes de fondo sutiles */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_-20%,rgba(14,165,163,0.12),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_0%,rgba(14,165,163,0.12),transparent)]"></div>
      </div>

      <div className="relative  2xl:px-p2xl xl:px-pxl lg:px-[70px] sm:px-pmd px-[20px] py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-10 md:grid-cols-2">
          {/* Copy + CTAs */}
          <div className="">
            <h1 className="h1-responsive font-extrabold tracking-tight leading-tight">
              Atención médica rápida y confiable{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5a3] to-[#06b6d4]">
                donde estés
              </span>
            </h1>

            <p className="p-responsive lg:text-start text-center mt-4 md:mt-5 md:mb-6 ">
              Médicos a domicilio en Santiago, entregando atención de calidad y
              confianza en la comodidad y seguridad de tu hogar.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap lg:justify-start justify-center  items-center gap-3">
              <a
                href="https://wa.me/56911111111"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold text-white bg-[#0ea5a3] hover:bg-[#0b8e8c] shadow-sm transition-colors"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                Solicitar visita por WhatsApp
              </a>
              <a
                href="tel:+56911111111"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold text-[#0b8e8c] ring-1 ring-[#94d8d6] hover:bg-white transition-colors"
              >
                <Icon icon="mdi:phone" className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-6 flex flex-wrap lg:justify-start justify-center gap-5 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Icon icon="mdi:star" className="w-4 h-4 text-yellow-500" />
                4.9/5 atención
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon icon="mdi:clock-outline" className="w-4 h-4 text-[#0ea5a3]" />
                Llegamos en 45–60 min
              </span>
              <span className="inline-flex items-center gap-2">
                <Icon icon="mdi:check-decagram" className="w-4 h-4 text-[#0ea5a3]" />
                Médicos certificados
              </span>
            </div>
          </div>

      
          <div className="relative">
            {/* Blob de color detrás (sin fondo blanco) */}
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#0ea5a3]/20 via-[#06b6d4]/20 to-transparent blur-2xl"></div>
            {/* halo sutil */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] ring-1 ring-white/40/0"></div>

            <img
              src={logo}
              alt="Logo MedHogar"
              className="w-[250px] sm:w-[400px] lg:max-w-none lg:w-[300px] xl:min-w-[350px]  2xl:w-[400px] 2xl:max-w-md 2xl:h-auto object-contain drop-shadow-[0_12px_28px_rgba(2,6,23,0.15)]"
            />
          </div>
        </div>
      </div>

      {/* acento inferior */}
      <div className="h-2 w-full bg-[#0ea5a3]/80"></div>
    </section>
  );
}
