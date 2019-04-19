import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenericComponent from '../../components/GenericComponent.js';
import { AppRoutes } from '../../Constants';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount.js';

export default class CSSGrid1 extends GenericComponent {
  render() {
    return (
      <div className='cssgrid'>
        <section>
          <h1>Getting Started With CSS Grid</h1>
          <p>Presented by Axel Larsen on <time datetime="2019-04-17">April 17<sup>th</sup>, 2019</time></p>
          <p>
          Axel is a consultant for <a href="https://www.skylinetechnologies.com/">Skyline Technologies</a> and certified Kentico Developer specializing in front-end web development. After being introduced to CSS Grid last year, he’s spent some time learning and experimenting with its capabilities and introducing them to his fellow consultants at Skyline. Now that all ever-green browsers have fully supported CSS Grid for over a year, it’s a great time to learn and start using this highly anticipated feature of CSS.
          </p>
        </section>
        <section>
          <details>
            <summary><h2>What is it?</h2></summary>
            <p>Part of the CSS Standard to lay out content in two dimensions (X,Y).</p>
          </details>
        </section>
        <section>
          <details>
            <summary><h2>Why should we care?</h2></summary>
            <p>Before CSS Grid there was no way to define how to <strong>lay out content purely with CSS</strong> without affecting the structure of the document (HTML).</p>
          </details>
        </section>
        <section>
          <details>
            <summary><h2>What&apos;s it do?</h2></summary>
            <ul>
              <li>Size layout items</li>
              <li>Position items</li>
              <li>Align items</li>
              <li>Justify items</li>
              <li>(Re)order items</li>
              <li>Layer items</li>
              <li>Adjust layouts using media queries and CSS functions</li>
            </ul>
          </details>
        </section>
        <section>
          <details>
            <summary><h2>What makes a grid?</h2></summary>
            <ul>
              <li>Two dimensions (X,Y)</li>
              <li>Lines</li>
              <li>Tracks</li>
              <li>Cells</li>
              <li>Areas</li>
            </ul>
          </details>
        </section>
        <section>
          <h2><Link to={AppRoutes.CSSGrid_UG2}>How&apos;s it Work?</Link></h2>
        </section>
        {this.props.children}
      </div>
    );
  }
}