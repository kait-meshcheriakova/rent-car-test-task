import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Favorite from '../pages/Favorite';
import { Container, Header, Logo, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Rental Car
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorite</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorite />} />?
      </Routes>
    </Container>
  );
};
