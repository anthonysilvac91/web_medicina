import Card from './Card.jsx'
import { valueProps, services, steps} from '../Utils/data.js';
import serviciosImg from '../assets/services.png'
import contactoImg from '../assets/steps.png'
import { Icon } from '@iconify/react/dist/iconify.js';

const Service = () => {
  return (
    <section className='padding-general bg-bg-primary mt-15 mb-10'>

      {/* Sección Por que elegirnos */}
      <div>
        <h2 className='h2-responsive mb-10'>¿Por qué elegirnos?</h2>

        <div className='flex xl:px-12 flex-wrap justify-between gap-2.5' >
          <Card items={valueProps}/>
        </div>

      </div>

      {/* Seccion servicios disponibles */}
      <div>
        <h2  className='h2-responsive mt-15 mb-10'>¿Qué servicios médicos ofrecemos a domicilio?</h2>

        <div>
          <div className='flex xl:px-12 gap-4 justify-between' >
            <div className='flex flex-col justify-between gap-2.5' >
              <Card items={services.slice(0,3)}/>
            </div>
            <div className='max-w-[500px]'>
              <img src={serviciosImg} alt="Servicios" />
            </div>
          </div>

          <div className='flex xl:px-12 flex-wrap justify-between gap-2.5 mt-5'>
            <Card items={services.slice(3)}/>
          </div>
        </div>
      </div>

      {/* Seccion pasos para contacto */}
      <div>
        <h2 className='h2-responsive mt-15 mb-10'>¿Cómo recibir atención médica en tu hogar?</h2>
      </div>

      <div className='flex gap-2.5 justify-between xl:px-12' >
        <div className='max-w-[500px]'>
          <img className='w-full hight-auto' src={contactoImg} alt="doctos_contacto" />
        </div>
        
        <div className='flex flex-col justify-between'>
          <Card items={steps} />
          
        </div>
      </div>

      <div className='flex justify-around items-center xl:px-12 mt-5' >
        {/* <div><a href="#" className='btn-responsive'>Solicitar Visita a Domicilio</a></div> */}
         <div>
          <a
                href="https://wa.me/56911111111"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold text-white bg-[#0ea5a3] hover:bg-[#0b8e8c] shadow-sm transition-colors"
              >
                <Icon icon="mdi:whatsapp" className="w-5 h-5" />
                Solicitar visita por WhatsApp
              </a>
          </div> 

          <div  className=' flex rounded-2xl items-center gap-4 px-5 py-0'>
                    <Icon className="text-bg-secondary"icon='mdi:check-bold'
                                  width="60"
                                   height="60"
                                />
                    <div className='flex flex-col'> 
                        <h3 className='h3-responsive'>¡Así de simple! </h3>
                        <p className='p-responsive'>Sin filas y con total comodidad.</p>
                    </div>
            </div>
          
        </div>

        
        
    </section>

       
  )
}

export default Service