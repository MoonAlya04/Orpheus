import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <header className="fixed top-0 w-full  z-50 border-b-2 border-[#101822]">
            <Container>
                <div className="flex justify-between items-center h-[96px]">
                    <Link to="/">
                        <img src="/darkLogo.png" alt="Logo" className="h-[40px]" />
                    </Link>

                    <nav className="hidden lg:flex ml-auto text-white gap-[45px] text-[16px]">
                        <Link to="#">Works</Link>
                        <Link to="#">Contribution</Link>
                        <Link to="#">Community</Link>
                        <Link to="#">Get in Touch</Link>
                        <FontAwesomeIcon icon={faSun} size="lg" />
                    </nav>
                    <FontAwesomeIcon icon={faBars} size='lg' className='text-white pt-3 lg:hidden' />
                </div>
            </Container>
        </header>
    )
}

export default Header
