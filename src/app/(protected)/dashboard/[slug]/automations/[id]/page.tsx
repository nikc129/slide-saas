import { getAutomationInfo } from '@/actions/automations'
import Trigger from '@/components/global/automations/Trigger'
import AutomationsBreadCrumb from '@/components/global/Bread-Crumb/automations'
import { Warning } from '@/icons'
import { PrefetchUserAutnomations, PrefetchUserAutomation } from '@/react-query/prefetch'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id)
  return {
    title: info.data?.name,
  }
}


const Page = async ({params}: Props) => {
  const query = new QueryClient()
  await PrefetchUserAutomation(query, params.id)
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className=" flex flex-col items-center gap-y-20">
        <AutomationsBreadCrumb id={params.id} />
        <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
          <div className="flex gap-x-2">
            <Warning />
            When...
          </div>
          <Trigger id={params.id} />
        </div>
        {/* <ThenNode id={params.id} />
        <PostNode id={params.id} /> */}
      </div>
    </HydrationBoundary>
  )
}

export default Page