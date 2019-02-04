import React, { Component } from "react";
import {Card} from '../../components/cards/Card.js';
import bglg from '../../assets/img/large-image.jpg';
import bgsm from '../../assets/img/square-image.jpg';
import bgn from '../../assets/img/4by3-image.jpg';
import { CardType, FluidTypeSteps, FluidTypeStepLabels, AppRoutes } from '../../Constants';
import SubNavFluidType from "./SubNavFluidType.js";
import GenericComponent from "../../components/GenericComponent.js";
import DemoFilter from "../../components/DemoFilter";

export default class SectionFluidType extends GenericComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      steps: [FluidTypeSteps.One]
    };
  }

  onDemoFilterChange = (steps) => {
    this.setState({
      steps: steps
    });
  }

  getStepUtilClass = (step) => {
    if (this.state.steps.includes(step))
      return '';
    else
      return 'hide';
  }

  oldRender() {
    const imgsrc = bglg;
    const staticPic = <img className="card__pic" src={imgsrc} />;
    const coverPic = <img className="card__pic cover" src={imgsrc} />;
    const flexPic = <figure className="card__pic"><img src={imgsrc} /></figure>;
    const fluidFlexPic = <figure className="card__pic card__pic--fluid"><img src={imgsrc} /></figure>;
    const flexCoverPic = <figure className="card__pic"><img src={imgsrc} className="cover"/></figure>
    return (
      <section>
            
            <SubNavFluidType/>
      <div className="row">
        <div>
          <span className="badge">Static Adjustment Scale</span>
        </div>
        <div>
          <span className="badge">Modular / Fluid Scale</span>
        </div>
      </div>
        
        <div className="row">
          <h1>Stacked Cards</h1>
        </div>
        

        <div className="row">
          <div className="static-type">
            <Card type={CardType.normal} image={staticPic} title="A card with static type and static pic" />
          </div>
          <div className="mod-scale-fluid">
            <Card type={CardType.normal} image={flexPic} title="A card with fluid type and fluid pic" />
          </div>
        </div>

        
        <div className="row">
          <h1>Wide Cards</h1>
        </div>

        {/* SINGLE COLUMN */}
        <div className="row">
          <div className="static-type">
            <Card type={CardType.wide} image={staticPic} title="A card with static type and static pic" />
          </div>
        </div>
        <div className="row">
          <div className="static-type">
            <Card type={CardType.wide} image={fluidFlexPic} title="A card with static type and flex pic" />
          </div>
        </div>
        <div className="row">
          <div className="static-type">
            <Card type={CardType.wide} image={coverPic} title="A card with static type and cover pic" />
          </div>
        </div>
        <div className="row">
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={flexPic} title="A card with fluid type and flex pic" >
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={coverPic} title="A card with fluid type and cover pic" >
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="mod-scale-fluid font-75">
            <Card type={CardType.wide} image={coverPic} title="A card with .75 fluid type and cover pic" >
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={flexCoverPic} title="A card with fluid type and flex/cover pic" >
            </Card>
          </div>
        </div>

        {/* MULTI COLUMN */}
        <div className="row">
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={flexPic} title="A card with fluid type and flex pic in multi-column" />
          </div>
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={coverPic} title="A card with fluid type and cover pic in multi-column" />
          </div>
        </div>
      </section>
    )
  }

  render() {
    
    const imgsrc = bgn;
    const staticPic = <img src={imgsrc} style={{width:'100%'}} />;

    return (
      <section className="sect-fluid-type-demo">    
        <DemoFilter 
        availableItems={FluidTypeSteps} 
        selectedItems={this.state.steps} 
        onSelect={this.onDemoFilterChange} />
        
        <div className="row">
          <div className={`${FluidTypeSteps.One.cssClass} ${this.getStepUtilClass(FluidTypeSteps.One)}`}>
            <h1>Title of Some Content</h1>
            <h2>Subtitle</h2>
            {staticPic}
            <p>Static Text: dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dapibus lectus, et blandit neque. Praesent eleifend velit sem, nec varius odio efficitur tincidunt. Sed mauris nisi, rhoncus et mi porttitor, ultricies convallis odio. Maecenas sit amet convallis arcu, ac laoreet tellus. Sed laoreet lectus purus, at congue tortor aliquet a. Ut et dolor sollicitudin libero faucibus vulputate vel et magna. Fusce tempus ex tortor, vestibulum facilisis diam aliquet id. Quisque posuere neque eget velit rhoncus, ac fringilla sem venenatis. Pellentesque sit amet aliquam ligula, quis pellentesque nunc.</p>
            <p>Suspendisse rutrum iaculis leo non posuere. Phasellus bibendum varius justo id placerat. Nam aliquam posuere eros, vel pulvinar odio elementum nec. Sed ac arcu non elit consequat fermentum id vitae risus. Maecenas quam quam, pellentesque sit amet lorem id, lobortis efficitur erat. Phasellus quam erat, viverra ac mauris et, blandit tincidunt est. Curabitur a lectus sit amet lectus tincidunt aliquet nec et turpis. Curabitur pretium mauris in ipsum semper, at molestie magna suscipit. Nunc imperdiet nibh enim. In blandit metus diam, sed pellentesque purus malesuada eu. Maecenas volutpat, metus id dictum tristique, quam risus tristique nibh, ut consequat diam mi quis dolor. Aliquam vestibulum libero ut metus convallis, id feugiat mi semper.</p>
            <h2>Subtitle</h2>
            <p>Quisque aliquam, elit nec suscipit ultrices, nulla neque tristique neque, in faucibus eros metus id tellus. Nullam ultricies, justo quis fringilla luctus, arcu ligula luctus purus, accumsan vulputate quam augue ut erat. Nulla scelerisque hendrerit mauris non convallis. Mauris tempus tincidunt semper. Curabitur venenatis, elit ut ullamcorper dapibus, odio ante auctor dui, nec semper felis lorem eu dui. Fusce porta, nibh at sodales viverra, elit velit ullamcorper elit, et pharetra odio urna quis turpis. Aliquam pharetra tortor non elit ornare, id sollicitudin massa tincidunt. Proin volutpat pulvinar diam sit amet dapibus. Maecenas aliquam vitae velit eu cursus. Donec faucibus diam eu ligula hendrerit vestibulum. Pellentesque ut lacinia diam. Maecenas bibendum ultrices ipsum, non tincidunt tortor pellentesque nec. Vestibulum enim nulla, gravida ut tristique sit amet, euismod at lectus. Aenean luctus sapien elit, id sodales odio volutpat at. Nulla efficitur felis ac tempus mollis. Phasellus a consectetur elit.</p>
          </div>
          <div className={`${FluidTypeSteps.Two.cssClass} ${this.getStepUtilClass(FluidTypeSteps.Two)}`}>
            <h1>Title of Some Content</h1>
            <h2>Subtitle</h2>            
            {staticPic}
            <p>Fluid Text:  dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dapibus lectus, et blandit neque. Praesent eleifend velit sem, nec varius odio efficitur tincidunt. Sed mauris nisi, rhoncus et mi porttitor, ultricies convallis odio. Maecenas sit amet convallis arcu, ac laoreet tellus. Sed laoreet lectus purus, at congue tortor aliquet a. Ut et dolor sollicitudin libero faucibus vulputate vel et magna. Fusce tempus ex tortor, vestibulum facilisis diam aliquet id. Quisque posuere neque eget velit rhoncus, ac fringilla sem venenatis. Pellentesque sit amet aliquam ligula, quis pellentesque nunc.</p>
            <p>Suspendisse rutrum iaculis leo non posuere. Phasellus bibendum varius justo id placerat. Nam aliquam posuere eros, vel pulvinar odio elementum nec. Sed ac arcu non elit consequat fermentum id vitae risus. Maecenas quam quam, pellentesque sit amet lorem id, lobortis efficitur erat. Phasellus quam erat, viverra ac mauris et, blandit tincidunt est. Curabitur a lectus sit amet lectus tincidunt aliquet nec et turpis. Curabitur pretium mauris in ipsum semper, at molestie magna suscipit. Nunc imperdiet nibh enim. In blandit metus diam, sed pellentesque purus malesuada eu. Maecenas volutpat, metus id dictum tristique, quam risus tristique nibh, ut consequat diam mi quis dolor. Aliquam vestibulum libero ut metus convallis, id feugiat mi semper.</p>
            <h2>Subtitle</h2>
            <p>Quisque aliquam, elit nec suscipit ultrices, nulla neque tristique neque, in faucibus eros metus id tellus. Nullam ultricies, justo quis fringilla luctus, arcu ligula luctus purus, accumsan vulputate quam augue ut erat. Nulla scelerisque hendrerit mauris non convallis. Mauris tempus tincidunt semper. Curabitur venenatis, elit ut ullamcorper dapibus, odio ante auctor dui, nec semper felis lorem eu dui. Fusce porta, nibh at sodales viverra, elit velit ullamcorper elit, et pharetra odio urna quis turpis. Aliquam pharetra tortor non elit ornare, id sollicitudin massa tincidunt. Proin volutpat pulvinar diam sit amet dapibus. Maecenas aliquam vitae velit eu cursus. Donec faucibus diam eu ligula hendrerit vestibulum. Pellentesque ut lacinia diam. Maecenas bibendum ultrices ipsum, non tincidunt tortor pellentesque nec. Vestibulum enim nulla, gravida ut tristique sit amet, euismod at lectus. Aenean luctus sapien elit, id sodales odio volutpat at. Nulla efficitur felis ac tempus mollis. Phasellus a consectetur elit.</p>
          </div>
        </div>

        </section>
    );
  }
}