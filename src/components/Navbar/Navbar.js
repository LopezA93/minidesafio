import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const Navbar =  () => {
  return (
    <nav>
        <Nav.Item>
        <Link className="nav-item" to={'/'}>Tabla</Link></Nav.Item>
        <Nav.Item><Link className="nav-item" to={'/formulario'}>Formulario</Link></Nav.Item>

    </nav>
  );
}

export default Navbar;