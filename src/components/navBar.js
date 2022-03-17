
import Button from '@mui/material/Button';


//JSX
function NavBar() {
    return (
        <header className="main-header">
            <div className='containerLogo'>
                <img
                    src="logo192.png"
                    className="img-header"
                />
                <p>TEMP</p>
            </div>
            <ul className='navbar'>
                <li><Button variant="outlined">Home</Button></li>
                <li><Button variant="outlined">Productos</Button></li>
                <li><Button variant="outlined">Acerca</Button></li>
                <li><Button variant="outlined">Contacto</Button></li>
                

            </ul>
        </header>

)
}
export default NavBar