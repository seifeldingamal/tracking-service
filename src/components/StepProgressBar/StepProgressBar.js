import React from 'react'
import 'react-step-progress-bar/styles.css'
import './StepProgressBar.scss'
import { ProgressBar, Step } from 'react-step-progress-bar';
import { FaTicketAlt, FaFileSignature, FaArchive, FaTruck } from 'react-icons/fa';

const StepProgressBar = ({currentStep, color}) => {
    return (
        <div className='step-progress'>
            <div className='progress'>
                <ProgressBar
                    height={10}
                    percent={currentStep}
                    filledBackground='#34B620'
                    unfilledBackground='#e9e9e9'
                >
                    <Step 
                        transition="scale"
                    >
                    {({ accomplished }) => (
                        <span className='circle' style={accomplished ? { backgroundColor: color } : {}}>
                            <FaTicketAlt 
                                className={accomplished ? 'icon' : 'icon grayscale'}
                            />
                        </span>
                    )}
                    </Step>
                    <Step 
                        transition="scale"
                    >
                    {({ accomplished }) => (
                        <span className='circle' style={accomplished ? { backgroundColor: color } : {}}>
                            <FaArchive 
                                className={accomplished ? 'icon' : 'icon grayscale'}
                            />
                        </span>
                    )}
                    </Step>
                    <Step 
                        transition="scale"
                    >
                    {({ accomplished }) => (
                        <span className='circle' style={accomplished ? { backgroundColor: color } : {}}>
                            <FaTruck 
                                className={accomplished ? 'icon' : 'icon grayscale'}
                            />
                        </span>
                    )}
                    </Step>
                    <Step 
                        transition="scale"
                    >
                    {({ accomplished }) => (
                        <span className='circle' style={accomplished ? { backgroundColor: color } : {}}>
                            <FaFileSignature 
                                className={accomplished ? 'icon' : 'icon grayscale'}
                            />
                        </span>
                    )}
                    </Step>
                </ProgressBar>              
            </div>
            <div className='titles'>
                <ul>
                    <li>تم إنشاء الشحنة</li>
                    <li>تم إستلام الشحنة من التاجر</li>
                    <li>الشحنة خرجت للتسليم</li>
                    <li>تم التسليم</li>
                </ul>
            </div>
        </div>
    )
}

export default StepProgressBar
