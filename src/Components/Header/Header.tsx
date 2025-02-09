import React from 'react'
import { Link } from 'react-router-dom'
import { links, colors } from '../../constant'
import { useTheme } from '../../contexts'

export function Header() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`flex justify-between items-center p-4 px-10 ${colors[theme].background} ${colors[theme].text}`}>
        <h1>Angelic UI</h1>

        <div className="flex gap-4 items-center">
            <Link to={links.Home}>Home</Link>
            <Link to={links.Docs}>Docs</Link>
            <Link to={links.Pricing}>Pricing</Link>
            <Link to={links.Portfolio}>Portfolio</Link>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-600"
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
        </div>
    </div>
  )
}