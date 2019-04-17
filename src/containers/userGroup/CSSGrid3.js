import React, { Component } from 'react';
import GenericComponent from '../../components/GenericComponent.js';
import { AppRoutes } from '../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bikeImg1 from '../../assets/img/jonny-kennaugh-697578-unsplash.jpg';
import bikeImg2 from '../../assets/img/paul-green-38404-unsplash.jpg';
import bikeImg3 from '../../assets/img/patrick-hendry-464055-unsplash.jpg';

export default class CSSGrid3 extends GenericComponent {
  render() {
    return (
      <div className='cssgrid'>
        <section>
          <div className="grid-code">
          <code>
            <pre>{`.card {
  display: grid;
  grid-template-columns: 6rem 1fr 6rem;
}
.card .pic-ava + .titles,
.card .actions {
    grid-column: span 2;
}

.card .titles,
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
          </div>
          <div className="grid grid9">
          <div></div>
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
            <div className="card">
              <div className="titles">
                <h4 className="title">Title Lorem Ipsum</h4>
                <h5 className="subtitle">Subtitle dolor sit amet</h5>
              </div>
              <img className="pic-main" src={bikeImg3} />
              <p className="desc">Description lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             
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
        </section>

        {this.props.children}
      </div>
    );
  }
}