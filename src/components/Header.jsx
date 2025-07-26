import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faBars } from '@fortawesome/free-solid-svg-icons'
function Header() {
    return (
        <div>

            <header>
                <div className='flex fixed w-full justify-between items-center h-[96px]  border-b-2 border-[#101822] lg:px-[96px] sm: pl-2 pr-2'>
                    <Link to="/">
                        <img src="/darkLogo.png" alt="" />
                    </Link>
                    <nav className='hidden lg:flex ml-auto text-white gap-[45px] text-[16px]'>
                        <Link>Works</Link>
                        <Link>Contribution</Link>
                        <Link>Community</Link>
                        <Link>Get in Touch</Link>
                        <FontAwesomeIcon icon={faSun} size="lg" />
                    </nav>
                    <FontAwesomeIcon icon={faBars} size='lg' className='text-white pt-3 lg:hidden'/>
                </div>
            </header>
        </div>
    )
}

export default Header