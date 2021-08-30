import React from 'react'
import './SideBar.scss'
import { FaAngleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const SideBar = ({ isOpen, setIsOpen}) => {

    const cName = isOpen ? 'side-bar animation' : 'side-bar'

    return (
        <div className={cName}>
            <NavLink onClick={setIsOpen} className='NavLink' to='/'>
            الرئيسية
            </NavLink>
            <NavLink onClick={setIsOpen} className='NavLink' to='/'>
            الأسعار
            </NavLink>
            <NavLink onClick={setIsOpen} className='NavLink' to='/'>
            كلم المبيعات
            </NavLink>
            <NavLink onClick={setIsOpen} className='NavLink shipment' to='/'>
                <p>تتبع شحنتك</p>
                <FaAngleDown />
            </NavLink>
            <NavLink onClick={setIsOpen} className='NavLink' to='/'>
            تسجيل الدخول
            </NavLink>
        </div>
    )
}

export default SideBar
