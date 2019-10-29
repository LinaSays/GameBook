// == Import : npm
import React from 'react';
import classNames from 'classnames';

// == Import : local
import './burger.scss';

// == Composant
const Burger = ({ isOpen, SeeMenu }) => {
  const openOrNot = classNames('nav-icon1', { 'open': isOpen });
  const whiteOrNot = classNames('is-close', { 'is-open': isOpen });
  return (
    <div className={openOrNot} onClick={SeeMenu}>
      <span className={whiteOrNot} />
      <span className={whiteOrNot} />
      <span className={whiteOrNot} />
    </div>

  );
};

// == Export
export default Burger;
