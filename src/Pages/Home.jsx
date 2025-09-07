
import Hero from '../Components/Hero'
import Service from '../Components/Service'
import Faq from '../Components/Faq'
import { faqs } from '../Utils/data.js';
import { testimonials } from '../Utils/data.js';
import TestimonialsCarousel from '../Components/TestimonialsCarousel';
import Newsletter from '../Components/Newsletter.jsx';
import Footer from '../Components/Footer.jsx';

const Home = () => {
  return (
    <>
    <Hero/>
    <div className='bg-bg-secondary h-10'></div>
    <Service/>  
    <div className='bg-bg-secondary padding-general py-15'>
      <h2 id="quienes-somos" className='h2-responsive text-white mb-5'>Servicios de medicina general a domicilio en Santiago</h2>
      <p className='p-responsive text-white'>En MedHogar ofrecemos consultas médicas generales a domicilio en toda la Región Metropolitana. Nuestro equipo de médicos certificados se traslada hasta tu hogar para realizar evaluaciones, diagnósticos y recetas, entregando una atención rápida, segura y personalizada sin que tengas que salir de casa.</p>
    </div>
    <Faq items={faqs} />
    <TestimonialsCarousel items={testimonials} />
    <Newsletter imageSrc="/img/subscribe-illustration.png" />
    <Footer/>

 
    
    
    </>
  )
}

export default Home