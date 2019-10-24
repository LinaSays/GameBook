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
import Signin from 'src/containers/Signin';
import Forgotten from 'src/containers/Forgotten';
import Signup from 'src/containers/Signup';
import Categories from 'src/components/Categories';
import CreateStory from 'src/containers/CreateStory';
import Profile from 'src/components/Profile';
import Team from 'src/components/Team';

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
            <Home isConnected={isConnected} />
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
            <Profile />
          </Route>
          <Route exact path="/categories">
            <Home isConnected={isConnected} />
          </Route>
          <Route path="/categories/:id">
            <Categories />
          </Route>
          <Route path="/createstory">
            <CreateStory />
          </Route>
          <Route path="/about">
            <div>A propos</div>
          </Route>
          <Route path="/team">
            <Team />
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
