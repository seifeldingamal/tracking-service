import React, { Component } from 'react'
import ShipmentDetails from '../ShipmentDetails/ShipmentDetails'
import ShipmentStatus from '../ShipmentStatus/ShipmentStatus'
import axios from 'axios'

export class DeliveryService extends Component {

    state = {
        currentStatus: '',
        promisedDate: '',
        color: '',
        transitEvents: '',
    }

    componentDidMount(){

    }

    render() {
        return (
            <>
                <ShipmentStatus />
                <ShipmentDetails />
            </>
        )
    }
}

export default DeliveryService
