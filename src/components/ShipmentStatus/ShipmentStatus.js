import React from 'react'
import './ShipmentStatus.scss'
import ProgressBar from '../StepProgressBar/StepProgressBar'

const ShipmentStatus = () => {
    return (
        <div className='ship-status'>
            <div className='info'>
                <ul>
                    <li>رقم الشحنة 6636234</li>
                    <li>تم تسليم الأوردر</li>
                </ul>
                <ul>
                    <li>أخر تحديث</li>
                    <li>Tuesday - 10/07/2018 at 10:46pm</li>
                </ul>
                <ul>
                    <li>اسم التاجر</li>
                    <li>SOUQ.COM</li>
                </ul>
                <ul>
                    <li>موعد التسليم خلال</li>
                    <li>3 يناير 2020</li>
                </ul>
            </div>
            <ProgressBar currentStep={67} color={'#34B620'}/>
        </div>
    )
}

export default ShipmentStatus
