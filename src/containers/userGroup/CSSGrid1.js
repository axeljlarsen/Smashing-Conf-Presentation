import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import { AppRoutes } from '../../Constants';

export default class CSSGrid1 extends GenericComponent {
  render() {
    return (
      <div className='cssgrid'>
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
              <li>Size layout elements</li>
              <li>Position elements</li>
              <li>Align elements</li>
              <li>Justify elements</li>
              <li>(Re)order elements</li>
              <li>Layer elements</li>
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
          <h2><a href={AppRoutes.CSSGrid_UG2}>How&apos;s it Work?</a></h2>
        </section>
        {this.props.children}
      </div>
    );
  }
}