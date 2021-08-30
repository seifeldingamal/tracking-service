import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import './NotFound.scss'

const NotFound = () => {
    return (
        <div className='not-found'>
          <h1>عفوا رقم الشحنة غير صحيح!</h1>
          <SearchForm />
        </div>
    )
}

export default NotFound
