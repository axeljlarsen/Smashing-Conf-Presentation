import React, { Component } from "react";
import bglg from '../../assets/img/large-image.jpg';
import bgsm from '../../assets/img/square-image.jpg';
import { Card } from '../../components/cards/Card';
import { CardType, AppRoutes, CSSGridSteps } from '../../Constants';
import GenericComponent from "../../components/GenericComponent.js";
import SubNavCustomVariables from "./SubNavCustomVariables.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SectionCustomVariables extends GenericComponent {

  
  render() {

    const imgsrc = bgsm;
    const theme1Pic = <figure className="card__pic theme theme-1"><FontAwesomeIcon icon="dumbbell" size="7x" /></figure>;
    const theme2Pic = <figure className="card__pic theme theme-2"><FontAwesomeIcon icon="dumbbell" size="7x" /></figure>;
    const theme3Pic = <figure className="card__pic theme theme-3"><FontAwesomeIcon icon="dumbbell" size="7x" /></figure>;

    return (
      <section>
        <SubNavCustomVariables />
        <div className="row">
          <Card type={CardType.normal} title="Theme 1" image={theme1Pic} />
          <Card type={CardType.normal} title="Theme 2" image={theme2Pic} />
          <Card type={CardType.normal} title="Theme 3" image={theme3Pic} />
        </div>
      </section>
    );
  }
}