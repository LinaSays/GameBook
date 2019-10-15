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

// == Composant
const App = () => (
  <div id="app">
    <Navigation />
    <Switch>
      <Route exact path="/">
        {/* <Home /> */}
        <Contact />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
