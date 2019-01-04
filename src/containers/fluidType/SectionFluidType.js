import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from './Card.js';
import bgsm from '../../assets/img/square-image.jpg';
import bglg from '../../assets/img/large-image.jpg';
import { CardType } from './Constants';

export default class SectionFluidType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {

    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  render() {

    const img = <img className="card__pic" src={bgsm} />;
    const fig = <figure className="card__pic"><img src={bgsm} /></figure>;
    const fluidFig = <figure className="card__pic card__pic--fluid"><img src={bgsm} /></figure>;

    return (
      <section className="sect-fluid-type-demo">
        <nav>
          <Link to="/FluidType/Example1">Example 1</Link>
        </nav>
        <div className="row">
          <div>
            <span className="badge">Static Adjustment Scale</span>
          </div>
          <div>
            <span className="badge">Modular / Fluid Scale</span>
          </div>
        </div>
        <div className="row">
          <div className="static-type">
            <h1>Title of Some Content</h1>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dapibus lectus, et blandit neque. Praesent eleifend velit sem, nec varius odio efficitur tincidunt. Sed mauris nisi, rhoncus et mi porttitor, ultricies convallis odio. Maecenas sit amet convallis arcu, ac laoreet tellus. Sed laoreet lectus purus, at congue tortor aliquet a. Ut et dolor sollicitudin libero faucibus vulputate vel et magna. Fusce tempus ex tortor, vestibulum facilisis diam aliquet id. Quisque posuere neque eget velit rhoncus, ac fringilla sem venenatis. Pellentesque sit amet aliquam ligula, quis pellentesque nunc.</p>
          </div>
          <div className="mod-scale-fluid">
            <h1>Title of Some Content</h1>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dapibus lectus, et blandit neque. Praesent eleifend velit sem, nec varius odio efficitur tincidunt. Sed mauris nisi, rhoncus et mi porttitor, ultricies convallis odio. Maecenas sit amet convallis arcu, ac laoreet tellus. Sed laoreet lectus purus, at congue tortor aliquet a. Ut et dolor sollicitudin libero faucibus vulputate vel et magna. Fusce tempus ex tortor, vestibulum facilisis diam aliquet id. Quisque posuere neque eget velit rhoncus, ac fringilla sem venenatis. Pellentesque sit amet aliquam ligula, quis pellentesque nunc.</p>
          </div>
        </div>

        
        <div className="row">
          <h1>"Normal" Cards</h1>
        </div>
        

        <div className="row">
          <div className="static-type">
            <Card type={CardType.normal} image={img} title="A card with static type and static pic" />
          </div>
          <div className="mod-scale-fluid">
            <Card type={CardType.normal} image={fig} title="A card with fluid type and fluid pic" />
          </div>
        </div>

        
        <div className="row">
          <h1>"Wide" Cards</h1>
        </div>

        {/* SINGLE COLUMN */}
        <div className="row">
          <div className="static-type">
            <Card type={CardType.wide} image={img} title="A card with static type and static pic" />
          </div>
        </div>
        <div className="row">
          <div className="static-type">
            <Card type={CardType.wide} image={fluidFig} title="A card with static type and fluid pic" />
          </div>
        </div>
        <div className="row">
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={fig} title="A card with fluid type and fluid pic" />
          </div>
        </div>

        {/* MULTI COLUMN */}
        <div className="row">
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={fig} title="A card with fluid type and fluid pic" />
          </div>
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={fig} title="A card with fluid type and fluid pic" />
          </div>
          <div className="mod-scale-fluid">
            <Card type={CardType.wide} image={fig} title="A card with fluid type and fluid pic" />
          </div>
        </div>
      </section>
    );
  }
}