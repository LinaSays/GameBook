// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';
import Navigation from 'src/components/Navigation';
import Footer from 'src/components/Footer';
import PageNotFound from 'src/components/PageNotFound';
import Home from 'src/components/Home';
import Signin from 'src/components/Signin';

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
            <Home />
          </Route>
          <Route path="/concept">
            <div>Voici notre concept</div>
          </Route>
          <Route path="/contact">
            <div>Contactez-nous</div>
          </Route>
          <Route path="/signup">
            <div>S'inscrire</div>
          </Route>
          <Route path="/signin">
            <Signin />
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
        <Footer />
      </div>
    );
  }
}

// == Export
export default App;
