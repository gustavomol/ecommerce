import CarWidget from "../CartWidget/CartWidget"
import Button from '@mui/material/Button';

const NavBar = () => {
    return(
        <nav>
            <h2>Instrumentos Musicales</h2>
            <div>
                <Button size = "large" variant="outlined" >Guitarras</Button>
                <Button size = "large" variant="outlined" >Bajos</Button>
                <Button size = "large" variant="outlined" >Accesorios</Button>
                <Button size = "large" variant="outlined" >Contacto</Button>
                <CarWidget />
            </div>
        </nav>
    )
}

export default NavBar