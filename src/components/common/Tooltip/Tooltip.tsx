import tw from 'twin.macro'
import { ReactNode } from 'react'

type TooltipProps = {
  message?: string
  children: ReactNode
}

const ToolTip = ({ message, children }: TooltipProps) => {
  return (
    <div className="group relative flex">
      {children}
      <TooltipContent>{message}</TooltipContent>
    </div>
  )
}

export default ToolTip

export const TooltipContent = tw.div`
  w-max text-center absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100
`
