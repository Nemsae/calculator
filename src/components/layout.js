import React, { Component } from 'react';

import CalcInput from './CalcInput';
import CalcOutput from './CalcOutput';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12 text-center">
          <h1 className="text-center">React Calculator</h1>
          <CalcOutput />
        </div>
        <div className="col-xs-12 text-center">
          <CalcInput />
        </div>
      </div>
    )
  }
}
