import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import FluidType from './containers/fluidType/SectionFluidType';
import CSSGrid from './containers/grid/SectionCSSGrid';
import Example1CSSGrid from './containers/grid/Example1CSSGrid';

import './styles/App.scss';

class App extends Component {
  render() {
    const childProps = {
      isAuthenticated: true,
      userHasAuthenticated: true
    };

    return (
      <div className="App mod-scale-fluid">
        <header>
          <a href="/">Home</a>
          <a href="/CSSGrid">CSS Grid</a>
          <a href="/FluidType">Fluid Typography</a>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path='/FluidType' exact component={FluidType} />
            <Route path='/CSSGrid' exact component={CSSGrid} />
            <Route path='/CSSGrid/Example1' exact component={Example1CSSGrid} />
            <Route path='/' exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
