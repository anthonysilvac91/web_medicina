import Card from './Card.jsx'
import { valueProps, services, steps} from '../Utils/data.js';
import serviciosImg from '../assets/services.png'
import contactoImg from '../assets/steps.png'
import { Icon } from '@iconify/react/dist/iconify.js';

const Service = () => {
  return (
    <section className='padding-general bg-bg-primary mt-15 mb-10'>

{/*-------- Sección Por que elegirnos */}
      <div>
        <h2 className='h2-responsive mb-10'>¿Por qué elegirnos?</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 xl:px-12' >
          <Card items={valueProps}/>
        </div>
         </div>
        
{/*------- Seccion servicios disponibles */}
 

      <div>
        <h2 className="h2-responsive mt-15 mb-10">¿Qué servicios médicos ofrecemos a domicilio?</h2>

        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 xl:px-12 gap-4'>
          <div className=" flex flex-col lg:justify-around items-center gap-4 2xl:gap-0">
            <Card items={services.slice(0,3)} itemClassName="w-full" />
          </div>
          <div className='flex items-center max-w-lg mx-auto justify-center'>
            <img src={serviciosImg}  alt="servicios_medicos" />
            
          </div>
        </div>

        <div className='flex items-center flex-col lg:flex-row xl:px-12 gap-4 mt-4'>
          <Card items={services.slice(3)} itemClassName="w-full" />
        </div>
        
      </div>

 
{/*-------- Seccion pasos para contacto */}
      
      
      <div>
        <h2 className='h2-responsive mt-15 mb-10'>¿Cómo recibir atención médica en tu hogar?</h2>
        <div className='flex flex-col lg:grid lg:grid-cols-2 xl:px-12 gap-4'>
          <div className='flex items-center max-w-lg mx-auto justify-center'>
            <img src={contactoImg} alt="pasos_contacto" />
          </div>
          <div className=" flex flex-col lg:justify-around items-center gap-4 2xl:gap-0">
            <Card items={steps} itemClassName="w-full" />
          </div>
        </div>

        <div className='flex items-center justify-center lg:flex-row xl:px-12 gap-4 mt-4'>
          
          <a
                href="https://wa.me/56973107989"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold text-white bg-[#0ea5a3] hover:bg-[#0b8e8c] shadow-sm transition-colors"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                Solicitar visita por WhatsApp
              </a>
          
          {/* <div  className=' flex rounded-2xl items-center gap-4 px-5 py-0'>
                    <Icon className="text-bg-secondary"icon='mdi:check-bold'
                                  width="60"
                                   height="60"
                                />
                    <div className='flex flex-col'> 
                        <h3 className='h3-responsive'>¡Así de simple! </h3>
                        <p className='p-responsive'>Sin filas y con total comodidad.</p>
                    </div>
            </div> */}
        </div>


      </div>
      
      
 

        
        
    </section>

       
  )
}

export default Service