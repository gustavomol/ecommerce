import CarWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <nav className='navbar'>
            <Link to="#" className='logo'><h2>Mi Tienda</h2></Link>
     
            <div>
                <ul className='menu'>
                    <li><Link className='menu-link' to='/'>Inicio</Link></li>
                    <li><Link className='menu-link' to='/'>Productos</Link></li>
                    <li><Link className='menu-link' to='/nosotros'>Nosotros</Link></li>
                    <li><Link className='menu-link' to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar