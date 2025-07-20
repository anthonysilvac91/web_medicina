import { Icon } from '@iconify/react/dist/iconify.js'
import {  stepVisit } from '../Utils/data'

const CardService = () => {
  return (
    
      <div className="flex flex-col gap-4 mt-6 text-text-secondary">
        {stepVisit.map((item, idx) => (
          <div key={idx} className="flex gap-2.5 items-start">
            <Icon
              className="text-bg-primary min-w-[60px]"
              icon={item.icon}
              width="60"
              height="60"
            />
            <div>
              <h3 className="font-semibold 2xl:text-3xl">{item.title}</h3>
              <p className="font-light 2xl:text-2xl">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    
  )
}

export default CardService