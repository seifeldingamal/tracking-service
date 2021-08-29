import React from 'react'
import './NavBar.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = ({setIsOpen}) => {
    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                <NavLink to='/'>
                    <Logo className='logo' />
                </NavLink>
            </div>
            <div className='mobile-bars' onClick={setIsOpen}>
                <FaBars />
            </div>
            <div className='nav-menu'>
                <NavLink className='NavLink' to='/'>
                الرئيسية
                </NavLink>
                <NavLink className='NavLink' to='/'>
                الأسعار
                </NavLink>
                <NavLink className='NavLink' to='/'>
                كلم المبيعات
                </NavLink>
            </div>
            <div className='nav-menu'>
                <NavLink className='NavLink shipment' to='/'>
                    <p>تتبع شحنتك</p>
                    <FaAngleDown />
                </NavLink>
                <NavLink className='NavLink' to='/'>
                تسجيل الدخول
                </NavLink>
                <NavLink className='NavLink lang' to='/'>
                    ENG
                </NavLink>
            </div>
            
        </div>
    )
}

export default NavBar
