import logo from '../assets/logo.png'

// const Hero = () => {
//   return (
//     <section className='bg-bg-tertiary padding-general flex flex-col-reverse md:flex-row justify-between items-center py-12 md:py-16 lg:py-20 '>
//         <div className='md:w-[60%] 2xl:pr-10 xl:pr-20 lg:pr-26 md:pr-10'>
//             <h1 className='text-text-primary h1-responsive  font-bold text-center md:text-left mt-4'>Atención médica rápida
// y confiable <span className='text-bg-secondary'>donde estés</span></h1>
//             <p className='text-text-primary lg:mt-5 lg:mb-7 md:mt-4 md:mb-5 mt-3 mb-4 p-responsive text-center sm:px-7 md:text-left md:px-0 lg:pr-8 xl:pr-0 '>Médicos a domicilio en Santiago, entregando atención de calidad y confianza en la comodidad y seguridad de tu hogar.</p>
//             <div className='flex justify-center'>

//             <a href="#" className='btn-responsive'>Solicitar Visita a Domicilio</a>
//             </div>
//         </div>
//         <div className='xl:min-w-[430px] lg:max-w-[300px] sm:max-w-[240px] max-w-[150px]'>
//             <img className='w-100%' src={logo} alt="logo_medhogar" />
//         </div>


//     </section>
//   )
// }

// export default Hero



// src/Components/Hero.jsx
// import { Icon } from '@iconify/react';
// import logo from '../assets/logo.png';

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-bg-tertiary">
//       {/* Gradientes de fondo sutiles */}
//       <div className="pointer-events-none absolute inset-0 opacity-70">
//         <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_-20%,rgba(14,165,163,0.12),transparent)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_0%,rgba(14,165,163,0.12),transparent)]"></div>
//       </div>

//       <div className="relative padding-general py-12 md:py-16 lg:py-20 xl:px-12">
//         <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
//           {/* Copy + CTAs */}
//           <div className="md:pr-10 lg:pr-16">
//             <h1 className="text-text-primary font-extrabold tracking-tight leading-tight text-4xl md:text-6xl">
//               Atención médica rápida y confiable{' '}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5a3] to-[#06b6d4]">
//                 donde estés
//               </span>
//             </h1>

//             <p className="text-text-primary mt-4 md:mt-5 md:mb-6 text-lg max-w-xl">
//               Médicos a domicilio en Santiago, entregando atención de calidad y
//               confianza en la comodidad y seguridad de tu hogar.
//             </p>

//             {/* CTAs */}
//             <div className="mt-4 flex flex-wrap items-center gap-3">
//               <a
//                 href="https://wa.me/56911111111"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold text-white bg-[#0ea5a3] hover:bg-[#0b8e8c] shadow-sm transition-colors"
//               >
//                 <Icon icon="mdi:whatsapp" className="w-5 h-5" />
//                 Solicitar visita por WhatsApp
//               </a>
//               <a
//                 href="tel:+56911111111"
//                 className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold text-[#0b8e8c] ring-1 ring-[#94d8d6] hover:bg-white transition-colors"
//               >
//                 <Icon icon="mdi:phone" className="w-5 h-5" />
//                 Llamar ahora
//               </a>
//             </div>

//             {/* Trust bar */}
//             <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-600">
//               <span className="inline-flex items-center gap-2">
//                 <Icon icon="mdi:star" className="w-4 h-4 text-yellow-500" />
//                 4.9/5 atención
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <Icon icon="mdi:clock-outline" className="w-4 h-4 text-[#0ea5a3]" />
//                 Llegamos en 45–60 min
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <Icon icon="mdi:check-decagram" className="w-4 h-4 text-[#0ea5a3]" />
//                 Médicos certificados
//               </span>
//             </div>
//           </div>

//           {/* Imagen en card */}
//           <div className="relative">
//             <div className="mx-auto max-w-md rounded-3xl p-5 shadow-[0_12px_40px_rgba(2,6,23,0.08)] ring-1 ring-slate-100">
//               <img
//                 src={logo}
//                 alt="Logo MedHogar"
//                 className="w-full h-auto rounded-2xl object-contain"
//               />
//             </div>
//             {/* adorno sutil */}
//             <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-[#94d8d6]/40 blur-2xl" />
//           </div>
//         </div>
//       </div>

//       {/* acento inferior */}
//       <div className="h-2 w-full bg-[#0ea5a3]/80"></div>
//     </section>
//   );
// };

// export default Hero;


import { Icon } from "@iconify/react";
// const logo = "https://via.placeholder.com/520x520.png?text=LOGO";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-tertiary">
      {/* Gradientes de fondo sutiles */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_-20%,rgba(14,165,163,0.12),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_0%,rgba(14,165,163,0.12),transparent)]"></div>
      </div>

      <div className="relative padding-general py-12 md:py-16 lg:py-20 xl:px-12">
        <div className="mx-auto flex justify-between items-center gap-10 md:grid-cols-2">
          {/* Copy + CTAs */}
          <div className="w-[50%]">
            <h1 className="h1-responsive font-extrabold tracking-tight leading-tight">
              Atención médica rápida y confiable{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5a3] to-[#06b6d4]">
                donde estés
              </span>
            </h1>

            <p className="p-responsive mt-4 md:mt-5 md:mb-6 ">
              Médicos a domicilio en Santiago, entregando atención de calidad y
              confianza en la comodidad y seguridad de tu hogar.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap  items-center gap-3">
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
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-600">
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

          {/* Imagen sin tarjeta blanca */}
          <div className="relative">
            {/* Blob de color detrás (sin fondo blanco) */}
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#0ea5a3]/20 via-[#06b6d4]/20 to-transparent blur-2xl"></div>
            {/* halo sutil */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] ring-1 ring-white/40/0"></div>

            <img
              src={logo}
              alt="Logo MedHogar"
              className="w-full max-w-md h-auto object-contain drop-shadow-[0_12px_28px_rgba(2,6,23,0.15)]"
            />
          </div>
        </div>
      </div>

      {/* acento inferior */}
      <div className="h-2 w-full bg-[#0ea5a3]/80"></div>
    </section>
  );
}
