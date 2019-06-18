import React, { Component } from 'react';
import Reader from '../components/Reader/Reader';
import publication from '../publications.json';

export default class ReaderPage extends Component {
  render() {
    return <Reader items={publication} />;
  }
}
