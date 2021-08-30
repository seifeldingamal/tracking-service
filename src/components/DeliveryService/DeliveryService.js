import React, { Component } from 'react'
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails'
import ShipmentStatus from '../ShipmentStatus/ShipmentStatus'
import axios from 'axios'

export class DeliveryService extends Component {

    state = {
        currentStatus: '',
        promisedDate: '',
        tracking: '',
        transitEvents: [],
        color: '',
    }

    componentDidMount(){
        const { params } = this.props.match
        const { history } = this.props

        axios.get(`https://tracking.bosta.co/shipments/track/${params.id}`)
            .then(res => {
                const result = res.data
                const events = result.TransitEvents.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
                this.setState({
                    currentStatus: result.CurrentStatus,
                    promisedDate: result.PromisedDate,
                    tracking: result.TrackingNumber,
                    transitEvents: events,
                })
            }).catch( error => {
                history.push('/notfound')

            })
    }

    render() {
        const { currentStatus, promisedDate, tracking, transitEvents } = this.state
        return (
            <>
                <ShipmentStatus currentStatus={currentStatus} promisedDate={promisedDate} tracking={tracking}/>
                <ShipmentDetails transitEvents={transitEvents}/>
            </>
        )
    }
}

export default DeliveryService
