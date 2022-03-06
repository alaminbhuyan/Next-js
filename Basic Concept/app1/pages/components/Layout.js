import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar/>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout