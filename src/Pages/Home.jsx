
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
      <h2 className='h2-responsive text-white mb-5'>Servicios de medicina general en tu hogar </h2>
      <p className='p-responsive text-white'>En MEDHOGAR, brindamos servicios médicos personalizados y seguros donde más los necesitas: en casa. Nuestro equipo de profesionales está listo para ayudarte con eficiencia, calidez y compromiso.</p>
    </div>
    <Faq items={faqs} />
    <TestimonialsCarousel items={testimonials} />
    <Newsletter imageSrc="/img/subscribe-illustration.png" />
    <Footer/>

 
    
    
    </>
  )
}

export default Home