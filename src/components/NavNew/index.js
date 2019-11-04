// == Import : npm
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';
// import { toast } from 'react-toastify';

// == Import : local
import './navnew.scss';

class NavNew extends React.Component {
  state = {
    isOpen: false,

  }


 
  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.location.pathname !== prevProps.location.pathname
  //   ) {
  //     window.scrollTo(0, 0);
  //   }
  // }

 seeMenu = () => {
   this.setState({
     ...this.state,
     isOpen: !this.state.isOpen,
   });
 }

 render() {
   const { isOpen } = this.state;
   const { category, isConnected } = this.props;
   
   // == Remove cookies
   const removeCookie = () => {
     // toast.success('A très bientôt !');
     document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
     document.location.href = '/';
   };

   // All variables who generate a classname with classNames library
   const visibleOrnot = classNames('nav-hidden', { 'nav-visible': isOpen });
   const navContainer = 'container-fluid nav-container';
   const openOrNot = classNames('nav-icon1', { open: isOpen });
   const whiteOrNot = classNames('is-close', { 'is-open': isOpen });
   const fixOrNot = classNames(navContainer, { 'container-fluid nav-container-fixed': isOpen || isConnected });
   const colorLogo = classNames('nav-logo text-white mob', { 'text-dark': isOpen });
   const bgNav = classNames('', { 'nav-connect': isConnected });

   return (
      <div className={`${fixOrNot} ${bgNav}`}>
        {
            isConnected ? (
              <nav className="nav-div  container">
                <div className="nav-group">
                  <NavLink to="/" className="nav-logo" onClick={this.seeMenu}>GAMEBook</NavLink>
                  <NavLink to="/profile" className="nav-group-link-cat">Mon compte</NavLink>
                  <span className="nav-group-link-cat__category">Catégories
                    <div className="nav-drop-desk-open">
                      {
                        category.map((item) => (
                          <NavLink
                            key={item.id}
                            to={`/categories/${item.id}`}
                            exact
                            className="nav-drop-link"
                          >{item.name}
                          </NavLink>
                        ))
                      }
                    </div><MdKeyboardArrowDown />
                  </span>
                  <NavLink to="/team" className="nav-group-link-cat">A propos</NavLink>
                  <NavLink to="/contact" className="nav-group-link-cat">Contact</NavLink>
                </div>
                <div className="button-group">
                  <NavLink to="/signin"><button type="button" className="button-group-link-cat" onClick={removeCookie}>Se déconnecter</button></NavLink>
                </div>
                <div className={openOrNot} onClick={this.seeMenu}>
                  <span className="is-open" />
                  <span className="is-open" />
                  <span className="is-open" />
                </div>
                <div className={visibleOrnot}>
                  <NavLink to="/" className="nav-group-link-bis" onClick={this.seeMenu}>Accueil</NavLink>
                  <NavLink to="/profile" className="nav-group-link-bis" onClick={this.seeMenu}>Mon compte</NavLink>
                  <NavLink to="/categories" className="nav-group-link-bis" onClick={this.seeMenu}>Catégories</NavLink>
                  <NavLink to="/contact" className="nav-group-link-bis" onClick={this.seeMenu}>Contact</NavLink>
                  <NavLink to="/" className="nav-group-link-category" onClick={this.removeCookie}>Se déconnecter</NavLink>
                </div>
              </nav>
            ) : (
              <nav className="nav-div container">
                <div className="nav-group">
                  <NavLink to="/" className={colorLogo}><span className={colorLogo}>GAMEBook</span></NavLink>
                  <NavLink to="/" className="nav-logo text-white desk"><span>GAMEBook</span></NavLink>
                  <NavLink to="/" className="nav-group-link">Accueil</NavLink>
                  <NavLink to="/team" className="nav-group-link">La team</NavLink>
                  <NavLink to="/contact" className="nav-group-link">Contact</NavLink>
                </div>
                <div className="button-group">
                  <NavLink to="/signup"><button type="button" className=" button-group-link mr-3">S'inscrire</button></NavLink>
                  <NavLink to="/signin"><button type="button" className="button-group-link">Se connecter</button></NavLink>
                </div>
                <div className={openOrNot} onClick={this.seeMenu}>
                  <span className={whiteOrNot} />
                  <span className={whiteOrNot} />
                  <span className={whiteOrNot} />
                </div>
                <div className={visibleOrnot}>
                  <NavLink to="/" className="nav-group-link-bis" onClick={this.seeMenu}>Accueil</NavLink>
                  <NavLink to="/team" className="nav-group-link-bis" onClick={this.seeMenu}>La team</NavLink>
                  <NavLink to="/contact" className="nav-group-link-bis" onClick={this.seeMenu}>Contact</NavLink>
                  <NavLink to="/signup" className="nav-group-link-bis" onClick={this.seeMenu}>S'inscrire</NavLink>
                  <NavLink to="/signin" className="nav-group-link-bis" onClick={this.seeMenu}>Se connecter</NavLink>
                </div>
              </nav>
            )
        }
      </div>
   );
 }
}

// == Validation props
NavNew.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  category: PropTypes.array.isRequired,
};

// == Export
export default NavNew;
