/* eslint-disable react/prefer-stateless-function */
// == Import : npm
import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import PacmanLoader from 'react-spinners/PacmanLoader';

// == Import : local
import './app.scss';
import Footer from 'src/containers/Footer';
import PageNotFound from 'src/components/PageNotFound';
import Home from 'src/containers/Home';
import Contact from 'src/components/Contact';
import Terms from 'src/components/Terms';
import Mentions from 'src/components/Mentions';
import Signin from 'src/containers/Signin';
import Forgotten from 'src/containers/Forgotten';
import Signup from 'src/containers/Signup';
import Categories from 'src/containers/Categories';
import CreateStory from 'src/containers/CreateStory';
import Profile from 'src/containers/Profile';
import Team from 'src/components/Team';
import StartStory from 'src/containers/StartStory';
import NavNew from 'src/containers/NavNew';
import ScrollToTop from 'src/components/ScrollToTop';

toast.configure();

// == Composant

class App extends React.Component {
  componentDidMount() {
    const { getHome, getCategory } = this.props;
    getHome();
    getCategory();
    this.changeTitle();
    const { history } = this.props;
    history.listen(this.changeTitle);
  }

  changeTitle = () => {
    switch (window.location.pathname) {
      case '/':
        document.title = 'Accueil - Bienvenue sur GameBook';
        break;
      case '/contact':
        document.title = 'Nous contacter';
        break;
      case '/signup':
        document.title = 'S\'inscrire - Bienvenue sur GameBook';
        break;
      case '/signin':
        document.title = 'Se connecter - Bienvenue sur GameBook';
        break;
      case '/categories':
        document.title = 'Catégories de GameBook';
        break;
      case '/createstory':
        document.title = 'Création d\'une histoire';
        break;
      case '/profile':
        document.title = 'Mon profile';
        break;
      default:
        document.title = 'GameBook';
    }
  }

  render() {
    const { isConnected, category, loading } = this.props;
    const override = `
      display: block;
      margin: 5rem auto;
      border-color: red;
    `;
    return (
      <div id="app">
        <ToastContainer autoClose={5000} />
        <ScrollToTop />
        <NavNew isConnected={isConnected} />
        <Switch>
          <Route exact path="/">
            {loading ? <PacmanLoader css={override} size={50} color={'#BD10E0'} loading={loading} /> : <Home isConnected={isConnected} />}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/mentions">
            <Mentions />
          </Route>
          <Route path="/signup">
            {isConnected ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path="/signin">
            {isConnected ? <Redirect to="/" /> : <Signin />}
          </Route>
          <Route path="/forgotten">
            <Forgotten />
          </Route>
          <Route path="/signout">
            <Redirect to="/" />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/categories">
            <Home isConnected={isConnected} />
          </Route>
          {category.map((item) => (
            <Route exact path={`/categories/${item.id}`} key={item.name} render={() => <Categories />} />
          ))}
          <Route path="/createstory">
            <CreateStory />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/story/:id">
            <StartStory isConnected={isConnected} />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer isConnected={isConnected} />
      </div>
    );
  }
}

App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  getHome: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default withRouter(App);
