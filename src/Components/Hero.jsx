import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <section className='bg-bg-secondary padding-general flex flex-col-reverse md:flex-row justify-between items-center py-12 md:py-16 lg:py-20'>
        <div className='md:w-[60%]'>
            <h1 className='text-text-primary h1-responsive md:pr-2.5 font-bold text-center md:text-left mt-4'>Atención médica rápida
y confiable <span className='text-bg-primary'>donde estés</span></h1>
            <p className='text-text-primary lg:mt-5 lg:mb-7 md:mt-4 md:mb-5 mt-3 mb-4 p-responsive text-center sm:px-7 md:text-left md:px-0 lg:pr-8 xl:pr-0 2xl:pr-14'>Calidad en la comodidad de tu hogar. Consulta con especialistas cerca de ti.</p>
            <div className='flex justify-center'>

            <a href="#" className='btn-responsive'>Solicitar Visita a Domicilio</a>
            </div>
        </div>
        <div className='xl:min-w-[430px] lg:max-w-[300px] sm:max-w-[240px] max-w-[150px]'>
            <img className='w-100%' src={logo} alt="logo_medhogar" />
        </div>


    </section>
  )
}

export default Hero