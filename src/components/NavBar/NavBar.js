import CarWidget from '../CartWidget/CartWidget'
import Button from '@mui/material/Button';
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className='navbar'>
            <a href="#" className='logo'><h2>Mi Tienda</h2></a>
     
            <div>
                <ul className='menu'>
                    <li><a className='menu-link' href='#Inicio'>Inicio</a></li>
                    <li><a className='menu-link' href='#Inicio'>Productos</a></li>
                    <li><a className='menu-link' href='#Inicio'>Nosotros</a></li>
                    <li><a className='menu-link' href='#Inicio'>Contacto</a></li>
                </ul>
            </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar