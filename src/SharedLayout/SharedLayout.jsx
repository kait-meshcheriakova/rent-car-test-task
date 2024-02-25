import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Logo, Header, Link } from './SharedLayout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Rentalcars.com
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/favorites">Favorite</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
export default Layout;
