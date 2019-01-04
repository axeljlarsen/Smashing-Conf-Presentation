import React, { Component } from "react";
import './Card.scss';
import { CardType } from "./Constants";
import bgsm from '../../assets/img/square-image.jpg';
import bglg from '../../assets/img/large-image.jpg';

export default class Card extends Component {
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
    return (
      <div className={`card card--${this.props.type}`}>
        <h2 className="card__title">{this.props.title}</h2>
        {this.props.image}
        <p className="card__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sollicitudin tellus. Nullam ultrices tellus dapibus urna elementum efficitur. Sed at mi eget lacus rutrum porttitor. Duis fringilla, risus non pellentesque tincidunt, ante orci maximus orci, ac tristique elit libero non ex. Phasellus in risus lacus. Sed lacus magna, accumsan vel ullamcorper quis, porta a nisi. Phasellus fringilla neque id dui porta, in imperdiet libero lacinia. Vestibulum scelerisque metus nisi, sit amet laoreet nisl feugiat eget.</p>

        <button className="card__button">
          <span>Call To Action</span>
        </button>
      </div>
    );
  }
}