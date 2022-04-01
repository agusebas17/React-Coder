
import React from 'react'
import Button from '@mui/material/Button';
import Logo from '../../img/river.jpg'
import "./navBar.css"
import CartWidget from '../cartWidget/cartWidget'


function NavBar() {
    return (
        <header className='main-header'>
            <div className="container-logo">
                <img src={Logo} alt="logo" className="logoImg"></img>
            </div>
            <ul className='navbar'>
                <li><Button>Home</Button></li>
                <li><Button>Nosotros</Button></li>
                <li><Button>Productos</Button></li>
                <li><Button>Contacto</Button></li>
            </ul>
            <Button><CartWidget /></Button>
        </header>
    )
}

export default NavBar;