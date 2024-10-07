import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function Layout() {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout