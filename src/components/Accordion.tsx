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
    <React.Fragment key={instanceId} >
      <div className="flex gap-x-4 pb-7 nth-6:pb-0 nth-6:border-0 justify-between">
        <div className="space-y-2">
          <p className="text-lg/4.5 font-medium">{title}</p>
          {isOpen ?
            <p className="text-base/4 text-neutral-600 text-left">
              {description}
            </p>
            :
            null
          }
        </div>
        <button onClick={() => setIsOpen(curr => !curr)}>
          {isOpen ?
            <RiIndeterminateCircleLine className="text-neutral-400 w-6 h-6 cursor-pointer" />
            :
            <RiAddCircleLine className="text-neutral-400 w-6 h-6 cursor-pointer" />
          }
        </button>
      </div>
    </React.Fragment>
  )
}

export default Accordion;