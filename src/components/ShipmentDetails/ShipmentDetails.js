import React from 'react'
import { stateColor, statesArabic } from '../../ults'
import './ShipmentDetails.scss'

const ShipmentDetails = ({ transitEvents }) => {
    const hub = transitEvents.filter( event => event.hub)
    const location = hub.length > 0 ? hub[0].hub : 'غير محدد'
    return (
        <div className='details-container'>
            <div className='details'>
                <h3>تفاصيل الشحنة</h3>
                <table>
                    <thead>
                        <tr>
                            <th>الفرع</th>
                            <th>التاريخ</th>
                            <th>الوقت</th>
                            <th>تفاصيل</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transitEvents.map((data, index) => 
                                <tr key={index}>
                                    <td>{location}</td>
                                    <td>{`${new Date(data.timestamp).getDay()}/${new Date(data.timestamp).getMonth()}/${new Date(data.timestamp).getFullYear()}`}</td>
                                    <td style={{direction: 'ltr'}}>{new Date(data.timestamp).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</td>
                                    <td>{statesArabic[0][data.state]}<br/>{ data.reason ? <p style={{color: stateColor(data.state), fontSize: '0.8rem'}}>{data.reason}</p> : ''}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div className='address'>
                <h3>عنوان التسليم</h3>
                <p>قد إبّان واشتدّت لبولندا، شيء, وقد عل يعبأ ألمّ السيطرة, عل وقد المتّبعة الإتفاقية. قام أم ومضى الأخذ الأولى, أسيا غريمه بأيدي لها ٣٠ أن.</p>
            </div>
        </div>
    )
}

export default ShipmentDetails
