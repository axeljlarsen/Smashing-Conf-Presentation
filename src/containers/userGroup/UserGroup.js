import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../Constants';
import GenericComponent from '../../components/GenericComponent.js';

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
          <h1>Remember <Link to={AppRoutes.TableLayout}>&lt;Table&gt;</Link> Layouts?</h1>
        </section>
        <section>
          <h1>And <Link to={AppRoutes.FlashLayout}>Flash?</Link></h1>
        </section>
        <section>
          <h1>Then we had <Link to={AppRoutes.FloatLayout}>floats</Link></h1>
        </section>
        <section>
          <h1>Followed by responsive <Link to={AppRoutes.FloatLayoutResponsive}>floats</Link></h1>
        </section>
        {/* <section>
          <h1>Then <Link to={AppRoutes.FlexBox}>flexbox</Link></h1>
        </section> */}
        <section>
          <h1>Finally <Link to={AppRoutes.CSSGrid_UG1}>CSS Grid</Link></h1>
        </section>
        {this.props.children}
      </div>
    );
  }
}