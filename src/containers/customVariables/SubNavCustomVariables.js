import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardType, AppRoutes } from '../../Constants';
import GenericComponent from '../../components/GenericComponent.js';

export default class SubNavCustomVariables extends GenericComponent {
  
  render() {  
    return (
        <nav>
            <Link to={AppRoutes.FluidTypeStaticCards}>WHATUP</Link>
        </nav>
    );
  }
}