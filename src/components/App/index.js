// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';
import Navigation from 'src/components/Navigation';
import Footer from 'src/components/Footer';
import PageNotFound from 'src/components/PageNotFound';
import Home from 'src/components/Home';
import Contact from 'src/components/Contact';
import Signin from 'src/components/Signin';
import Forgotten from 'src/components/Signin/Forgotten';
import Signup from 'src/components/Signup';
import Categories from 'src/components/Categories';

// == Composant
class App extends React.Component {
  state = {
    isConnected: false,
  }

  render() {
    const { isConnected } = this.state;
    return (
      <div id="app">
        <Navigation isConnected={isConnected} />
        <Switch>
          <Route exact path="/">
            { /* <Home /> */ }
            <Categories />
          </Route>
          <Route path="/concept">
            <div>Voici notre concept</div>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/forgotten">
            <Forgotten />
          </Route>
          <Route path="/profile">
            <div>Ma page</div>
          </Route>
          <Route path="/categories">
            <div>Les catégories</div>
          </Route>
          <Route path="/about">
            <div>A propos</div>
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

// == Export
export default App;
