import React from 'react'
import 'react-step-progress-bar/styles.css'
import './StepProgressBar.scss'
import { ProgressBar, Step } from 'react-step-progress-bar';
import { FaTicketAlt, FaFileSignature, FaArchive, FaTruck } from 'react-icons/fa';

const StepProgressBar = ({ currentStep, color, reason }) => {
    return (
        <div className='step-progress'>
            <div className='progress'>
                <ProgressBar
                    height={10}
                    percent={currentStep}
                    filledBackground={color}
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
                    <li>???? ?????????? ????????????</li>
                    <li>???? ???????????? ???????????? ???? ????????????</li>
                    <li>???????????? ???????? ??????????????<br/>{ reason ? <p style={{color: color}}>{reason}</p> : ''}</li>
                    <li>???? ??????????????</li>
                </ul>
            </div>
        </div>
    )
}

export default StepProgressBar
