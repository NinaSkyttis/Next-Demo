import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <i className="text-slate-800 fa-solid fa-spinner animate-spin text-2xl sm:text-3xl"></i>
    </div>
  )
}

