import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import FluidType from './containers/fluidType/SectionFluidType';
import CSSGrid from './containers/grid/SectionCSSGrid';
import Example1CSSGrid from './containers/grid/Example1CSSGrid';
import FluidTypeCards from './containers/fluidType/FluidTypeCards';
import SectionCustomVariables from './containers/customVariables/SectionCustomVariables';
import { AppRoutes } from './Constants';



import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faThunderstorm, faCloudSunRain, faCloudRain, faWind, faSunCloud, faSquare, faCheck, faTrophyAlt, faUsers, faStopwatch, faBicycle, faStroopwafel as farFaStroopwafel } from '@fortawesome/pro-light-svg-icons';
import { faDumbbell, faIgloo } from '@fortawesome/pro-solid-svg-icons';


import './styles/App.scss';
import UserGroup from './containers/userGroup/UserGroup';
import TableLayout from './containers/userGroup/TableLayout';
import FlashLayout from './containers/userGroup/FlashLayout';
import FloatLayout from './containers/userGroup/FloatLayout';
import FloatLayoutResponsive from './containers/userGroup/FloatLayoutResponsive';
import CSSGrid1 from './containers/userGroup/CSSGrid1';
import CSSGrid2 from './containers/userGroup/CSSGrid2';
import CSSGrid3 from './containers/userGroup/CSSGrid3';

library.add([faHeart, faShareAlt, faThunderstorm, faCloudSunRain, faWind, faCloudRain, faSunCloud, faSquare, faCheck, faTrophyAlt, faUsers, faDumbbell, faIgloo, faStopwatch, faBicycle]);

class App extends Component {
  render() {
    const childProps = {
      isAuthenticated: true,
      userHasAuthenticated: true
    };

    const StaticCards = <FluidTypeCards fluidGrid={false} fluidType={false} />;
    const FluidCards = <FluidTypeCards fluidGrid={true} fluidType={true} />;
    const StaticGridFluidCards = <FluidTypeCards fluidGrid={false} fluidType={true} />;
    const header = <header>
      <Link to={AppRoutes.Home}>Home</Link>
      <Link to={AppRoutes.CSSGrid}>CSS Grid</Link>
      <Link to={AppRoutes.FluidType}>Fluid Typography</Link>
      <Link to={AppRoutes.CustomVariables}>Custom Variables</Link>
    </header>;
    return (
      <div className="App mod-scale-fluid">

        <BrowserRouter>
          <Switch>
            <Route path={AppRoutes.CSSGrid_UG1} exact component={CSSGrid1} />
            <Route path={AppRoutes.CSSGrid_UG2} exact component={CSSGrid2} />
            <Route path={AppRoutes.Home} exact component={CSSGrid1} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
