import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { ActiveAutomation } from '@/icons/active-automation'

type Props = {
    id: string
  }
  

const ActivateAutomationButton = ({id}: Props) => {
  return (
    <Button
    
      className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4"
    >
    <Loader className="animate-spin" state={false} >

         <ActiveAutomation />
    </Loader>

      <p className="lg:inline hidden">
     Disable
      </p>
    </Button>
  )
}

export default ActivateAutomationButton