import React from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export const NavLink: React.FC<NavLinkProps> = (props: NavLinkProps) => {
  const { pathname } = useLocation()
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5
      text-sm font-medium text-muted-foreground
      hover:text-foreground cursor-pointer
      data-[current]:text-foreground"
      {...props}
    />
  )
}
