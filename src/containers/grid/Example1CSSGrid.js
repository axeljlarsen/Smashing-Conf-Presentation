import React, { Component } from "react";
import bgsm from '../../assets/img/square-image.jpg';
import bglg from '../../assets/img/large-image.jpg';
import './Grids.scss';
import './GridLayering.scss';
import GenericComponent from "../../components/GenericComponent";

export default class Example1CSSGrid extends GenericComponent {

    render() {
        return (
            <section className="bg-silver">
                <div className="grid-layering">
                    <div className="cal">
                        <div className="month">June</div>
                        <div className="date">18</div>
                    </div>
                    <div className="bg-sm">
                        <img src={bgsm} />
                    </div>
                    <div className="bg-lg">
                        <img src={bglg} />
                    </div>
                    <div className="text">
                        <h1 className="p-2">My Sample Heading</h1>
                        <hr />
                        <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, nulla vestibulum convallis feugiat, metus lorem vulputate purus, et maximus erat nisi id massa. Vivamus vel faucibus mauris. Pellentesque non ipsum dignissim, feugiat quam sed, egestas sem. Duis lorem eros, hendrerit sed tincidunt quis, scelerisque nec velit. Nulla laoreet lacus sem, facilisis.</p>
                    </div>
                    <button className="button">
                        <span>Call To Action</span>
                    </button>
                </div>
            </section>
        );
    }
}