import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import {AppRoutes} from '../../Constants';

export default class TableLayout extends GenericComponent {
  render() {
    return (
      <div className="tablelayout">
        <section>
          <table className="site">
            <tr className="nav">
              <td colSpan="2" align="right">
              <table>
                <tr><td><a href="#">link</a></td><td><a href="#">link</a></td><td><a href="#">link</a></td><td><a href="#">link</a></td><td><a href="#">link</a></td></tr>
              </table>
              </td>
            </tr>
            <tr>
              <td className="sidenav">
                <table>
                  <tr>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">link</a></td>
                  </tr>
                  <tr>
                    <td><a href="#">link</a></td>
                  </tr>
                </table>
              </td>
              <td colSpan="1" className="content">MAIN CONTENT</td>
            </tr>
            <tr>
              <td className="footer" colSpan="2">
                Footer
              </td>
            </tr>
          </table>
        </section>
        {this.props.children}
      </div>
    );
  }
}