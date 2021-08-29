import React from 'react'
import './SideBar.scss'
import { FaAngleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const SideBar = ({isOpen}) => {

    const cName = isOpen ? 'side-bar animation' : 'side-bar'

    return (
        <div className={cName}>
            <NavLink className='NavLink' to='/'>
            الرئيسية
            </NavLink>
            <NavLink className='NavLink' to='/'>
            الأسعار
            </NavLink>
            <NavLink className='NavLink' to='/'>
            كلم المبيعات
            </NavLink>
            <NavLink className='NavLink shipment' to='/'>
                <p>تتبع شحنتك</p>
                <FaAngleDown />
            </NavLink>
            <NavLink className='NavLink' to='/'>
            تسجيل الدخول
            </NavLink>
        </div>
    )
}

export default SideBar
