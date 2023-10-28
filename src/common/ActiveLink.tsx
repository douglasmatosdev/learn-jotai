'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

interface ActiveLinkProps {
  children: React.ReactNode
  href: string
}

export const ActiveLink = ({ children, href }: ActiveLinkProps): JSX.Element => {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
