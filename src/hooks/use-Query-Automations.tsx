import { getAllAutomations, getAutomationInfo } from "@/actions/automations"
import { useQuery } from "@tanstack/react-query"

export const useQueryAutomations = () => {
 // console.log("use query called")
  return useQuery({
    queryKey: ['user-automations'],
    queryFn: getAllAutomations,

  })
}
export const useQueryAutomation = (id: string) => {
  return useQuery({
    queryKey: ['automation-info'],
    queryFn: () => getAutomationInfo(id),
  })
}
