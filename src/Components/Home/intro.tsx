import React from 'react'
import { text } from '../../constant'
import { useLanguage } from '../../contexts/LanguageContext'

export function Intro() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">{text.Home[language].title}</h1>
        <p className="text-lg">{text.Home[language].description}</p>
    </div>
  )
}