import { Icon } from "@iconify/react/dist/iconify.js"

{/*w-[480px] h-[120px] flex rounded-2xl bg-card-primary items-center gap-4 px-5 mb-4 shadow-md  */}
    {/* w-full min-h-[112px] flex rounded-2xl bg-card-primary items-center gap-4 px-5 py-4 shadow-md*/}

const Card = ({ items = [] }) => {
  return (
    <>


        {items.map((item)=>(
            <div key={item.id}  className=" w-full lg:max-w-[520px]  max-w-[480px] lg:h-[120px] justify-self-center min-h-[112px] md:min-h-[120px] flex items-center gap-4 rounded-2xl bg-card-primary px-5 py-4 shadow-md">
                    <div className='bg-bg-secondary sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] rounded-full flex justify-center items-center shrink-0'>
                       <Icon className="text-bg-primary sm:w-[60px] sm:h-[60px] w-[50px] h-[50px]"icon={item.icon}
              
            />
            <div></div>
                    </div>
                    <div className='flex flex-col'> 
                        <h3 className='h3-responsive'>{item.title}</h3>
                        <p className='p-responsive'>{item.text}</p>
                    </div>
            </div>
        ))}
        
       </>
    
  )
}



export default Card



// Card.jsx

// export default function Card({ items = [], itemClassName = "" }) {
//   return (
//     <>
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className={`min-h-[112px] md:min-h-[120px] w-full
//                      flex items-center gap-4 rounded-2xl bg-card-primary
//                      px-5 py-4 shadow-md ${itemClassName}`}
//         >
//           <div className="shrink-0 grid place-items-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-bg-secondary"/>
          
//           <div className="flex-1">
//             <h3 className="h3-responsive">{item.title}</h3>
//             <p className="p-responsive">{item.text}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

