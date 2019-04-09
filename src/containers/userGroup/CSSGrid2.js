import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import { AppRoutes } from '../../Constants';

export default class CSSGrid2 extends GenericComponent {
  render() {
    return (
      <div className='cssgrid'>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 10rem);
}`}</pre>
          </code>
          <div className="grid grid1">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, `}<span className="highlight">minmax(10rem, 1fr)</span>){`
}`}</pre>
          </code>
          <aside>
            <p>The <strong>fr</strong> unit stands for fraction.</p>
            <p>Tracks defined with an fr unit will proportionally take up the remaining space of the grid.</p>
          </aside>
          <div className="grid grid2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: `}<span className="highlight">minmax(10rem, 1fr) minmax(10rem, 2fr)</span>{`
}`}</pre>
          </code>
          <aside>
            <p>Notice that the second column in this grid is approximately twice the width of the first. However if you resize the window to be smaller you'll see that the size of the columns match.</p>
          </aside>
          <div className="grid grid8">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 10rem);
  `}<span className="highlight">min-height: 60vh;</span>){`
}`}</pre>
          </code>
          <div className="grid grid3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 10rem);
  `}<span className="highlight">align-items: end;</span>{`
  min-height: 60vh;
}`}</pre>
          </code>
          <aside>
            <p>CSS properties beginning with <strong>align-</strong> affect the <strong>block</strong> dimension (in English the block dimension is the vertical axis)</p>
            <p>CSS properties ending in <strong>-items</strong> and <strong>-self</strong> affect the specified <strong>element(s)</strong>.</p>
          </aside>
          <div className="grid grid4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 10rem);
  `}<span className="highlight">justify-content: end;</span>{`
  min-height: 60vh;
}`}</pre>
          </code>
          <aside>
            <p>CSS properties beginning with <strong>justify-</strong> affect the <strong>inline</strong> dimension (in English the inline direction is the horiztonal axis)</p>
            <p>CSS properties ending in <strong>-content</strong> affect the <strong>space</strong> between the tracks.</p>
          </aside>
          <div className="grid grid5">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 10rem);
  `}<span className="highlight">justify-content: end;</span>{`
  `}<span className="highlight">align-items: end;</span>{`
  min-height: 60vh;
}`}</pre>
          </code>
          <div className="grid grid6">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
}
.grid > div {
  display: grid;  
  `}<span className="highlight">place-content: center;</span>{`
}
.grid > div:nth-child(2) {
  `}<span className="highlight">grid-area: 1/1/1/4;</span>{`
}
.grid > div:nth-child(4) {
  grid-area: 2/3/4/4;
}`}</pre>
          </code>
          <aside>
            <p>Element's with display:grid can be nested.</p>
            <p>The place-content property value applies to justify-content and align-content simultaneously.</p>
            <p>Individual element's within a grid container can be repositioned and sized in multiple ways. One way is to use the grid-area property which acts a shorthand for row-start, column-start, row-end, and column-end.</p>
          </aside>
          <div className="grid grid7">
            <div><span>A</span></div>
            <div><span>B</span></div>
            <div><span>C</span></div>
            <div><span>D</span></div>
            <div><span>E</span></div>
            <div><span>F</span></div>
          </div>
        </section>

        {this.props.children}
      </div>
    );
  }
}