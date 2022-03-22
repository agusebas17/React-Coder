import React from 'react'
import Button from '@mui/material/Button';
import "./navBar.css"
import CartWidget from '../cartWidget/cartWidget'

function NavBar() {
    ///JSX
    return(
        <header className='main-header'>
            <div className="container-logo">
            <img src="inter.png" alt="logo"></img>
            </div>
            <ul className='navbar'>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="outlined">Nosotros</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="outlined">Contacto</Button></li>
            </ul>
            <Button><CartWidget/></Button>
        </header>
    )
}

export default NavBar;