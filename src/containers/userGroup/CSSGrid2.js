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
            <div>
            </div>
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
          <div className="grid grid2">
            <div>
            </div>
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
  grid-template-columns: 10rem 10rem 10rem 10rem;
  `}<span className="highlight">min-height: 60vh;</span>){`
}`}</pre>
          </code>
          <div className="grid grid3">
            <div>
            </div>
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
  grid-template-columns: 10rem 10rem 10rem 10rem;
  `}<span className="highlight">align-items: end;</span>{`
  min-height: 60vh;
}`}</pre>
          </code>
          <aside>
            <p>CSS properties beginning with <strong>align-</strong> affect the <strong>block</strong> dimension (in English the block dimension is the vertical axis)</p>
            <p>CSS properties ending in <strong>-items</strong> and <strong>-self</strong> affect the specified <strong>element(s)</strong>.</p>            
          </aside>
          <div className="grid grid4">
            <div>
            </div>
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
  grid-template-columns: 10rem 10rem 10rem 10rem;
  `}<span className="highlight">justify-content: end;</span>{`
  min-height: 60vh;
}`}</pre>
          </code>
          <aside>
            
        <p>CSS properties beginning with <strong>justify-</strong> affect the <strong>inline</strong> dimension (in English the inline direction is the horiztonal axis)</p>
            <p>CSS properties ending in <strong>-content</strong> affect the <strong>space</strong> between elements.</p>          
          </aside>
          <div className="grid grid5">
            <div>
            </div>
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
  grid-template-columns: 10rem 10rem 10rem 10rem;
  `}<span className="highlight">justify-content: end;</span>{`
  `}<span className="highlight">align-items: end;</span>{`
  min-height: 60vh;
}`}</pre>
          </code>
          <div className="grid grid6">
            <div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
       
        {this.props.children}
      </div>
    );
  }
}