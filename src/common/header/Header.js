import React from 'react'
import logo from './logo.svg'
import './Header.css'


class Header extends React.Component{
    render(){
        return(
            <div className='header-class'>
                <img src={logo}  alt="logo"/>
                </div>
        )

        
    }
}
export default Header