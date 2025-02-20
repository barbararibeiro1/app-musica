import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';

function Header() {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUserName(user.name);
      setLoading(false);
    }
    fetchUser();
  }, []);

  return (
    <header data-testid="header-component">
      <NavLink to="/search" data-testid="link-to-search">Search</NavLink>
      <NavLink to="/favorites" data-testid="link-to-favorites">Favorites</NavLink>
      <NavLink to="/profile" data-testid="link-to-profile">Profile</NavLink>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <p data-testid="header-user-name">{userName}</p>
      )}
    </header>
  );
}

export default Header;
