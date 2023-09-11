import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Nosotros from './components/Nosotros/Nosotros';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

      <BrowserRouter>
      
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'}/>} />
          <Route path="cart" element={<ItemCount initial={1} stock={5} onAdd={(qty) => console.log('Agregando: ', qty)} />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Routes>

      </BrowserRouter>

      // <ItemCount initial={1} stock={5} onAdd={(qty) => console.log('Agregando: ', qty)} />

  );
}

export default App;
