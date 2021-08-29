import React from 'react'
import './ShipmentDetails.scss'

const ShipmentDetails = () => {
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
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>3</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='address'>
                <h3>عنوان التسليم</h3>
                <p>وصّل منتجاتك أسرع وأوفر مع بوسطة لأي مكان في مصر بأقل سعر ومجهود وتابع تحركات الشحن والمندوب أول بأول من غير تأخير ولا تعب في الفواتير</p>
            </div>
        </div>
    )
}

export default ShipmentDetails
