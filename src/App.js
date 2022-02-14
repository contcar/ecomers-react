import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/generals/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { Container, Row } from 'react-bootstrap';

function App() {

  const mensaje = "Hola, soy una prop.";

  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <Container>
        <Row  className='mt-5'>
          <ItemListContainer></ItemListContainer>
        </Row>
      </Container>
    </div>
  );
}

export default App;
