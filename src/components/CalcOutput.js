import React, { Component } from 'react';

import CalcStores from '../stores/CalcStores';

export default class CalcOutput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: CalcStores.getInput(),
      total: CalcStores.getTotal(),
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    CalcStores.startListening(this._onChange);
  }

  componentWillUnmount() {
    CalcStores.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      input: CalcStores.getInput(),
      total: CalcStores.getTotal(),
    })
  }

  render() {
    const { input, total } = this.state;
    return (
      <div>
        <div className='something'>
          <input className='text-center' value = { input || 0 } />
          <h3> { total } </h3>
        </div>
      </div>
    )
  }
}
