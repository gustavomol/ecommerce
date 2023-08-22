import CarWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h2>Instrumentos Musicales</h2>
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