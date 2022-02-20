import './App.css';
import NavbarComponent from './components/generals/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {

  const mensaje = "Hola, soy una prop.";

  return (
    <div className="App">
    <BrowserRouter>
    <NavbarComponent></NavbarComponent>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/category/:categoryId' element={<Home/>}/>
      <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
      {/* <Route path='/cart'></Route> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
