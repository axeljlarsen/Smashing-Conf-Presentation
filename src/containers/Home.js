import React, { Component } from 'react';
import GenericComponent from '../components/GenericComponent';
import UserGroup from './userGroup/UserGroup';

export default class Home extends GenericComponent {
  render() {
    return <UserGroup/>       
  }
}