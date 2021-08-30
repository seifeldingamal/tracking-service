import React from 'react'
import './NoPage.scss'

const NoPage = () => {
    return (
        <div className='no-page'>
            <h1>لم يتم العثور على نتائج</h1>
            <p>لم يمكن العثور على الصفحة التي طلبتها. حاول صقل بحثك، أو استعمل شريط التصفح أعلاه للعثور على المقال.</p>
        </div>
    )
}

export default NoPage
