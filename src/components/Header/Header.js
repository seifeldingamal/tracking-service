import React, { Component } from 'react'
import './Header.scss'
import NavBar from "../NavBar/NavBar";
import SideBar from '../SideBar/SideBar';


class Header extends Component {
    state = {
        isOpen: false,
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {
        const { isOpen } = this.state
        return (
            <header>
                <NavBar isOpen={isOpen} setIsOpen={this.setIsOpen}/>
                <SideBar isOpen={isOpen} />
            </header>
        )
    }
}

export default Header;