import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardType, AppRoutes } from '../../Constants';
import GenericComponent from '../../components/GenericComponent';

export default class GridSubNav extends GenericComponent {
  render() {
    return (
        <nav>
            <Link to={AppRoutes.CSSGridExample1}>Example 1</Link>
        </nav>
    );
  }
}