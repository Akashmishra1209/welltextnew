"use client"
import React from 'react'
import { ModeToggle } from './ui/ModeToggle'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { Button } from './ui/button'
import { UserButton, useUser } from '@clerk/nextjs'

export default function Navbar() {
  const {isSignedIn} = useUser()
  return (
    <div className="container mx-auto flex flex-wrap p-1 items-center justify-between sticky top-0 z-50 w-full lg:max-w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 backdrop-blur-sm">
      <Link className="flex title-font font-medium items-center" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">{process.env.NEXT_PUBLIC_APP_NAME}</span>
      </Link>
      <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
        <Link href="/" className='mr-5'>Home</Link>
        <Link href="/tools" className='mr-5'>Tools</Link>
        <Link href="/about" className='mr-5'>About</Link>
        <Link href="/contact" className='mr-5'>Contact</Link>
        <span className='mr-5'>
        {  
        isSignedIn ? <UserButton/> : <Link href="/sign-up"><Button>Sign Up</Button></Link>        }
        </span>
      </nav>
      <div className="flex items-center">
        <ModeToggle />
        <Sheet>
          <SheetTrigger className="md:hidden ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle>{process.env.NEXT_PUBLIC_APP_NAME}</SheetTitle>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link href="/">Home</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact Us</Link>
              <div>
              {isSignedIn ? <UserButton/> : <Link href="/sign-up"><Button variant="outline">Sign Up</Button></Link>}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}