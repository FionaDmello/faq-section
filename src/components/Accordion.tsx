import React, { useId, useState } from "react"
import { RiIndeterminateCircleLine, RiAddCircleLine } from "@remixicon/react"

interface AccordionProps {
  accordion: {
    title: string,
    description: string
  }
}

const Accordion = ({ accordion }: AccordionProps) => {
  const instanceId = useId()
  const { title, description } = accordion
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <button
      role="button"
      key={instanceId}
      aria-controls={instanceId}
      aria-expanded={isOpen}
      onClick={() => setIsOpen(curr => !curr)}
      className="flex gap-x-4 pb-7 nth-6:pb-0 nth-6:border-0 justify-between"
    >
      <div className="flex-1 space-y-2 text-left">
        <p className="text-lg/4.5 font-medium ">{title}</p>
        {isOpen ?
          <p className="text-base/5 text-neutral-600">
            {description}
          </p>
          :
          null
        }
      </div>
      
      {isOpen ?
        <RiIndeterminateCircleLine className=" text-neutral-400 w-6 h-6 cursor-pointer" />
        :
        <RiAddCircleLine className=" text-neutral-400 w-6 h-6 cursor-pointer" />
      }
    </button>
  )
}

export default Accordion;