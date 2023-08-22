import CarWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Instrumentos Musicales</h3>
            <div>
                <button>Guitarras</button>
                <button>Bajos</button>
                <button>Accesorios</button>
                <CarWidget />
            </div>
        </nav>
    )
}

export default NavBar