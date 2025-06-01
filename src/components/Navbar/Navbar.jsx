import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="custom flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative text-xs md:text-lg">
                <a href='#'>About</a>
                <a href='#'>Explore</a>
                <a href='#'></a>
                <a href='#'>Journal</a>
                <a href='#'>Search</a>
            </nav>
        </>
    )
}

export default Navbar