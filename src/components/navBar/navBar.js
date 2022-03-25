
import React from 'react'
import Button from '@mui/material/Button';
import "./navBar.css"
import CartWidget from '../cartWidget/cartWidget'

function NavBar() {
    return (
        <header className='main-header'>
            <div className="container-logo">
                <img src='../../img/river.jpg' alt="logo" className='responsive' width="600" height="400"></img>
            </div>
            <ul className='navbar'>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
            <Button><CartWidget /></Button>
        </header>
    )
}

export default NavBar;