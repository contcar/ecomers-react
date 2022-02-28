import './App.css';
import NavbarComponent from './components/generals/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart';
import {CartProvider} from './context/CartContextProvicer';

function App() {


  return (
    <div className="App">
    <BrowserRouter>
    <CartProvider>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/category/:categoryId' element={<Home/>}/>
        <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
