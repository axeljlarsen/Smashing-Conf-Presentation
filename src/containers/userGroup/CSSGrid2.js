import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import { AppRoutes } from '../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Example1CSSGrid from '../grid/Example1CSSGrid';
import bikeImg1 from '../../assets/img/jonny-kennaugh-697578-unsplash.jpg';
import bikeImg2 from '../../assets/img/paul-green-38404-unsplash.jpg';
import bikeImg3 from '../../assets/img/patrick-hendry-464055-unsplash.jpg';

export default class CSSGrid2 extends GenericComponent {
  render() {
    return (
      <div className='cssgrid'>

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
            </ul><br/>
            <p style={{'display':'none'}}>Properties with <strong>-auto-</strong> apply to all tracks on the specified dimension and is also affected by the grid<strong>-auto-</strong>flow property.</p>
            <p style={{'display':'none'}}>Properties with <strong>-template-</strong> apply to the first X tracks on the specified dimension and have higher priority than its -auto- counterpart.</p>
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
            <p>The <strong>repeat(count, size)</strong> CSS function lets you define a pattern for your grid tracks of the specified dimension.</p>
            <p><strong>auto-fill</strong> will fill the grid container with as many tracks as possible on the specified dimension.</p>
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
            <p><strong>auto-fit</strong> will fill the grid container with as many tracks as possible and then fit the tracks to the container by proportionally distributing the remaining space to each track on the specified dimension.</p>
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
            <p>The <strong>align-items</strong> property is <strong>stretch</strong> by default. So grid items will stretch to fill the block dimension (row).</p>
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
            <p>CSS properties beginning with <strong>align-</strong> affect the <strong>block</strong> dimension (in English the block dimension is the vertical axis)</p>
            <p>CSS properties ending in <strong>-items</strong> and <strong>-self</strong> affect the alignment of the <strong>item(s)</strong> within their track.</p>
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
            <p>CSS properties beginning with <strong>justify-</strong> affect the <strong>inline</strong> dimension (in English the inline dimension is the horizontal axis)</p>
            <p>CSS properties ending in <strong>-content</strong> affect the placement of the tracks within the grid.</p>
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
                <p>Notice that our grid container doesn't have <strong>grid-template-columns</strong> defined and yet our grid has 3 columns. This is because our second grid item has <strong>grid-column-end: 4</strong> so the browser infered there would be 4 inline track lines i.e. 3 columns.</p>
              </li>
              <li className="highlight-dot">
                <p>A grid item can also be a grid container.</p>
              </li>
              <li className="highlight2-dot">
                <p>The <strong>place-content</strong> property value applies to justify-content and align-content simultaneously.</p>
              </li>
              <li className="highlight3-dot">
                <p>Individual items within a grid container can be repositioned and sized in multiple ways. One way is to use the <strong>grid-area</strong> property.</p>
              </li>
              <li className="highlight4-dot">
                <p>Individual items can <strong>span</strong> multiple tracks without defining their position.</p>
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
  grid-template-columns: 6rem 1fr 6rem;
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
  grid-template-columns: 6rem 1fr 6rem;
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
  grid-template-columns: 6rem 1fr 6rem;
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

        <section>
          <Example1CSSGrid />
        </section>

        {this.props.children}
      </div>
    );
  }
}