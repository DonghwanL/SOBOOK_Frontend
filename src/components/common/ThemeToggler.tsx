import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import tw from 'twin.macro'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <DarkModeToggleBtn onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle Dark Mode">
      {theme === 'light' ? (
        <MoonIcon className="text-indigo-500 w-5 h-5" />
      ) : (
        <SunIcon className="text-yellow-500 w-5 h-5" />
      )}
    </DarkModeToggleBtn>
  )
}

export default ThemeToggler

const DarkModeToggleBtn = tw.button`
  w-8 h-8 p-1 rounded-lg dark:bg-slate-800 flex items-center justify-center transition-all duration-300 focus:outline-none
`