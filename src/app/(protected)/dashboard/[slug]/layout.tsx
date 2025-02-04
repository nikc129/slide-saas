import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    childer:React.ReactNode
    params:{slug:string}
}

const layout = ({childer,params}: Props) => {

    

  return (
    <div>
      <Sidebar slug={params.slug} />
    </div>
  )
}

export default layout