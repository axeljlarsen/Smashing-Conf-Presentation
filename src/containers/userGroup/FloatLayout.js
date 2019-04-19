import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import { AppRoutes } from '../../Constants';

export default class FloatLayout extends GenericComponent {
  render() {
    return (
      <div className="floatlayout">
        <section>
          <div className="site">
            <div className="header">
              <ul className="nav">
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
            </div>
            <div className="main">
              <ul className="sidenav">
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
                <li>
                  <a href="#">link</a>
                </li>
              </ul>
              <div className="content">MAIN CONTENT</div>
            </div>
            <div className="footer">
              footer
            </div>
          </div>
        </section>
        {this.props.children}
      </div>
    );
  }
}