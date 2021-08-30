import React from 'react'
import './ShipmentStatus.scss'
import ProgressBar from '../StepProgressBar/StepProgressBar'
import { currentStep, days, months, stateColor, statesArabic } from '../../ults'

const ShipmentStatus = ({ currentStatus, promisedDate, tracking }) => {

    const datePromised = new Date(promisedDate)
    const date = new Date(currentStatus.timestamp)
    
    return (
        <div className='ship-status'>
            <div className='info'>
                <ul>
                    <li>{`رقم الشحنة ${tracking}`}</li>
                    <li>{statesArabic[0][currentStatus.state]}</li>
                </ul>
                <ul>
                    <li>أخر تحديث</li>
                    <li>{`${days[date.getDay()]} ${months[date.getMonth()]} ${date.getFullYear()}`}</li>
                </ul>
                <ul>
                    <li>اسم التاجر</li>
                    <li>SOUQ.COM</li>
                </ul>
                <ul>
                    <li>موعد التسليم خلال</li>
                    <li>{!isNaN(datePromised.valueOf()) ? `${days[datePromised.getDay()]} ${months[datePromised.getMonth()]} ${datePromised.getFullYear()}` : 'لم يحدد بعد'}</li>
                </ul>
            </div>
            <ProgressBar currentStep={currentStep(currentStatus.state)} color={stateColor(currentStatus.state)} reason={currentStatus.reason}/>
        </div>
    )
}

export default ShipmentStatus
