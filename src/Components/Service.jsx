
import foto_doctor from '../assets/doctora.jpg'
import CardService from './CardService'

const Service = () => {
  return (
    <section className='flex padding-general justify-between 2xl:py-24 gap-20 '>
        <div className='2xl:max-w-[400px] flex justify-center items-center'>
            <img className='rounded-2xl' src={foto_doctor} alt="foto doctora" />
        </div>
        <div className='2xl:pr-16'>
            <h2 className="text-text-primary font-bold 2xl:text-[40px] ">Cómo recibir atención médica <span className="text-bg-primary">sin salir de casa</span>
            </h2>
            <CardService/>
            <div className='2xl:mt-10 flex justify-center'>
                <a className='btn-responsive' href="#">Agenda por Whatsapp</a>
            </div>
        </div>
        

    </section>
  )
}

export default Service