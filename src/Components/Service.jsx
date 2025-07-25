
import foto_doctor from '../assets/doctora.jpg'
import CardService from './CardService'

const Service = () => {
  return (
    <section className='flex padding-general md:flex-row flex-col justify-between xl:py-24 lg:py-16 md:py-10 py-10 sm:py-14 lg:gap-20 md:gap-10 '>
        <div className=' h-[230px] xl:max-w-[400px] lg:max-w-[315px] md:max-w-[270px] flex justify-center items-center rounded-2xl overflow-hidden w-auto sm:h-[360px] md:h-auto mb-8 md:mb-0'>
            <img className='w-full h-full object-cover md:object-contain' src={foto_doctor} alt="foto doctora" />
        </div>
        <div className='2xl:pr-16'>
            <h2 className="text-text-primary font-bold h2-responsive ">Cómo recibir atención médica <span className="text-bg-primary">sin salir de casa</span>
            </h2>
            <CardService/>
            <div className='xl:mt-10 lg:mt-8 sm:mt-8 mt-6 flex justify-center'>
                <a className='btn-responsive' href="#">Agenda por Whatsapp</a>
            </div>
        </div>
        

    </section>
  )
}

export default Service


//  <div className='xl:max-w-[400px] lg:max-w-[315px] md:max-w-[270px] sm:w-auto sm:h-[360px] rounded-[24px] sm:overflow-hidden flex justify-center items-center sm:mb-8'>
//             <img className='rounded-2xl w-full h-full sm:object-cover' src={foto_doctor} alt="foto doctora" />
//         </div>