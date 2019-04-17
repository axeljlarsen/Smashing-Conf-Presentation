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
      <a href={AppRoutes.Home}>Home</a>
      <a href={AppRoutes.CSSGrid}>CSS Grid</a>
      <a href={AppRoutes.FluidType}>Fluid Typography</a>
      <a href={AppRoutes.CustomVariables}>Custom Variables</a>
    </header>;
    return (
      <div className="App mod-scale-fluid">

        <BrowserRouter>
          <Switch>
            <Route path={AppRoutes.CustomVariables} exact component={SectionCustomVariables} />
            <Route path={AppRoutes.FluidType} exact component={FluidType} />
            <Route path={AppRoutes.FluidTypeStaticCards} exact component={() => StaticCards} />
            <Route path={AppRoutes.FluidTypeFluidCards} exact component={() => FluidCards} />
            <Route path={AppRoutes.StaticGridFluidCards} exact component={() => StaticGridFluidCards} />
            <Route path={AppRoutes.CSSGrid} exact component={CSSGrid} />
            <Route path={AppRoutes.CSSGridExample1} exact component={Example1CSSGrid} />
            <Route path={AppRoutes.Home} exact component={CSSGrid1} />
            <Route path={AppRoutes.UserGroup} exact component={UserGroup} />
            <Route path={AppRoutes.TableLayout} exact component={TableLayout} />
            <Route path={AppRoutes.FlashLayout} exact component={FlashLayout} />
            <Route path={AppRoutes.FloatLayout} exact component={FloatLayout} />
            <Route path={AppRoutes.FloatLayoutResponsive} exact component={FloatLayoutResponsive} />
            <Route path={AppRoutes.FlexBox} exact component={UserGroup} />
            <Route path={AppRoutes.CSSGrid_UG1} exact component={CSSGrid1} />
            <Route path={AppRoutes.CSSGrid_UG2} exact component={CSSGrid2} />
            <Route path={AppRoutes.CSSGrid_UG3} exact component={CSSGrid3} />
            <Route path={AppRoutes.CSSGrid_UG4} exact component={UserGroup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
