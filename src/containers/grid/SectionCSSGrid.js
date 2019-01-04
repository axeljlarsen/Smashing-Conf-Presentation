import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SectionCSSGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
        
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <section>
      <nav>
        <Link to="/CSSGrid/Example1">Example 1</Link>
      </nav>
      <div className="row">
        <div className="col">
          <p><span className="badge">CSS Grid</span> <a  className="badge"href="https://gridbyexample.com/examples/" target="_blank" title="view more CSS Grid examples">More Examples</a></p>
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
          <p>The grid-template-columns property tells the browser to lay out the child elements of the grid element in three columns. The fr unit stands for 'fraction' and tells the browser how to divide the remaining space within the grid. Since our fr values total to 10, column 1 will have 50% of the remaining space of the X axis of the grid and columns 2 and 3 will have 30% and 20% respectively. The reason we don't use the % unit is because of the grid-gap value of 1em. If you use % values totalling to 100%, then the contents of the grid will actually have a width greater than the grid container itself due to that grid-gap. Remember, the fr units you use don't have to total to 100; the total can be any number and the browser will assign space based on the proportions of the assigned fr values.</p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="grid-1">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
            <div>F</div>
            <div>G</div>
            <div>H</div>
            <div>I</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>In the grid example below, child element 'A' has a 'grid-area' defined that spans two columns and two rows. You'll notice though, that the browser is able to fit both child elements 'B' and 'C' in the remaining column of the grid.</p>

          <p>Whereas child element 'J' is defined to take up two columns and only one row. So the browser only puts the next element, 'K', in the remaining column which fills that entire space.</p>
          
          <p>For a final example, element 'R' is set to span 3 rows and 2 columns. Since it's 3 rows tall, the browser is able to fit the 3 elements 'S', 'T', and 'U' to be adjacent to it. In addition to this, element 'R' is set to start at column 2 which means the browser will fit those three siblings in column 1.</p>

          <p>In other words, browsers look at both the X and Y axis of the grid when it comes to fitting elements within it. Although elements 'A' and 'J' are rendered with the same width and height, its grid-area can affect the position and size of the siblings that follow it. </p>

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
    );
  }
}