import React, { Component } from "react";
import GenericComponent from "../components/GenericComponent";
import Website from "./website/Website";

export default class Home extends GenericComponent {
  render() {
    return <Website/>       
  }
}