import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import {AppRoutes} from '../../Constants';

export default class UserGroup extends GenericComponent {
  render() {
    return (
      <div className="usergroup">
        <section>
         <h1>We finally have a layout standard</h1>
         <p>One of the most surprising aspects of the history of CSS was the noticable absense of a way to lay out content in the same beautifully sophisticated ways the printed pages our content and its HTML were based. Up until recently there was no standard to CSS that specifically allowed us to replicate the complex layouts available in print, though many creative web developers found ways to push existing properties and elements to accomplish compelling layouts anyway.
          </p> 
          <aside>
            If you haven&apos;t already, read up on the <a href="https://css-tricks.com/look-back-history-css/" target="_blank">history of CSS </a>.
          </aside>
        </section>        
        <section>
          <h1>Remember <a href={AppRoutes.TableLayout}>&lt;Table&gt;</a> Layouts?</h1>
        </section>
        <section>
          <h1>And <a href={AppRoutes.FlashLayout}>Flash?</a></h1>
        </section>
        <section>
          <h1>Then we had <a href={AppRoutes.FloatLayout}>floats</a></h1>
        </section>
        <section>
          <h1>Followed by responsive <a href={AppRoutes.FloatLayoutResponsive}>floats</a></h1>
        </section>
        {/* <section>
          <h1>Then <a href={AppRoutes.FlexBox}>flexbox</a></h1>
        </section> */}
        <section>
          <h1>Finally <a href={AppRoutes.CSSGrid_UG1}>CSS Grid</a></h1>
        </section>
        {this.props.children}
      </div>
    );
  }
}