import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../'

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout