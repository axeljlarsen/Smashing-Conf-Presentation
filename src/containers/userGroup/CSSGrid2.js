import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppRoutes } from '../../Constants';
import GenericComponent from '../../components/GenericComponent.js';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount.js';
import Example1CSSGrid from '../grid/Example1CSSGrid';
import bikeImg1 from '../../assets/img/jonny-kennaugh-697578-unsplash.jpg';
import bikeImg2 from '../../assets/img/paul-green-38404-unsplash.jpg';
import bikeImg3 from '../../assets/img/patrick-hendry-464055-unsplash.jpg';

export default class CSSGrid2 extends GenericComponent {
  render() {
    return (
      <div className='cssgrid'>

        <ScrollToTopOnMount />
        <section>
          <h1>Defining a Grid Explicitly</h1>
        </section>

        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 10rem;
  grid-gap: 1rem;
}`}</pre>
          </code>
          <aside>
            <p>You can define a grid layout by using any combination of the following properties:</p>
            <ul>
              <li>grid-template-columns</li>
              <li>grid-template-rows</li>
              <li>grid-auto-columns</li>
              <li>grid-auto-rows</li>
            </ul><br />
            <p style={{ 'display': 'none' }}>Properties with <i>-auto-</i> apply to all tracks on the specified dimension and is also affected by the grid<i>-auto-</i>flow property.</p>
            <p style={{ 'display': 'none' }}>Properties with <i>-template-</i> apply to the first X tracks on the specified dimension and have higher priority than its -auto- counterpart.</p>
          </aside>
          <div className="grid grid0">
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
  grid-template-columns: `}<span className="highlight">repeat(auto-fill, 10rem);</span>{`
  grid-gap: 1rem;
}`}</pre>
          </code>
          <aside>
            <p>The <i><b>repeat(count, size)</b> </i> CSS function lets you define a pattern for your grid tracks of the specified dimension.</p>
            <p><i><b>auto-fill</b></i> will fill the grid container with as many tracks as possible on the specified dimension.</p>
          </aside>
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
  grid-template-columns: repeat(`}<span className="highlight">auto-fit, minmax(10rem, 1fr)</span>){`
  grid-gap: 1rem;
}`}</pre>
          </code>
          <aside>
            <p><i><b>auto-fit</b></i> will fill the grid container with as many tracks as possible and then fit the tracks to the container by proportionally distributing the remaining space to each track on the specified dimension.</p>
            <p>The <i><b>fr</b></i> unit stands for fraction. Tracks defined with an <i>fr</i> unit will proportionally take up the remaining space of the grid.</p>
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
  grid-template-columns: repeat(auto-fit, `}<span className="highlight">minmax(10rem, 1fr) minmax(10rem, 2fr)</span>{`)
  grid-gap: 1rem;
}`}</pre>
          </code>
          <aside>
            <p>The even columns in this grid grow proportionally wider with the container because of the 2fr value.</p>
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
          <h1>Alignment</h1>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-template-columns: repeat(4, 10rem);
  grid-gap: 1rem;
  `}<span className="highlight">min-height: 30rem;</span>{`
}`}</pre>
          </code>
          <aside>
            <p>The <i><b>align-items</b></i> property is <b>stretch</b> by default. So grid items will stretch to fill the block dimension (row).</p>
          </aside>
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
  grid-template-columns: repeat(4, 10rem);
  grid-gap: 1rem;
  `}<span className="highlight">align-items: end;</span>{`
  min-height: 30rem;
}`}</pre>
          </code>
          <aside>
            <p>CSS properties beginning with <i><b>align-</b></i> affect the <b>block</b> dimension (in English the block dimension is the vertical axis)</p>
            <p>CSS properties ending in <i><b>-items</b></i> and <i><b>-self</b></i> affect the alignment of the <b>item(s)</b> within their track.</p>
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
  grid-template-columns: repeat(4, 10rem);
  grid-gap: 1rem;
  `}<span className="highlight">justify-content: end;</span>{`
  min-height: 30rem;
}`}</pre>
          </code>
          <aside>
            <p>CSS properties beginning with <i><b>justify-</b></i> affect the <b>inline</b> dimension (in English the inline dimension is the horizontal axis)</p>
            <p>CSS properties ending in <i><b>-content</b></i> affect the placement of the tracks within the grid.</p>
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
  grid-template-columns: repeat(4, 10rem);
  grid-gap: 1rem;
  `}<span className="highlight">justify-content: end;</span>{`
  `}<span className="highlight2">align-items: end;</span>{`
  min-height: 30rem;
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
          <h1>Position / Order</h1>
        </section>
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
}
.grid > div {
  `}<span className="highlight">display: grid;</span>{`
  `}<span className="highlight2">place-content: center;</span>{`
}
.grid > div:nth-child(2) {
  `}<span className="strike">grid-row-start: 1;</span>{`
  `}<span className="strike">grid-column-start: 1;</span>{`
  `}<span className="strike">grid-row-end: auto;</span>{`
  `}<span className="strike">grid-column-end: 4;</span>{`
  `}<span className="highlight3">grid-area: 1/1/auto/4;</span>{`
}
.grid > div:nth-child(4) {
  `}<span className="highlight4">grid-row: span 2;</span>{`
}`}</pre>
          </code>
          <aside>
            <ul>
              <li>
                <p>Notice that our grid container doesn't have <i><b>grid-template-columns</b></i> defined and yet our grid has 3 columns. This is because our second grid item has <b>grid-column-end: 4</b> so the browser infered there would be 4 inline track lines i.e. 3 columns.</p>
              </li>
              <li className="highlight-dot">
                <p>A grid item can also be a grid container.</p>
              </li>
              <li className="highlight2-dot">
                <p>The <i><b>place-content</b></i> property value applies to justify-content and align-content simultaneously.</p>
              </li>
              <li className="highlight3-dot">
                <p>Individual items within a grid container can be repositioned and sized in multiple ways. One way is to use the <i><b>grid-area</b></i> property.</p>
              </li>
              <li className="highlight4-dot">
                <p>Individual items can <i><b>span</b></i> multiple tracks without defining their position.</p>
              </li>
            </ul>
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
        <section>
          <code>
            <pre>{`.grid {
  display: grid;
  grid-gap: 1rem;
}
.grid > div {
  `}<span className="highlight"></span>{`display: grid;
  `}<span className="highlight2"></span>{`place-content: center;
}
.grid > div:nth-child(2) {
  `}<span className="highlight3"></span>{`grid-area: 1/1/auto/4;
}
.grid > div:nth-child(`}<span className="highlight">3</span>{`) {
  grid-row: span 2;
}`}</pre>
          </code>
          <aside>
            <p>Notice that when item C spans 2 block tracks (rows), the browser positions item F below item D.</p>
          </aside>
          <div className="grid grid10">
            <div><span>A</span></div>
            <div><span>B</span></div>
            <div><span>C</span></div>
            <div><span>D</span></div>
            <div><span>E</span></div>
            <div><span>F</span></div>
          </div>
        </section>
        <section>
          <h1>Examples</h1>
        </section>
        <section>
          <aside>
            <p>The example below shows 3 standard cards all using CSS Grid. The first contains an avatar image and set of actions that the second and third card lack. By <em>slightly</em> altering the second card&apos;s CSS, we can match the position of the titles and icons to the first card. Without that change, we get the result of the third card where the titles and icons are positioned on the far left.</p>
          </aside>
          <div className="grid grid9">
            <div className="card">
              <img className="pic-ava" src={bikeImg1} />
              <div className="titles">
                <h4 className="title">Title Lorem Ipsum</h4>
                <h5 className="subtitle">Subtitle dolor sit amet</h5>
              </div>
              <img className="pic-main" src={bikeImg3} />
              <p className="desc">Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan dolor. Nulla lobortis leo ex, sit amet malesuada lectus volutpat non.</p>
              <div className="actions" >
                <a href="#">Action 1</a>
                <a href="#">Action 2</a>
              </div>
              <div className="actions-icons">
                <a href="#" className="action-fav">
                  <FontAwesomeIcon icon={['fal', 'heart']} />
                </a>
                <a href="#" className="action-share">
                  <FontAwesomeIcon icon={['fal', 'share-alt']} />
                </a>
              </div>
            </div>
            <div className="card2">
              <div className="titles">
                <h4 className="title">Title Lorem Ipsum</h4>
                <h5 className="subtitle">Subtitle dolor sit amet</h5>
              </div>
              <img className="pic-main" src={bikeImg3} />
              <p className="desc">Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan dolor. Nulla lobortis leo ex, sit amet malesuada lectus volutpat non.</p>

              <div className="actions-icons">
                <a href="#" className="action-fav">
                  <FontAwesomeIcon icon={['fal', 'heart']} />
                </a>
                <a href="#" className="action-share">
                  <FontAwesomeIcon icon={['fal', 'share-alt']} />
                </a>
              </div>
            </div>
            <div className="card">
              <div className="titles">
                <h4 className="title">Title Lorem Ipsum</h4>
                <h5 className="subtitle">Subtitle dolor sit amet</h5>
              </div>
              <img className="pic-main" src={bikeImg3} />
              <p className="desc">Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan dolor. Nulla lobortis leo ex, sit amet malesuada lectus volutpat non.</p>

              <div className="actions-icons">
                <a href="#" className="action-fav">
                  <FontAwesomeIcon icon={['fal', 'heart']} />
                </a>
                <a href="#" className="action-share">
                  <FontAwesomeIcon icon={['fal', 'share-alt']} />
                </a>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="grid-code">
            <code>
              <pre>{`<div class="card">
  `}<span className="">{`<img class="pic-ava" src="/static/media/jonny-kennaugh-697578-unsplash.53c39565.jpg">`}</span>{`
  <div class="titles">
    <h4 class="title">Title Lorem Ipsum</h4>
    <h5 class="subtitle">Subtitle dolor sit amet</h5>
  </div>
  <img class="pic-main" src="/static/media/patrick-hendry-464055-unsplash.2f4ed826.jpg">
  <p class="desc">
    Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan dolor. Nulla lobortis leo ex, sit amet malesuada lectus volutpat non.
  </p>
  `}<span className="">{`<div class="actions">
    <a href="#">Action 1</a>
    <a href="#">Action 2</a>
  </div>`}</span>{`  
  <div class="actions-icons">
  <a href="#" class="action-fav">...</a>
  <a href="#" class="action-share">...</a>
  </div>
</div>`}</pre>
            </code>
            <code>
              <pre>{`<div class="card">
  `}<span className="highlight">{`  `}</span>{`
  <div class="titles">
    <h4 class="title">Title Lorem Ipsum</h4>
    <h5 class="subtitle">Subtitle dolor sit amet</h5>
  </div>
  <img class="pic-main" src="/static/media/patrick-hendry-464055-unsplash.2f4ed826.jpg">
  <p class="desc">
    Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan dolor. Nulla lobortis leo ex, sit amet malesuada lectus volutpat non.
  </p>
  `}<span className="highlight">{`
  

  `}</span>{`
  <div class="actions-icons">
  <a href="#" class="action-fav">...</a>
  <a href="#" class="action-share">...</a>
  </div>
</div>`}</pre>
            </code>
            <code>
              <pre>{`<div class="card">
  `}<span className="highlight">{`  `}</span>{`
  <div class="titles">
    <h4 class="title">Title Lorem Ipsum</h4>
    <h5 class="subtitle">Subtitle dolor sit amet</h5>
  </div>
  <img class="pic-main" src="/static/media/patrick-hendry-464055-unsplash.2f4ed826.jpg">
  <p class="desc">
    Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac accumsan dolor. Nulla lobortis leo ex, sit amet malesuada lectus volutpat non.
  </p>
  `}<span className="highlight">{`
  

  `}</span>{`
  <div class="actions-icons">
  <a href="#" class="action-fav">...</a>
  <a href="#" class="action-share">...</a>
  </div>
</div>`}</pre>
            </code>
          </div>
          <div className="grid-code">
            <code>
              <pre>{`.card {
  display: grid;
  grid-template-columns: 4.2rem 1fr auto;
}

.card .titles,
.card .actions {
    grid-column: span 2;
}

.card .pic-main,
.card .desc {
    grid-column: span 3;
}

.card .actions-icons {
    display: flex;
    justify-content: flex-end;
}`}<span className="highlight"></span>{``}</pre>
            </code>
            <code>
              <pre>{`.card {
  display: grid;
  grid-template-columns: 4.2rem 1fr auto;
}

.card .titles,
.card .actions {
    grid-column: `}<span className="highlight">2 / </span>{`span 2;
}

.card .pic-main,
.card .desc {
    grid-column: span 3;
}

.card .actions-icons {
    display: flex;
    justify-content: flex-end;
}`}<span className="highlight"></span>{``}</pre>
            </code>
            <code>
              <pre>{`.card {
  display: grid;
  grid-template-columns: 4.2rem 1fr auto;
}

.card .titles,
.card .actions {
    grid-column: span 2;
}

.card .pic-main,
.card .desc {
    grid-column: span 3;
}

.card .actions-icons {
    display: flex;
    justify-content: flex-end;
}`}<span className="highlight"></span>{``}</pre>
            </code>
          </div>
        </section>

        <Example1CSSGrid />

        <section style={{ 'display': 'none' }}>

          <aside>
            <p>You can also use CSS Grid to replicate a bootstrap layout by using grid-column: span X; where X is the size of the column. While this approach still produces a significant amount of CSS, it's certainly easier to read and produces less caveats in comparison to Bootstrap 3&apos;s implementation.</p>
            <p>Bootstrap 4 switched its implementation of a grid layout to use flexbox instead of float: left. I don&apos;t know why flexbox was chosen over grid but I&apos;d guess it&apos;s because of flexbox&apos;s <em>slight</em> lead in browser support and/or a limited understanding of how grid works or what it&apos;s capable of. Flexbox only allows you to control a single dimension (horizontal or vertical) which means that Bootstrap's new "grid" is needlessly limited.</p>
          </aside>
          <div className="bs-grid">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <ul>
                  <li>xs: 12</li>
                  <li>sm: 6</li>
                  <li>md: 4</li>
                  <li>lg: 3</li>
                </ul>
              </div>
              <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                <ul>
                  <li>xs: 8</li>
                  <li>sm: 6</li>
                  <li>md: 4</li>
                  <li>lg: 3</li>
                </ul>
              </div>
              <div className="col-4 col-sm-6 col-md-4 col-lg-3">
                <ul>
                  <li>xs: 4</li>
                  <li>sm: 6</li>
                  <li>md: 4</li>
                  <li>lg: 3</li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <ul>
                  <li>xs: 12</li>
                  <li>sm: 6</li>
                  <li>md: </li>
                  <li>lg: 3</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid-code">
            <code>
              <pre>{`<div className="row">
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">...</div>              
  <div className="col-8 col-sm-6 col-md-4 col-lg-3">...</div>
  <div className="col-4 col-sm-6 col-md-4 col-lg-3">...</div>              
  <div className="col-12 col-sm-6 col-lg-3">...</div>
</div>`}</pre>
            </code>
            <code>
              <pre>{`.grid .row {
  display: grid;
  grid-template-columns: repeat(12, auto);
  grid-gap: 1rem;
}
@media screen and (min-width: 0) {
  .grid .col-1 {
      grid-column: span 1;
  }
  .grid .col-2 {
      grid-column: span 2;
  }
  .grid .col-3 {
      grid-column: span 3;
  }
  .grid .col-4 {
      grid-column: span 4;
  }
  .grid .col-5 {
      grid-column: span 5;
  }
  .grid .col-6 {
      grid-column: span 6;
  }
  .grid .col-7 {
      grid-column: span 7;
  }
  .grid .col-8 {
      grid-column: span 8;
  }
  .grid .col-9 {
      grid-column: span 9;
  }
  .grid .col-10 {
      grid-column: span 10;
  }
  .grid .col-11 {
      grid-column: span 11;
  }
  .grid .col-12 {
      grid-column: span 12;
  }
}
@media screen and (min-width: 40em) {
  .grid .col-sm-1 {
      grid-column: span 1;
  }
  .grid .col-sm-2 {
      grid-column: span 2;
  }
  .grid .col-sm-3 {
      grid-column: span 3;
  }
  .grid .col-sm-4 {
      grid-column: span 4;
  }
  .grid .col-sm-5 {
      grid-column: span 5;
  }
  .grid .col-sm-6 {
      grid-column: span 6;
  }
  .grid .col-sm-7 {
      grid-column: span 7;
  }
  .grid .col-sm-8 {
      grid-column: span 8;
  }
  .grid .col-sm-9 {
      grid-column: span 9;
  }
  .grid .col-sm-10 {
      grid-column: span 10;
  }
  .grid .col-sm-11 {
      grid-column: span 11;
  }
  .grid .col-sm-12 {
      grid-column: span 12;
  }
}
@media screen and (min-width: 60em) {
  .grid .col-md-1 {
      grid-column: span 1;
  }
  .grid .col-md-2 {
      grid-column: span 2;
  }
  .grid .col-md-3 {
      grid-column: span 3;
  }
  .grid .col-md-4 {
      grid-column: span 4;
  }
  .grid .col-md-5 {
      grid-column: span 5;
  }
  .grid .col-md-6 {
      grid-column: span 6;
  }
  .grid .col-md-7 {
      grid-column: span 7;
  }
  .grid .col-md-8 {
      grid-column: span 8;
  }
  .grid .col-md-9 {
      grid-column: span 9;
  }
  .grid .col-md-10 {
      grid-column: span 10;
  }
  .grid .col-md-11 {
      grid-column: span 11;
  }
  .grid .col-md-12 {
      grid-column: span 12;
  }
}
@media screen and (min-width: 80em) {
  .grid .col-lg-1 {
      grid-column: span 1;
  }
  .grid .col-lg-2 {
      grid-column: span 2;
  }
  .grid .col-lg-3 {
      grid-column: span 3;
  }
  .grid .col-lg-4 {
      grid-column: span 4;
  }
  .grid .col-lg-5 {
      grid-column: span 5;
  }
  .grid .col-lg-6 {
      grid-column: span 6;
  }
  .grid .col-lg-7 {
      grid-column: span 7;
  }
  .grid .col-lg-8 {
      grid-column: span 8;
  }
  .grid .col-lg-9 {
      grid-column: span 9;
  }
  .grid .col-lg-10 {
      grid-column: span 10;
  }
  .grid .col-lg-11 {
      grid-column: span 11;
  }
  .grid .col-lg-12 {
      grid-column: span 12;
  }
}`}</pre>
            </code>
          </div>
        </section>

        {this.props.children}
      </div>
    );
  }
}