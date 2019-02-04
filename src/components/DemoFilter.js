import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardType, AppRoutes, CSSGridSteps, CSSGridStepLabels } from '../Constants';
import GenericComponent from "./GenericComponent";

export default class DemoFilter extends GenericComponent {

    onFilterItemChange = (item) => {
        const steps = this.props.selectedItems.slice(0);
        const ind = steps.lastIndexOf(item);
        if (ind > -1) {
            steps.splice(ind, 1);
        }
        else {
            steps.push(item);
        }
        this.props.onSelect(steps);
    }

    render() {
        return (
            <ul className="demo-filter">
                {Object.keys(this.props.availableItems).map(item => {
                    return <li>
                                <label>
                                    <input type="checkbox"
                                        value={this.props.availableItems[item]}
                                        checked={this.props.selectedItems.includes(this.props.availableItems[item])}
                                        onChange={() => this.onFilterItemChange(this.props.availableItems[item])} />
                                    {this.props.availableItems[item].label}
                                </label>
                            </li>
                })}
            </ul>
        );
    }
}