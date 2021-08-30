import React, { Component } from 'react'
import './SearchForm.scss'
import { FaSearch } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

class SearchForm extends Component {
    state = {
        tracking: '',
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            tracking: value,
            toTracking: false,
        })
    }

    handleSubmit = () => {
        const { tracking } = this.state
        const { history } = this.props
        if (tracking.length > 0) {
            this.setState({
                tracking: '',
            })
            history.push(`/tracking-shipment/${tracking}`)
        } else 
            alert('ادخل الرقم بشكل صحيح!')
    }

    render() {
        const { tracking } = this.state
        return (
            <div className='search-container'>
                <div className='search'>
                    <h2>تتبع شحنة أخرى</h2>
                    <div className='form'>
                        <input 
                            type='text' 
                            name='tracking'
                            value={tracking} 
                            onChange={this.handleChange} 
                            placeholder='تتبع أي...'
                        />
                        <button onSubmit={this.handleSubmit} onClick={this.handleSubmit} type='submit'><FaSearch className='icon' /></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchForm)
