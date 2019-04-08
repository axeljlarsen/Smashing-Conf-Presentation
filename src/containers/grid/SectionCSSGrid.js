import React, { Component } from 'react';
import './Grids.scss';
import GridSubNav from './GridSubNav';
import GenericComponent from '../../components/GenericComponent';
import { Step, CSSGridSteps, CSSGridStepLabels } from '../../Constants';
import DemoFilter from '../../components/DemoFilter';
import { strict } from 'assert';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SectionCSSGrid extends GenericComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      steps: []
    };
  }

  onDemoFilterChange = (steps) => {
    this.setState({
      steps: steps
    });
  }

  getStepUtilClass = (step) => {
    if (this.state.steps.includes(step))
      return '';
    else
      return 'hide';
  }
  render() {
    const gridClass = `grid-0 ${this.state.steps.map((step) => {
      return step.cssClass;
    }).join(' ')}`;

    return (
      <section>
        <DemoFilter
          availableItems={CSSGridSteps}
          selectedItems={this.state.steps}
          onSelect={this.onDemoFilterChange} />
        <div className="row">
          <div className="col">
            <div className={gridClass}>
              <div>A
                  <pre>
                  <code className={this.getStepUtilClass(CSSGridSteps.One)}>                    
                    grid-template-columns: 600px 3fr 2fr;
                  <hr/>
                  </code>
                  <code className={this.getStepUtilClass(CSSGridSteps.Three)}> 
                    grid-auto-rows: 2fr 3fr; 
                  <hr/>
                  </code> 
                  <code className={this.getStepUtilClass(CSSGridSteps.Two)}>
                    grid-row-start: 1;<br />
                    grid-column-start: 1;<br />
                    grid-row-end: 3;<br />
                    grid-column-end: 3;
                  </code>                 
                </pre>
              </div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
              <div>E</div>
              <div>F
                <div className={this.getStepUtilClass(CSSGridSteps.Four)}>
                  <figure className="primary-box">
                  <pre>   
                    <code>
                      min-width: 100px;<br/>
                      min-height: 100px;
                    </code>
                  </pre>   
                  </figure>     
                </div>
              </div>
              <div>G</div>
              <div>H</div>
              <div>I</div>
              <div>J
                  <pre>
                  <code className={this.getStepUtilClass(CSSGridSteps.Two)}>
                    grid-row-start: 5;<br />
                    grid-column-start: 1;<br />
                    grid-row-end: 5;<br />
                    grid-column-end: 3;
                  </code>
                </pre>
              </div>
              <div>K</div>
              <div>L</div>
              <div>M</div>
              <div>N</div>
              <div>O</div>
              <div>P</div>
              <div>Q</div>
              <div>R
                <pre className={this.getStepUtilClass(CSSGridSteps.Two)}>
                  <code>
                    grid-row-start: 8;<br />
                    grid-column-start: 2;<br />
                    grid-row-end: 13;<br />
                    grid-column-end: 4;
                  </code>
                  <hr/>
                  <code>
                    display: flex;<br />
                    flex-direction: column;<br />
                    justify-content: center;
                </code>
                </pre>
              </div>
              <div>S</div>
              <div>T</div>
              <div>U</div>
              <div>V</div>
              <div>W</div>
              <div>X</div>
              <div>Y</div>
              <div>Z</div>
              
              <div>A&#39;</div>
              <div>B&#39;</div>
              <div>C&#39;</div>
              <div>D&#39;</div>
              <div>E&#39;</div>
              <div>F&#39;</div>
              <div>G&#39;</div>
              <div>H&#39;</div>
              <div>I&#39;</div>
              <div>J&#39;</div>
              <div>K&#39;</div>
              <div>L&#39;</div>
              <div>M&#39;</div>
              <div>N&#39;</div>
              <div>O&#39;</div>
              <div>P&#39;</div>
              <div>Q&#39;</div>
              <div>R&#39;</div>
              <div>S&#39;</div>
              <div>T&#39;</div>
              <div>U&#39;</div>
              <div>V&#39;</div>
              <div>W&#39;</div>
              <div>X&#39;</div>
              <div>Y&#39;</div>
              <div>Z&#39;</div>
              
              <div>A&quot;</div>
              <div>B&quot;</div>
              <div>C&quot;</div>
              <div>D&quot;</div>
              <div>E&quot;</div>
              <div>F&quot;</div>
              <div>G&quot;</div>
              <div>H&quot;</div>
              <div>I&quot;</div>
              <div>J&quot;</div>
              <div>K&quot;</div>
              <div>L&quot;</div>
              <div>M&quot;</div>
              <div>N&quot;</div>
              <div>O&quot;</div>
              <div>P&quot;</div>
              <div>Q&quot;</div>
              <div>R&quot;</div>
              <div>S&quot;</div>
              <div>T&quot;</div>
              <div>U&quot;</div>
              <div>V&quot;</div>
              <div>W&quot;</div>
              <div>X&quot;</div>
              <div>Y&quot;</div>
              <div>Z&quot;</div>
            </div>
          </div>
        </div>

      </section>
    );
  }

  oldRender() {
    return (
      <section>
        
        <GridSubNav />
        <div className="row">
          <div className="col">
            <p><span className="badge">CSS Grid</span> <a className="badge" href="https://gridbyexample.com/examples/" target="_blank" title="view more CSS Grid examples">More Examples</a></p>
            <p>
              The grid below has the following CSS:
            <pre>
                <code>
                  display: grid;<br />
                  grid-template-columns: 5fr 3fr 2fr;<br />
                  grid-gap: 1em;
              </code>
              </pre>
            </p>
            <p>The grid-template-columns property tells the browser to lay out the child elements of the grid element in three columns. The fr unit stands for &apos;fraction&apos; and tells the browser how to divide the remaining space within the grid. Since our fr values total to 10, column 1 will have 50% of the remaining space of the X axis of the grid and columns 2 and 3 will have 30% and 20% respectively. The reason we don&apos;t use the % unit is because of the grid-gap value of 1em. If you use % values totalling to 100%, then the contents of the grid will actually have a width greater than the grid container itself due to that grid-gap. Remember, the fr units you use don&apos;t have to total to 100; the total can be any number and the browser will assign space based on the proportions of the assigned fr values.</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>In the grid example below, child element &apos;A&apos; has a &apos;grid-area&apos; defined that spans two columns and two rows. You&apos;&apos;l notice though, that the browser is able to fit both child elements &apos;B&apos; and &apos;C&apos; in the remaining column of the grid.</p>

            <p>Whereas child element &apos;J&apos; is defined to take up two columns and only one row. So the browser only puts the next element, &apos;K&apos;, in the remaining column which fills that entire space.</p>

            <p>For a final example, element &apos;R&apos; is set to span 3 rows and 2 columns. Since it&apos;s 3 rows tall, the browser is able to fit the 3 elements &apos;S&apos;, &apos;T&apos;, and &apos;U&apos; to be adjacent to it. In addition to this, element &apos;R&apos; is set to start at column 2 which means the browser will fit those three siblings in column 1.</p>

            <p>In other words, browsers look at both the X and Y axis of the grid when it comes to fitting elements within it. Although elements &apos;A&apos; and &apos;J&apos; are rendered with the same width and height, its grid-area can affect the position and size of the siblings that follow it. </p>

          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="grid-2">
              <div>A
              <pre>
                  <code>
                    grid-row-start: 1;<br />
                    grid-column-start: 1;<br />
                    grid-row-end: 3;<br />
                    grid-column-end: 3;
                </code>
                </pre>
              </div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
              <div>E</div>
              <div>F</div>
              <div>G</div>
              <div>H</div>
              <div>I</div>
              <div>J
            <pre>
                  <code>
                    grid-row-start: 5;<br />
                    grid-column-start: 1;<br />
                    grid-row-end: 5;<br />
                    grid-column-end: 3;
                </code>
                </pre>
              </div>
              <div>K</div>
              <div>L</div>
              <div>M</div>
              <div>N</div>
              <div>O</div>
              <div>P</div>
              <div>Q</div>
              <div>R
            <pre>
                  <code>
                    grid-row-start: 8;<br />
                    grid-column-start: 2;<br />
                    grid-row-end: 11;<br />
                    grid-column-end: 4;
                </code>
                </pre>
              </div>
              <div>S</div>
              <div>T</div>
              <div>U</div>
              <div>V</div>
              <div>W</div>
              <div>X</div>
              <div>Y</div>
              <div>Z</div>
            </div>

          </div>
        </div>

      </section>
    )
  }
}