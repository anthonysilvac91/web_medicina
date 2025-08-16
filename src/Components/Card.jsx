import { Icon } from "@iconify/react/dist/iconify.js"

const Card = ({ items = [] }) => {
  return (
    <>
        {items.map((item)=>(
            <div key={item.id}  className='w-[480px] h-[120px] flex rounded-2xl bg-card-primary items-center gap-4 px-5 mb-4 shadow-md'>
                    <div className='bg-bg-secondary w-[80px] h-[80px] rounded-full flex justify-center items-center shrink-0'>
                       <Icon className="text-bg-primary"icon={item.icon}
              width="60"
               height="60"
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