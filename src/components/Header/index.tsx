import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const menuItems = [
  {
    title: 'Tecnologia',
    to: '/tecnologia',
  },
  {
    title: 'Marketing',
    to: '/marketing',
  },
  {
    title: 'Desporto',
    to: '/desporto',
  },
  {
    title: 'Segurança',
    to: '/segurança',
  },
];

function Header() {
  return (
    <header className='header'>
      {menuItems.map(({ to, title }) => (
        <NavLink className='menu-item' key={to} to={to}>
          {title}
        </NavLink>
      ))}
    </header>
  );
}

export default Header;
