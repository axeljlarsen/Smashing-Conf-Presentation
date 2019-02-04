import React, { Component } from "react";
import './Card.scss';
import GenericComponent from "../GenericComponent";

export default class BaseCard extends GenericComponent {
  render() {
    return (
      <div className={`card card--${this.props.type}`}>
        {this.props.image}
        {this.props.children}
      </div>
    );
  }
}

export class Card extends BaseCard {
  render() {
    return (
      <BaseCard type={this.props.type} title={this.props.title} image={this.props.image}>
        <h2 className="card__title">{this.props.title}</h2>
        <p className="card__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam at sollicitudin tellus. Nullam ultrices tellus dapibus urna elementum efficitur. 
          Sed at mi eget lacus rutrum porttitor. Duis fringilla, risus non pellentesque tincidunt, 
          ante orci maximus orci, ac tristique elit libero non ex. Phasellus in risus lacus. 
          Sed lacus magna, accumsan vel ullamcorper quis, porta a nisi. Phasellus fringilla neque id dui porta, 
          in imperdiet libero lacinia. Vestibulum scelerisque metus nisi, sit amet laoreet nisl feugiat eget.
        </p>
        <button className="card__button">
          <span>Call To Action</span>
        </button>
      </BaseCard>
    );

  }
}
