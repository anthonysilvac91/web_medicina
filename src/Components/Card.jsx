// import { Icon } from "@iconify/react/dist/iconify.js"


// const Card = ({ items = [] }) => {
//   return (
//     <>


//         {items.map((item)=>(
//             <div key={item.id}  className=" w-full lg:max-w-[520px]  max-w-[480px] lg:h-[120px] justify-self-center min-h-[112px] md:min-h-[120px] flex items-center gap-4 rounded-2xl bg-card-primary px-5 py-4 shadow-md">
//                     <div className='bg-bg-secondary sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] rounded-full flex justify-center items-center shrink-0'>
//                        <Icon className="text-bg-primary sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"icon={item.icon}
              
//             />
//             <div></div>
//                     </div>
//                     <div className='flex flex-col'> 
//                         <h3 className='h3-responsive'>{item.title}</h3>
//                         <p className='p-responsive'>{item.text}</p>
//                     </div>
//             </div>
//         ))}
        
//        </>
    
//   )
// }



// export default Card


import { Icon } from "@iconify/react/dist/iconify.js"
import { motion } from "framer-motion";

const Card = ({ items = [] }) => {
  return (
    <>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
          className="w-full lg:max-w-[520px] max-w-[480px] lg:h-[120px] justify-self-center min-h-[112px] md:min-h-[120px] 
                     flex items-center gap-4 rounded-2xl bg-card-primary px-5 py-4 shadow-md transition-transform duration-300"
        >
          <div className="bg-bg-secondary sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] rounded-full flex justify-center items-center shrink-0">
            <Icon
              className="text-bg-primary sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"
              icon={item.icon}
            />
            <div></div>
          </div>
          <div className="flex flex-col">
            <h3 className="h3-responsive">{item.title}</h3>
            <p className="p-responsive">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default Card

