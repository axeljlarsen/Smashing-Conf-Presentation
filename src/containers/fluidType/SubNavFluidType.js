import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardType, AppRoutes } from '../../Constants';
import GenericComponent from "../../components/GenericComponent.js";

export default class SubNavFluidType extends GenericComponent {
  
  render() {  
    return (
        <nav>
            <Link to={AppRoutes.FluidTypeStaticCards}>Static Type Cards</Link>
            <Link to={AppRoutes.FluidTypeFluidCards}>Fluid Type Cards</Link>
            <Link to={AppRoutes.StaticGridFluidCards}>Static Grid / Fluid Cards</Link>
        </nav>
    );
  }
}