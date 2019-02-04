import React, { Component } from "react";
import {Card} from '../../components/cards/Card.js';
import bgsm from '../../assets/img/square-image.jpg';
import bglg from '../../assets/img/large-image.jpg';
import { CardType, AppRoutes, Titles} from '../../Constants';
import SubNavFluidType from "./SubNavFluidType.js";
import GenericComponent from "../../components/GenericComponent.js";

export default class FluidTypeCards extends GenericComponent   {
  
  render() {

    const imgsrc = bgsm;
    const staticPic = <img className="card__pic" src={imgsrc} />;
    const gridContClass = `row ${ this.props.fluidGrid ? '' : 'static-type'}`;
    const cardType =  this.props.fluidType && !this.props.fluidGrid ? CardType.normalFluid : CardType.normal;

    const cards = (<div className={gridContClass}>
      <Card type={cardType} image={staticPic} title={Titles.W.text} />
      <Card type={cardType} image={staticPic} title={Titles.UG.text} />
      <Card type={cardType} image={staticPic} title={Titles.C.text} />         
      <Card type={cardType} image={staticPic} title={Titles.ADA.text} />
      <Card type={cardType} image={staticPic} title={Titles.OM.text} />
      <Card type={cardType} image={staticPic} title={Titles.DM.text} /> 
      <Card type={cardType} image={staticPic} title={Titles.S.text} />
      <Card type={cardType} image={staticPic} title={Titles.BRD.text} />
      <Card type={cardType} image={staticPic} title={Titles.P.text} />                   
  </div>);

    return (
      <section className="sect-fluid-type-demo">
        <SubNavFluidType/>        
        {cards}       
      </section>
    );
  }
}