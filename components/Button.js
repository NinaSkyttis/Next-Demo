import React from 'react'
import { Fugaz_One } from 'next/font/google'


const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400']})

export default function Button(props) {
  const { text, dark, full } = props
  return (
    <button className={'rounded-full border overflow-hidden border-indigo-600 border-2 duration-200 hover:opacity-60 ' + (dark ? 'text-white bg-indigo-600 border-indigo-600' : 'text-indigo-600 ' + (full ? 'grid place-items-center w-full' : ''))}>
      <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>{text}</p>
    </button>
  )
}