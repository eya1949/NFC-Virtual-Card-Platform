import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'

export default function MainLayout() {
  return (
    <>
      <Outlet/>
      <Navbar/>
      <Searchbar/>
    </>
  )
}
