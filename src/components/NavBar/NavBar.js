import CarWidget from "../CartWidget/CartWidget"
import Button from '@mui/material/Button';

const NavBar = () => {
    return(
        <nav>
            <h2>Instrumentos Musicales</h2>
            <div>
                <Button variant="outlined" >Guitarras</Button>
                <Button variant="outlined" >Bajos</Button>
                <Button variant="outlined" >Accesorios</Button>
                <Button variant="outlined" >Contacto</Button>
                <CarWidget />
            </div>
        </nav>
    )
}

export default NavBar