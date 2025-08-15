// import { Icon } from '@iconify/react/dist/iconify.js'


const About = () => {
  return (
    <section className="bg-bg-primary flex justify-between padding-general py-20">
        <div className="text-white text-5xl">
            <h2>¿Por qué elegirnos?</h2>
        </div>
        <div className="flex text-white justify-center text-center">
            <div className="">
                
                <h3>Atención Personal</h3>
                <p>Llegamos a tu hogar cuando más lo necesitas, sin largas esperas ni complicaciones.</p>
                
            </div>
            <div>
                <i></i>
                <h3>Atención Profesional</h3>
                <p>Médicos calificados para un diagnóstico confiable en casa.</p>
                
            </div>
            <div>
                {/* <Icon className="text-bg-primary lg:min-w-[60px] min-w-[40px] min-h-[40px]" icon={item.icon} /> */}
                <h3>Compromiso Contigo</h3>
                <p>Te cuidamos con empatía, respeto y cercanía en cada consulta.</p>
                
            </div>
        </div>
    </section>
  )
}

export default About