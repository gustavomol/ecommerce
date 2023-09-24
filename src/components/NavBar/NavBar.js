import CarWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <nav className='navbar'>
            <Link to="#" className="logo"><img src='../img/mitienda.png' alt="logo" width="162"/></Link>
     
            <div>
                <ul className='menu'>
                    <li><Link className='menu-link' to='/inicio'>Inicio</Link></li>
                    <li><Link className='menu-link' to='/productos'>Productos</Link></li>
                    <li><Link className='menu-link' to='/productos/bebidas'>Bebidas</Link></li>
                    <li><Link className='menu-link' to='/productos/frutas'>Frutas</Link></li>
                    <li><Link className='menu-link' to='/productos/frutas'>Carnes</Link></li>
                    <li><Link className='menu-link' to='/nosotros'>Nosotros</Link></li>
                    <li><Link className='menu-link' to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
            
            <CarWidget />
        </nav>
    )
}

export default NavBar