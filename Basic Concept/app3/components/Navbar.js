import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/product">Product</Link></li>
                    <li><Link href="/product/Blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar