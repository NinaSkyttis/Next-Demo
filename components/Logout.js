'use client'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/authContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Logout() {
  const { logout, currentUser } = useAuth()
  const pathName = usePathname()

  console.log(pathName, 'pathname')
  if (!currentUser) {
    return null
  }
  if (currentUser && pathName === '/') {
    return (
      <Link href={'/'}>
        <Button text="Go to Dashboard"/>
      </Link>
    )
  }
  return (
    <Button text="Log Out" clickHandler={logout} />
  )
}
