import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import FluidType from './containers/fluidType/SectionFluidType';
import CSSGrid from './containers/grid/SectionCSSGrid';
import Example1CSSGrid from './containers/grid/Example1CSSGrid';
import FluidTypeCards from './containers/fluidType/FluidTypeCards';
import SectionCustomVariables from './containers/customVariables/SectionCustomVariables';
import {AppRoutes} from './Constants';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faIgloo, } from '@fortawesome/pro-solid-svg-icons'
import './styles/App.scss';

library.add([faDumbbell,faIgloo]);

class App extends Component {
  render() {
    const childProps = {
      isAuthenticated: true,
      userHasAuthenticated: true
    };

    const StaticCards = <FluidTypeCards fluidGrid={false} fluidType={false}/>;
    const FluidCards = <FluidTypeCards fluidGrid={true} fluidType={true}/>;
    const StaticGridFluidCards = <FluidTypeCards fluidGrid={false} fluidType={true}/>;

    return (
      <div className="App mod-scale-fluid">
        <header>
          <a href={AppRoutes.Home}>Home</a>
          <a href={AppRoutes.CSSGrid}>CSS Grid</a>
          <a href={AppRoutes.FluidType}>Fluid Typography</a>
          <a href={AppRoutes.CustomVariables}>Custom Variables</a>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path={AppRoutes.CustomVariables} exact component={SectionCustomVariables} />
            <Route path={AppRoutes.FluidType} exact component={FluidType} />
            <Route path={AppRoutes.FluidTypeStaticCards} exact component={() => StaticCards}  />
            <Route path={AppRoutes.FluidTypeFluidCards} exact component={() => FluidCards} />
            <Route path={AppRoutes.StaticGridFluidCards} exact component={() => StaticGridFluidCards} />            
            <Route path={AppRoutes.CSSGrid} exact component={CSSGrid} />
            <Route path={AppRoutes.CSSGridExample1} exact component={Example1CSSGrid} />
            <Route path={AppRoutes.Home} exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
