import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, } from 'reactstrap';
import bgsm from '../../assets/img/square-image.jpg';
import bglg from '../../assets/img/large-image.jpg';
import './Grids.scss';
import './GridLayering.scss';
import '../../styles/CustomBootstrap.scss';
import GenericComponent from '../../components/GenericComponent';
import DemoFilter from '../../components/DemoFilter';
import { CSSGridExample1Steps } from '../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bikeImg1 from '../../assets/img/jonny-kennaugh-697578-unsplash.jpg';
import bikeImg2 from '../../assets/img/paul-green-38404-unsplash.jpg';
import bikeImg3 from '../../assets/img/patrick-hendry-464055-unsplash.jpg';

export default class Example1CSSGrid extends GenericComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            steps: [CSSGridExample1Steps.Bootstrap3, CSSGridExample1Steps.Grid]
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
        const gridClass = `bg-silver`;
        const content = [
            <div>
                <FontAwesomeIcon icon={['fal', 'bicycle']} size="4x" />
                <h2>Ride for fun</h2>
                <p>
                    Quisque rutrum sem lorem, ac accumsan arcu feugiat vitae. In venenatis sem eu nisi tincidunt tincidunt.
                </p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Start tracking</a></p>
            </div>,
            <div>
                <FontAwesomeIcon icon={['fal', 'sun-cloud']} size="4x" />
                <h2>Compete</h2>
                <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Register</a></p>
            </div>
        ];

        return (
            <div className={gridClass}>
                <div className={`grid-code`}>
                    <div className={`bootstrap-3 ${this.getStepUtilClass(CSSGridExample1Steps.Bootstrap3)}`}>
                        <Container fluid>
                            <Row className="weather-card">
                                <Col className="col-xs-12 location">Hong Kong</Col>
                                <Col className="col-xs-12 time">Mon 12:30 PM Mostly Sunny</Col>
                                <Col xs="8" className="col-xs-8 temp">23<sup>&deg; C</sup></Col>
                                <Col xs="4" className="col-xs-4 icon--lg"><FontAwesomeIcon icon={['fal', 'sun-cloud']} size="4x" /></Col>
                                <Col xs="6" className="col-xs-6 perc-wind"><FontAwesomeIcon icon={['fal', 'cloud-rain']} />24% Precepitation</Col>
                                <Col xs="6" className="col-xs-6 perc-wind"><FontAwesomeIcon icon={['fal', 'wind']} />24kmph Winds</Col>
                                <Col className="col-xs-12 week">
                                    <Row>
                                        <Col className="col-xs-7 day">Tuesday</Col>
                                        <Col className="col-xs-5 high-low"><FontAwesomeIcon icon={['fal', 'sun-cloud']} />24&deg;/12&deg;</Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-xs-7 day">Wednesday</Col>
                                        <Col className="col-xs-5 high-low"><FontAwesomeIcon icon={['fal', 'sun-cloud']} />24&deg;/12&deg;</Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-xs-7 day">Thursday</Col>
                                        <Col className="col-xs-5 high-low"><FontAwesomeIcon icon={['fal', 'thunderstorm']} />24&deg;/12&deg;</Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-xs-7 day">Friday</Col>
                                        <Col className="col-xs-5 high-low"><FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} />24&deg;/12&deg;</Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-xs-7 day">Saturday</Col>
                                        <Col className="col-xs-5 high-low"><FontAwesomeIcon icon={['fal', 'sun-cloud']} />24&deg;/12&deg;</Col>
                                    </Row>
                                </Col>
                                <Col className="col-xs-12 footer">Collapse</Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={`weather-card grid-example ${this.getStepUtilClass(CSSGridExample1Steps.Grid)}`}>
                        <div className="location">Hong Kong</div>
                        <div className="time">Mon 12:30 PM Mostly Sunny</div>
                        <div className="temp">23<sup>&deg; C</sup></div>
                        <div className="icon--lg">
                            <FontAwesomeIcon icon={['fal', 'sun-cloud']} size="4x" />
                        </div>
                        <div className="perc-wind"><FontAwesomeIcon icon={['fal', 'cloud-rain']} />24% Precepitation</div>
                        <div className="perc-wind"><FontAwesomeIcon icon={['fal', 'wind']} />24kmph Winds</div>
                        <div className="week">
                            <div className="day">Tuesday</div>
                            <div className="high-low"><FontAwesomeIcon icon={['fal', 'sun-cloud']} />24&deg;/12&deg;</div>
                            <div className="day">Wednesday</div>
                            <div className="high-low"><FontAwesomeIcon icon={['fal', 'sun-cloud']} />24&deg;/12&deg;</div>
                            <div className="day">Thursday</div>
                            <div className="high-low"><FontAwesomeIcon icon={['fal', 'thunderstorm']} />24&deg;/12&deg;</div>
                            <div className="day">Friday</div>
                            <div className="high-low"><FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} />24&deg;/12&deg;</div>
                            <div className="day">Saturday</div>
                            <div className="high-low"><FontAwesomeIcon icon={['fal', 'sun-cloud']} />24&deg;/12&deg;</div>
                        </div>
                        <div className="footer">Collapse</div>
                    </div>
                </div>
                <div className={`grid-code`}>
                    <div className={this.getStepUtilClass(CSSGridExample1Steps.Bootstrap3)}>
                        <pre>
                            <code>
                                {`<div class="container-fluid">
    <div class="weather-card`}<span className="highlight"> row</span>{`">
        <div class="`}<span className="highlight">col-xs-12 </span>{`location">Hong Kong</div>
        <div class="`}<span className="highlight">col-xs-12 </span>{`time">Mon 12:30 PM Mostly Sunny</div>
        <div class="`}<span className="highlight">col-xs-8 </span>{`temp">23<sup>° C</sup></div>
        <div class="`}<span className="highlight">col-xs-4 </span>{`icon--lg"></div>
        <div class="`}<span className="highlight">col-xs-6 </span>{`perc-wind">24% Precepitation</div>
        <div class="`}<span className="highlight">col-xs-6 </span>{`perc-wind">24kmph Winds</div>
        <div class="`}<span className="highlight">col-xs-12 </span>{`week">
          `}<span className="highlight">{`<div class="row">`}</span>{`
                <div class="`}<span className="highlight">{`col-xs-7 `}</span>{`day">Tuesday</div>
                <div class="`}<span className="highlight">{`col-xs-5 `}</span>{`high-low">24°/12°</div>
          `}<span className="highlight">{`</div>`}</span>{`
          `}<span className="highlight">{`<div class="row">`}</span>{`
                <div class="`}<span className="highlight">{`col-xs-7 `}</span>{`day">Wednesday</div>
                <div class="`}<span className="highlight">{`col-xs-5 `}</span>{`high-low">24°/12°</div>
          `}<span className="highlight">{`</div>`}</span>{`
          `}<span className="highlight">{`<div class="row">`}</span>{`
                <div class="`}<span className="highlight">{`col-xs-7 `}</span>{`day">Thursday</div>
                <div class="`}<span className="highlight">{`col-xs-5 `}</span>{`high-low">24°/12°</div>
          `}<span className="highlight">{`</div>`}</span>{`
          `}<span className="highlight">{`<div class="row">`}</span>{`
                <div class="`}<span className="highlight">{`col-xs-7 `}</span>{`day">Friday</div>
                <div class="`}<span className="highlight">{`col-xs-5 `}</span>{`high-low">24°/12°</div>
          `}<span className="highlight">{`</div>`}</span>{`
          `}<span className="highlight">{`<div class="row">`}</span>{`
                <div class="`}<span className="highlight">{`col-xs-7 `}</span>{`day">Saturday</div>
                <div class="`}<span className="highlight">{`col-xs-5 `}</span>{`high-low">24°/12°</div>
          `}<span className="highlight">{`</div>`}</span>{`
        </div>
        <div class="`}<span className="highlight">{`col-xs-12 `}</span>{`footer">Collapse</div>
    </div>
</div>`}
                            </code>
                        </pre>
                    </div>
                    <div className={this.getStepUtilClass(CSSGridExample1Steps.Grid)}>
                        <pre>
                            <code>
                                {`<div class="weather-card">
    <div class="location">Hong Kong</div>
    <div class="time">Mon 12:30 PM Mostly Sunny</div>
    <div class="temp">23<sup>° C</sup></div>
    <div class="icon--lg"></div>
    <div class="perc-wind">24% Precepitation</div>
    <div class="perc-wind">24kmph Winds</div>
    <div class="week">
        <div class="day">Tuesday</div>
        <div class="high-low">24°/12°</div>
        <div class="day">Wednesday</div>
        <div class="high-low">24°/12°</div>
        <div class="day">Thursday</div>
        <div class="high-low">24°/12°</div>
        <div class="day">Friday</div>
        <div class="high-low">24°/12°</div>
        <div class="day">Saturday</div>
        <div class="high-low">24°/12°</div>
    </div>
    <div class="footer">Collapse</div>
</div>`}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className={`grid-code`}>
                    <div className={this.getStepUtilClass(CSSGridExample1Steps.Bootstrap3)}>
                        <pre>
                            <code>
                                {`<style>
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .row-no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
  .row-no-gutters [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
  .col-xs-1,
  .col-sm-1,
  .col-md-1,
  .col-lg-1,
  .col-xs-2,
  .col-sm-2,
  .col-md-2,
  .col-lg-2,
  .col-xs-3,
  .col-sm-3,
  .col-md-3,
  .col-lg-3,
  .col-xs-4,
  .col-sm-4,
  .col-md-4,
  .col-lg-4,
  .col-xs-5,
  .col-sm-5,
  .col-md-5,
  .col-lg-5,
  .col-xs-6,
  .col-sm-6,
  .col-md-6,
  .col-lg-6,
  .col-xs-7,
  .col-sm-7,
  .col-md-7,
  .col-lg-7,
  .col-xs-8,
  .col-sm-8,
  .col-md-8,
  .col-lg-8,
  .col-xs-9,
  .col-sm-9,
  .col-md-9,
  .col-lg-9,
  .col-xs-10,
  .col-sm-10,
  .col-md-10,
  .col-lg-10,
  .col-xs-11,
  .col-sm-11,
  .col-md-11,
  .col-lg-11,
  .col-xs-12,
  .col-sm-12,
  .col-md-12,
  .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12 {
    float: left;
  }
  .col-xs-12 {
    width: 100%;
  }
  .col-xs-11 {
    width: 91.66666667%;
  }
  .col-xs-10 {
    width: 83.33333333%;
  }
  .col-xs-9 {
    width: 75%;
  }
  .col-xs-8 {
    width: 66.66666667%;
  }
  .col-xs-7 {
    width: 58.33333333%;
  }
  .col-xs-6 {
    width: 50%;
  }
  .col-xs-5 {
    width: 41.66666667%;
  }
  .col-xs-4 {
    width: 33.33333333%;
  }
  .col-xs-3 {
    width: 25%;
  }
  .col-xs-2 {
    width: 16.66666667%;
  }
  .col-xs-1 {
    width: 8.33333333%;
  }
  .col-xs-pull-12 {
    right: 100%;
  }
  .col-xs-pull-11 {
    right: 91.66666667%;
  }
  .col-xs-pull-10 {
    right: 83.33333333%;
  }
  .col-xs-pull-9 {
    right: 75%;
  }
  .col-xs-pull-8 {
    right: 66.66666667%;
  }
  .col-xs-pull-7 {
    right: 58.33333333%;
  }
  .col-xs-pull-6 {
    right: 50%;
  }
  .col-xs-pull-5 {
    right: 41.66666667%;
  }
  .col-xs-pull-4 {
    right: 33.33333333%;
  }
  .col-xs-pull-3 {
    right: 25%;
  }
  .col-xs-pull-2 {
    right: 16.66666667%;
  }
  .col-xs-pull-1 {
    right: 8.33333333%;
  }
  .col-xs-pull-0 {
    right: auto;
  }
  .col-xs-push-12 {
    left: 100%;
  }
  .col-xs-push-11 {
    left: 91.66666667%;
  }
  .col-xs-push-10 {
    left: 83.33333333%;
  }
  .col-xs-push-9 {
    left: 75%;
  }
  .col-xs-push-8 {
    left: 66.66666667%;
  }
  .col-xs-push-7 {
    left: 58.33333333%;
  }
  .col-xs-push-6 {
    left: 50%;
  }
  .col-xs-push-5 {
    left: 41.66666667%;
  }
  .col-xs-push-4 {
    left: 33.33333333%;
  }
  .col-xs-push-3 {
    left: 25%;
  }
  .col-xs-push-2 {
    left: 16.66666667%;
  }
  .col-xs-push-1 {
    left: 8.33333333%;
  }
  .col-xs-push-0 {
    left: auto;
  }
  .col-xs-offset-12 {
    margin-left: 100%;
  }
  .col-xs-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-xs-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-xs-offset-9 {
    margin-left: 75%;
  }
  .col-xs-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-xs-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-xs-offset-6 {
    margin-left: 50%;
  }
  .col-xs-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-xs-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-xs-offset-3 {
    margin-left: 25%;
  }
  .col-xs-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-xs-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-xs-offset-0 {
    margin-left: 0%;
  }
  @media (min-width: 768px) {
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12 {
      float: left;
    }
    .col-sm-12 {
      width: 100%;
    }
    .col-sm-11 {
      width: 91.66666667%;
    }
    .col-sm-10 {
      width: 83.33333333%;
    }
    .col-sm-9 {
      width: 75%;
    }
    .col-sm-8 {
      width: 66.66666667%;
    }
    .col-sm-7 {
      width: 58.33333333%;
    }
    .col-sm-6 {
      width: 50%;
    }
    .col-sm-5 {
      width: 41.66666667%;
    }
    .col-sm-4 {
      width: 33.33333333%;
    }
    .col-sm-3 {
      width: 25%;
    }
    .col-sm-2 {
      width: 16.66666667%;
    }
    .col-sm-1 {
      width: 8.33333333%;
    }
    .col-sm-pull-12 {
      right: 100%;
    }
    .col-sm-pull-11 {
      right: 91.66666667%;
    }
    .col-sm-pull-10 {
      right: 83.33333333%;
    }
    .col-sm-pull-9 {
      right: 75%;
    }
    .col-sm-pull-8 {
      right: 66.66666667%;
    }
    .col-sm-pull-7 {
      right: 58.33333333%;
    }
    .col-sm-pull-6 {
      right: 50%;
    }
    .col-sm-pull-5 {
      right: 41.66666667%;
    }
    .col-sm-pull-4 {
      right: 33.33333333%;
    }
    .col-sm-pull-3 {
      right: 25%;
    }
    .col-sm-pull-2 {
      right: 16.66666667%;
    }
    .col-sm-pull-1 {
      right: 8.33333333%;
    }
    .col-sm-pull-0 {
      right: auto;
    }
    .col-sm-push-12 {
      left: 100%;
    }
    .col-sm-push-11 {
      left: 91.66666667%;
    }
    .col-sm-push-10 {
      left: 83.33333333%;
    }
    .col-sm-push-9 {
      left: 75%;
    }
    .col-sm-push-8 {
      left: 66.66666667%;
    }
    .col-sm-push-7 {
      left: 58.33333333%;
    }
    .col-sm-push-6 {
      left: 50%;
    }
    .col-sm-push-5 {
      left: 41.66666667%;
    }
    .col-sm-push-4 {
      left: 33.33333333%;
    }
    .col-sm-push-3 {
      left: 25%;
    }
    .col-sm-push-2 {
      left: 16.66666667%;
    }
    .col-sm-push-1 {
      left: 8.33333333%;
    }
    .col-sm-push-0 {
      left: auto;
    }
    .col-sm-offset-12 {
      margin-left: 100%;
    }
    .col-sm-offset-11 {
      margin-left: 91.66666667%;
    }
    .col-sm-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-sm-offset-9 {
      margin-left: 75%;
    }
    .col-sm-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-sm-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-sm-offset-6 {
      margin-left: 50%;
    }
    .col-sm-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-sm-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-sm-offset-3 {
      margin-left: 25%;
    }
    .col-sm-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-sm-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-sm-offset-0 {
      margin-left: 0%;
    }
  }
  @media (min-width: 992px) {
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12 {
      float: left;
    }
    .col-md-12 {
      width: 100%;
    }
    .col-md-11 {
      width: 91.66666667%;
    }
    .col-md-10 {
      width: 83.33333333%;
    }
    .col-md-9 {
      width: 75%;
    }
    .col-md-8 {
      width: 66.66666667%;
    }
    .col-md-7 {
      width: 58.33333333%;
    }
    .col-md-6 {
      width: 50%;
    }
    .col-md-5 {
      width: 41.66666667%;
    }
    .col-md-4 {
      width: 33.33333333%;
    }
    .col-md-3 {
      width: 25%;
    }
    .col-md-2 {
      width: 16.66666667%;
    }
    .col-md-1 {
      width: 8.33333333%;
    }
    .col-md-pull-12 {
      right: 100%;
    }
    .col-md-pull-11 {
      right: 91.66666667%;
    }
    .col-md-pull-10 {
      right: 83.33333333%;
    }
    .col-md-pull-9 {
      right: 75%;
    }
    .col-md-pull-8 {
      right: 66.66666667%;
    }
    .col-md-pull-7 {
      right: 58.33333333%;
    }
    .col-md-pull-6 {
      right: 50%;
    }
    .col-md-pull-5 {
      right: 41.66666667%;
    }
    .col-md-pull-4 {
      right: 33.33333333%;
    }
    .col-md-pull-3 {
      right: 25%;
    }
    .col-md-pull-2 {
      right: 16.66666667%;
    }
    .col-md-pull-1 {
      right: 8.33333333%;
    }
    .col-md-pull-0 {
      right: auto;
    }
    .col-md-push-12 {
      left: 100%;
    }
    .col-md-push-11 {
      left: 91.66666667%;
    }
    .col-md-push-10 {
      left: 83.33333333%;
    }
    .col-md-push-9 {
      left: 75%;
    }
    .col-md-push-8 {
      left: 66.66666667%;
    }
    .col-md-push-7 {
      left: 58.33333333%;
    }
    .col-md-push-6 {
      left: 50%;
    }
    .col-md-push-5 {
      left: 41.66666667%;
    }
    .col-md-push-4 {
      left: 33.33333333%;
    }
    .col-md-push-3 {
      left: 25%;
    }
    .col-md-push-2 {
      left: 16.66666667%;
    }
    .col-md-push-1 {
      left: 8.33333333%;
    }
    .col-md-push-0 {
      left: auto;
    }
    .col-md-offset-12 {
      margin-left: 100%;
    }
    .col-md-offset-11 {
      margin-left: 91.66666667%;
    }
    .col-md-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-md-offset-9 {
      margin-left: 75%;
    }
    .col-md-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-md-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-md-offset-6 {
      margin-left: 50%;
    }
    .col-md-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-md-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-md-offset-3 {
      margin-left: 25%;
    }
    .col-md-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-md-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-md-offset-0 {
      margin-left: 0%;
    }
  }
  @media (min-width: 1200px) {
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12 {
      float: left;
    }
    .col-lg-12 {
      width: 100%;
    }
    .col-lg-11 {
      width: 91.66666667%;
    }
    .col-lg-10 {
      width: 83.33333333%;
    }
    .col-lg-9 {
      width: 75%;
    }
    .col-lg-8 {
      width: 66.66666667%;
    }
    .col-lg-7 {
      width: 58.33333333%;
    }
    .col-lg-6 {
      width: 50%;
    }
    .col-lg-5 {
      width: 41.66666667%;
    }
    .col-lg-4 {
      width: 33.33333333%;
    }
    .col-lg-3 {
      width: 25%;
    }
    .col-lg-2 {
      width: 16.66666667%;
    }
    .col-lg-1 {
      width: 8.33333333%;
    }
    .col-lg-pull-12 {
      right: 100%;
    }
    .col-lg-pull-11 {
      right: 91.66666667%;
    }
    .col-lg-pull-10 {
      right: 83.33333333%;
    }
    .col-lg-pull-9 {
      right: 75%;
    }
    .col-lg-pull-8 {
      right: 66.66666667%;
    }
    .col-lg-pull-7 {
      right: 58.33333333%;
    }
    .col-lg-pull-6 {
      right: 50%;
    }
    .col-lg-pull-5 {
      right: 41.66666667%;
    }
    .col-lg-pull-4 {
      right: 33.33333333%;
    }
    .col-lg-pull-3 {
      right: 25%;
    }
    .col-lg-pull-2 {
      right: 16.66666667%;
    }
    .col-lg-pull-1 {
      right: 8.33333333%;
    }
    .col-lg-pull-0 {
      right: auto;
    }
    .col-lg-push-12 {
      left: 100%;
    }
    .col-lg-push-11 {
      left: 91.66666667%;
    }
    .col-lg-push-10 {
      left: 83.33333333%;
    }
    .col-lg-push-9 {
      left: 75%;
    }
    .col-lg-push-8 {
      left: 66.66666667%;
    }
    .col-lg-push-7 {
      left: 58.33333333%;
    }
    .col-lg-push-6 {
      left: 50%;
    }
    .col-lg-push-5 {
      left: 41.66666667%;
    }
    .col-lg-push-4 {
      left: 33.33333333%;
    }
    .col-lg-push-3 {
      left: 25%;
    }
    .col-lg-push-2 {
      left: 16.66666667%;
    }
    .col-lg-push-1 {
      left: 8.33333333%;
    }
    .col-lg-push-0 {
      left: auto;
    }
    .col-lg-offset-12 {
      margin-left: 100%;
    }
    .col-lg-offset-11 {
      margin-left: 91.66666667%;
    }
    .col-lg-offset-10 {
      margin-left: 83.33333333%;
    }
    .col-lg-offset-9 {
      margin-left: 75%;
    }
    .col-lg-offset-8 {
      margin-left: 66.66666667%;
    }
    .col-lg-offset-7 {
      margin-left: 58.33333333%;
    }
    .col-lg-offset-6 {
      margin-left: 50%;
    }
    .col-lg-offset-5 {
      margin-left: 41.66666667%;
    }
    .col-lg-offset-4 {
      margin-left: 33.33333333%;
    }
    .col-lg-offset-3 {
      margin-left: 25%;
    }
    .col-lg-offset-2 {
      margin-left: 16.66666667%;
    }
    .col-lg-offset-1 {
      margin-left: 8.33333333%;
    }
    .col-lg-offset-0 {
      margin-left: 0%;
    }
  }
</style>`}
                            </code>
                        </pre>
                    </div>
                    <div className={this.getStepUtilClass(CSSGridExample1Steps.Grid)}>
                        <pre>
                            <code>
                                {`<style>
.weather-card {        
    display: grid;
}
.weather-card .location,        
.weather-card .time,
.weather-card .week,
.weather-card .footer {
    grid-area: auto / 1 / auto / 5;
}
.weather-card .temp,        
.weather-card .perc-wind { 
    grid-area: auto / 1 / auto / 3;
}
.weather-card .icon--lg,
.weather-card .perc-wind + .perc-wind {
    grid-area: auto / 3 / auto / 5;
}
.weather-card .week {
    display: grid;
    grid-template-columns: 7fr 5fr;
}
.weather-card > * {
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
    oldRender() {
        return (
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
            </Row>
        );
    }
}