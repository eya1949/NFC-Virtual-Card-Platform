import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { Outlet } from 'react-router-dom'

export default function MainLayout({children}) {
  return (
    <>
      <Navbar/>
      <Searchbar/>
      <Outlet/>
      <section>
        {children}
      </section>
    </>
  )
}
