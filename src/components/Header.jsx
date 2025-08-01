import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../context/ThemeContext'
function Header() {

    const { theme, toggleTheme } = useTheme();
    const headerColor = theme === 'light' ? 'text-[#0D0D0D]' : 'text-white'
    const headerTheme = theme === 'light' ? 'border-none' : 'border-[#101822]'

    return (
        <header className={`fixed backdrop-blur-xl top-0 w-full  z-50 border-b-2 ${headerTheme} border-[#101822]`}>
            <Container>
                <div className="flex justify-between items-center h-[96px]">
                    <Link to="/">
                        <img src={theme === 'dark' ? '/darkLogo.png' : '/logo.png'} alt="Logo" className="h-[40px]" />
                    </Link>

                    <nav className={`hidden lg:flex ml-auto text-white gap-[45px] text-[16px] ${headerColor}`}>
                        <Link to="#">Works</Link>
                        <Link to="#">Contribution</Link>
                        <Link to="#">Community</Link>
                        <Link to="#">Get in Touch</Link>
                        <FontAwesomeIcon className='cursor-pointer' icon={theme === 'dark' ? faSun : faMoon} size="lg" onClick={toggleTheme}
                        />
                    </nav>
                    <FontAwesomeIcon icon={faBars} size='lg' className='text-white pt-3 lg:hidden' />
                </div>
            </Container>
        </header>
    )
}

export default Header
