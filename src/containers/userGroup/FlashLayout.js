import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import {AppRoutes} from '../../Constants';

export default class FlashLayout extends GenericComponent {
  render() {
    return (
      <div className='flashlayout'>
        <section>     
              <code>
                <pre>
                {`<object type="application/x-shockwave-flash" 
  data="your-flash-file.swf" 
  width="0" height="0">
  <param name="movie" value="your-flash-file.swf" />
  <param name="quality" value="high"/>
</object>`}</pre>
              </code>
        </section>
        {this.props.children}
      </div>
    );
  }
}