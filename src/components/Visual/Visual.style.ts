import tw from 'twin.macro'

export const VisualWrapper = tw.section`
  w-full flex justify-center items-center
  p-5 mt-3 mb-5
`
export const VisualBox = tw.div`
  flex flex-col justify-between 
  rounded-md p-3
  text-white bg-indigo-600 dark:bg-slate-900 
  w-full md:w-4/5 lg:w-4/6 lg:max-w-3xl
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
  text-xl font-bold mt-3 mb-1
  sm:text-2xl
`
export const VisualSubTitle = tw.p`
  text-sm
`
