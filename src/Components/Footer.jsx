import { Icon as Iconify } from "@iconify/react";


export default function Footer() {
  const year = new Date().getFullYear();
  const coverageRM = [
    "Santiago",
    "Providencia",
    "Ñuñoa",
    "La Florida",
    "Maipú",
    "Las Condes",
    "Puente Alto",
    "La Reina",
    "Peñalolén",
    "Macul",
  ];

  return (
    <div className=" bg-slate-100 mt-20">
      <footer className="bg-slate-900 text-slate-200 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
        <div className="px-6 py-10 xl:px-12">
          {/* TOP */}
          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            {/* Brand + contacto */}
            <div className="md:col-span-2">
              <a href="#" className="text-xl font-semibold">
                Médico a Domicilio
              </a>
              <p className="mt-3 text-sm text-slate-400 max-w-md">
                Atención médica en tu hogar: rápida, certificada y cercana.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/56911111111"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3 py-2 font-semibold text-slate-900"
                >
                  <Iconify icon="mdi:whatsapp" className="w-5 h-5" />
                  WhatsApp
                </a>
                <a href="tel:+56911111111" className="...">
    <Iconify icon="mdi:phone" className="w-5 h-5" />
    +56 9 1111 1111
  </a>
  <a href="mailto:contacto@tusitio.cl" className="...">
    <Iconify icon="mdi:email-outline" className="w-5 h-5" />
    contacto@tusitio.cl
  </a>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                No reemplaza urgencias vitales. En caso de emergencia llama al
                <span className="font-semibold"> 131</span>.
              </p>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Servicios
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#consulta-general" className="hover:text-white">Consulta general</a></li>
                <li><a href="#recetas" className="hover:text-white">Recetas médicas</a></li>
                <li><a href="#ninos-adulto-mayor" className="hover:text-white">Niños y adulto mayor</a></li>
                <li><a href="#cronicas" className="hover:text-white">Enfermedades crónicas</a></li>
                <li><a href="#prevencion" className="hover:text-white">Prevención y control</a></li>
              </ul>
            </div>

            {/* Compañía */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Compañía
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li><a href="#sobre" className="hover:text-white">Sobre nosotros</a></li>
                <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
                <li><a href="#faqs" className="hover:text-white">Preguntas frecuentes</a></li>
                <li><a href="#legal" className="hover:text-white">Términos y privacidad</a></li>
              </ul>
            </div>

            {/* Cobertura RM */}
            <div className="lg:col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Cobertura RM
              </h4>
              <ul className="mt-3 text-sm text-slate-400 columns-2 gap-6">
                {coverageRM.map((c) => (
                  <li key={c} className="break-inside-avoid hover:text-white">{c}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {year} Médico a Domicilio. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white">
                <Iconify icon="mdi:instagram" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white">
                <Iconify icon="mdi:facebook" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="TikTok" className="text-slate-400 hover:text-white">
                <Iconify icon="mdi:tiktok" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
