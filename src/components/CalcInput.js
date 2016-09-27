import React, { Component } from 'react';

import CalcActions from '../actions/CalcActions'
import CalcStores from '../stores/CalcStores';

export default class CalcInput extends Component {
  constructor(props) {
    super(props);

    this._addNum = this._addNum.bind(this);
    this._addOperator = this._addOperator.bind(this);
    this._calculate = this._calculate.bind(this);
    this._delete = this._delete.bind(this);
    this._clear = this._clear.bind(this);
    this._cont = this._cont.bind(this);
    this._mystery = this._mystery.bind(this);
  }

  _addNum(e) {
    let num = e.target.id;
    CalcActions.add(num);
  }

  _addOperator(e) {
    let operator = e.target.id
    CalcActions.addOp(operator)
  }

  _calculate() {
    CalcActions.evaluate();
  }

  _delete() {
    CalcActions.deleteChar();
  }

  _clear() {
    CalcActions.clearInput();
  }

  _mystery() {
    CalcActions.mystery();
  }

  _cont() {
    CalcActions.cont();
  }

  render() {
    return (
      <div>
        <table className='myTable'>
          <tbody>
            <tr>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='7'>7</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='8'>8</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='9'>9</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addOperator} id='/'>%</button></td>
            </tr>
            <tr>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='4'>4</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='5'>5</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='6'>6</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addOperator} id='*'>X</button></td>
            </tr>
            <tr>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='1'>1</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='2'>2</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='3'>3</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addOperator} id='-'>-</button></td>
            </tr>
            <tr>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='0'>0</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addNum} id='.'>.</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._calculate} id='='>=</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._addOperator} id='+'>+</button></td>
            </tr>
            <tr>
              <td><button className='btn btn-default btn-block' onClick={this._delete}>DEL</button></td>
              <td><button className='btn btn-default btn-block btn-danger' onClick={this._clear}>AC</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._mystery}>???</button></td>
              <td><button className='btn btn-default btn-block' onClick={this._cont}>...</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
