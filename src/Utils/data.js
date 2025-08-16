import avatarImg from '../assets/avatar_generico.png'

export const valueProps = [
  { id: 'speed', icon: 'hugeicons:flash', title: 'Rapidez garantizada', text: 'Llegamos a tu hogar sin demoras.' },
  { id: 'cert',  icon: 'bx:certification', title: 'Médicos certificados', text: 'Profesionales con registro oficial.' },
  { id: 'rm',    icon: 'mdi:location', title: 'Cobertura total RM', text: 'Todas las comunas de Santiago.' },
  { id: 'care',  icon: 'material-symbols:family-home-outline-rounded', title: 'Atención cercana', text: 'Trato amable, empático y humano.' },
];

export const services = [
  { id: 'general',  icon: 'healthicons:doctor', title: 'Consulta General', text: 'Evaluación y tratamiento.' },
  { id: 'presc',    icon: 'material-symbols:pill', title: 'Recetas Médicas', text: 'Según diagnóstico.' },
  { id: 'ages',     icon: 'icon-park-outline:family', title: 'Niños y Adulto Mayor', text: 'Cuidado adaptado por etapa.' },
  { id: 'chronic',  icon: 'jam:medical', title: 'Enfermedades Crónicas', text: 'Control y seguimiento.' },
  { id: 'prev',     icon: 'mdi:check-bold', title: 'Prevención y Control', text: 'Evaluación para detectar y prevenir.' },
];

export const steps = [
  { id: 'step1', step: 1, icon: 'ic:baseline-whatsapp', title: 'Escríbenos por WhatsApp', text: 'Te asesoramos al instante.' },
  { id: 'step2', step: 2, icon: 'mdi:calendar', title: 'Agenda tu hora', text: 'Elige día y horario disponible.' },
  { id: 'step3', step: 3, icon: 'mynaui:ambulance', title: 'Un médico va en camino', text: 'Sin filas y con total comodidad.' },
];

export const faqs = [
  { id: 'comunas', title: '¿En qué comunas están disponibles?', text: 'Lorem ipsum dolor sit amet...' },
  { id: 'tiempo',  title: '¿Cuánto tarda en llegar el médico?', text: 'Depende del sector; promedio 45–60 min.' },
  { id: 'emerg',   title: '¿Atienden emergencias?', text: 'No somos servicio de urgencias vitales.' },
  { id: 'pago',    title: '¿Qué métodos de pago aceptan?', text: 'Efectivo, débito, crédito y transferencia.' },
];

export const testimonials = [
  {
    id: 'edera',
    name: 'Edera Pereira',
    rating: 5,
    text: 'Quiero dar mi testimonio a la buena atención recibida por el médico.',
    avatar: avatarImg, // opcional (ponla en public/avatars)
    date: '2025-08-01',
    source: 'Local'
  },
  {
    id: 'maria',
    name: 'María G.',
    rating: 4,
    text: 'Muy profesionales y puntuales. Repetiría el servicio.',
    avatar: avatarImg,
    date: '2025-07-22',
    source: 'Local'
  },
  {
    id: 'juan',
    name: 'Juan R.',
    rating: 5,
    text: 'Atención cercana y explicaciones claras. ',
    avatar: avatarImg,
    date: '2025-07-10',
    source: 'Local'
  },
  {
    id: 'rocio',
    name: 'Rocío L.',
    rating: 5,
    text: 'Excelente trato con mi madre. 100% recomendado.',
    avatar: avatarImg,
    date: '2025-06-30',
    source: 'Local'
  },
  {
    id: 'pablo',
    name: 'Pablo S.',
    rating: 4,
    text: 'Llegaron rápido y resolvieron mi problema. recomendados 100%',
    avatar: avatarImg,
    date: '2025-06-15',
    source: 'Local'
  }
];

export const data = { valueProps, services, steps, faqs, testimonials };