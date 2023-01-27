import tw from 'twin.macro'

export const VisualWrapper = tw.section`
  w-full flex justify-center items-center
  p-7 mt-3 mb-10
`
export const VisualBox = tw.div`
  flex flex-col justify-between 
  rounded-md p-5
  text-white bg-indigo-600 dark:bg-slate-900 
  w-full md:w-4/5 lg:w-4/5 xl:w-3/5 2xl:w-3/5
  sm:flex-row
`
export const VisualContent = tw.div`
  flex flex-col justify-center items-center p-3
  sm:p-6 sm:grow sm:flex-row sm:justify-between
`
export const VisualTitleBox = tw.div`
  flex flex-col
`
export const VisualTitle = tw.h1`
  text-xl font-bold mb-1
  sm:text-2xl
`
export const VisualSubTitle = tw.p`
  text-sm
`
