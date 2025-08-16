
import Hero from '../Components/Hero'
import Service from '../Components/Service'
import Faq from '../Components/Faq'
import { faqs } from '../Utils/data.js';

const Home = () => {
  return (
    <>
    <Hero/>
    <div className='bg-bg-secondary h-10'></div>
    <Service/>  
    <div className='bg-bg-secondary h-70'></div>
    <Faq items={faqs} />

 
    
    
    </>
  )
}

export default Home