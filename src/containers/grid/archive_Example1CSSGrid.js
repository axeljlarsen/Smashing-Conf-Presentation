import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
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
            steps: [CSSGridExample1Steps.Bootstrap3]
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
        const jumboStyle = (img) => {
            return {
                color: 'white',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        };
        const jumboContent = [
            <Row>
                <Col sm="8">
                    <h1>A new bike challenge</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante urna.
                        Sed ut egestas massa. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Fusce sem odio, commodo et velit
                        sed, dignissim vulputate sapien. Vivamus rutrum turpis a imperdiet
                        scelerisque. Nam semper neque id sagittis ultrices. Curabitur pharetra augue
                            vel nibh dapibus posuere. Nam vel aliquam massa.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </Col>
            </Row>,
            <Row>
                <div className="col-xs-12 col-sm-8 col-sm-offset-4">
                    <h1>Aptent taciti sociosqu</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante urna.
                        Sed ut egestas massa. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Fusce sem odio, commodo et velit
                        sed, dignissim vulputate sapien. Vivamus rutrum turpis a imperdiet
                        scelerisque. Nam semper neque id sagittis ultrices. Curabitur pharetra augue
                            vel nibh dapibus posuere. Nam vel aliquam massa.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </div>
            </Row>,
            <Row>
                <Col xs={{ size: 12, offset: 0 }} sm={{ size: 8, offset: 4 }} >
                    <h1>Aptent taciti sociosqu</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante urna.
                        Sed ut egestas massa. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Fusce sem odio, commodo et velit
                        sed, dignissim vulputate sapien. Vivamus rutrum turpis a imperdiet
                        scelerisque. Nam semper neque id sagittis ultrices. Curabitur pharetra augue
                            vel nibh dapibus posuere. Nam vel aliquam massa.</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                </Col>
            </Row>
        ];
        const content = [
            <Col sm="6" md="4" lg="3">
                <FontAwesomeIcon icon={['fal', 'bicycle']} size="4x" />
                <h2>Ride for fun</h2>
                <p>Quisque rutrum sem lorem,
                    ac accumsan arcu feugiat vitae. In venenatis sem eu nisi tincidunt tincidunt.
                </p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Start tracking</a></p>
            </Col>,
            <Col sm="6" md="4" lg="3">
                <FontAwesomeIcon icon={['fal', 'stopwatch']} size="4x" />
                <h2>Compete</h2>
                <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Register</a></p>
            </Col>,
            <Col sm="6" md="4" lg="3">
                <FontAwesomeIcon icon={['fal', 'users']} size="4x" />
                <h2>Join teams</h2>
                <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Form a team</a></p>
            </Col>,
            <Col sm="6" md="4" lg="3">
                <FontAwesomeIcon icon={['fal', 'trophy-alt']} size="4x" />
                <h2>Achieve and win</h2>
                <p>Quisque rutrum sem lorem,
                    ac accumsan arcu feugiat vitae. In venenatis sem eu nisi tincidunt tincidunt.
                </p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">View prizes</a></p>
            </Col>,
        ];

        return (
            <div className={gridClass}>

                <DemoFilter
                    availableItems={CSSGridExample1Steps}
                    selectedItems={this.state.steps}
                    onSelect={this.onDemoFilterChange} />

                <div className={`bootstrap-3 ${this.getStepUtilClass(CSSGridExample1Steps.Bootstrap3)}`}>
                    <Jumbotron fluid style={jumboStyle(bikeImg1)}>
                        <Container fluid>
                            <Row>
                                <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                                    {jumboContent[0]}
                                </div>
                            </Row>
                        </Container>
                    </Jumbotron>
                    <Container fluid>
                        <Row>
                            <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                                <Row style={{ textAlign: 'center' }}>
                                    {content[0]}
                                    {content[1]}
                                    {content[2]}
                                    {content[3]}
                                </Row>
                            </div>
                        </Row>
                    </Container>
                    <Jumbotron fluid style={jumboStyle(bikeImg2)}>
                        <Container fluid>
                            <Row>
                                <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                                    {jumboContent[1]}
                                </div>
                            </Row>
                        </Container>
                    </Jumbotron>
                    <Container fluid>
                        <Row>
                            <div className="text-center col-xs-12 col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
                                <h1>Lorem Ipsum</h1>
                                <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                            </div>
                        </Row>
                    </Container>
                    <Jumbotron fluid style={jumboStyle(bikeImg3)}>
                        <Container fluid>
                            <Row>
                                <div className="text-center col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                                    <Row>
                                        <Col sm="6">
                                            <h2>Col 2</h2>
                                        </Col>
                                        <Col sm="6">
                                            <h2>Col 2</h2>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                        </Container>
                    </Jumbotron>
                </div>
                <div className={`bootstrap-4 ${this.getStepUtilClass(CSSGridExample1Steps.Bootstrap4)}`}>
                    <Jumbotron fluid style={jumboStyle(bikeImg1)}>
                        <Container fluid>
                            <Row>
                                <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                                    {jumboContent[0]}
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                    <Container fluid>
                        <Row>
                            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                                <Row style={{ textAlign: 'center' }}>
                                    {content[0]}
                                    {content[1]}
                                    {content[2]}
                                    {content[3]}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Jumbotron fluid style={jumboStyle(bikeImg2)}>
                        <Container fluid>
                            <Row>
                                <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                                    {jumboContent[2]}
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                    <Container fluid>
                        <Row>
                            <Col className="text-center" xs={{ size: 12, offset: 0 }} sm={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }}>
                                <h1>Lorem Ipsum</h1>
                                <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                            </Col>
                        </Row>
                    </Container>
                    <Jumbotron fluid style={jumboStyle(bikeImg3)}>
                        <Container fluid className="text-center">
                            <Row>
                                <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
                                    <Row>
                                        <Col sm="6">
                                            <h2>Col 2</h2>
                                        </Col>
                                        <Col sm="6">
                                            <h2>Col 2</h2>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </div>
                <div className={`grid-example ${this.getStepUtilClass(CSSGridExample1Steps.Grid)}`}>
                    <div className="a1">
                        <img src={bikeImg1} />
                    </div>
                    <div className="a2">
                        <h1>A new bike challenge</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante urna.
                            Sed ut egestas massa. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Fusce sem odio, commodo et velit
                            sed, dignissim vulputate sapien. Vivamus rutrum turpis a imperdiet
                            scelerisque. Nam semper neque id sagittis ultrices. Curabitur pharetra augue
                            vel nibh dapibus posuere. Nam vel aliquam massa.</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
                    </div>
                    <div className="b2">
                        <FontAwesomeIcon icon={['fal', 'bicycle']} size="4x" />
                        <h2>Ride for fun</h2>
                        <p>
                            Quisque rutrum sem lorem, ac accumsan arcu feugiat vitae. In venenatis sem eu nisi tincidunt tincidunt.
                        </p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Start tracking</a></p>
                    </div>
                    <div className="b3">
                        <FontAwesomeIcon icon={['fal', 'stopwatch']} size="4x" />
                        <h2>Compete</h2>
                        <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Register</a></p>
                    </div>
                    <div className="b4">
                        <FontAwesomeIcon icon={['fal', 'users']} size="4x" />
                        <h2>Join teams</h2>
                        <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Form a team</a></p>
                    </div>
                    <div className="b5">
                        <FontAwesomeIcon icon={['fal', 'trophy-alt']} size="4x" />
                        <h2>Achieve and win</h2>
                        <p>
                            Quisque rutrum sem lorem, ac accumsan arcu feugiat vitae. In venenatis sem eu nisi tincidunt tincidunt.
                        </p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">View prizes</a></p>
                    </div>
                    <div className="c3">
                        <h1>Aptent taciti sociosqu</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at ante urna.
                            Sed ut egestas massa. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Fusce sem odio, commodo et velit
                            sed, dignissim vulputate sapien. Vivamus rutrum turpis a imperdiet
                            scelerisque. Nam semper neque id sagittis ultrices. Curabitur pharetra augue
                            vel nibh dapibus posuere. Nam vel aliquam massa.</p>
                    </div>
                    <div className="d3">
                        <h1>Lorem Ipsum</h1>
                        <p>Pellentesque ullamcorper, quam at tempus pulvinar, lorem purus laoreet ex, a porttitor lacus quam id ligula. Integer sed ultricies nisi.</p>
                    </div>
                    <div className="e2">
                        <h2>Col</h2>
                    </div>
                    <div className="e4">
                        <h2>Col</h2>
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