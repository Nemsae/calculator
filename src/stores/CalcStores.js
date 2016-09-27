import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import CalcActions from '../actions/CalcActions';

let _input = '';
let _total = undefined;

class CalcStores extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'ADD_NUMBER':
          let { number } = action.payload;
          _input+=number;
          this.emit('CHANGE');
          break;

        case 'ADD_OPERATOR':
          let { operator } = action.payload;
          let oper = this.checkOperator(operator);
          _input+=oper;
          this.emit('CHANGE');
          break;

        case 'EVAL_NUMS':
          let total = parseFloat(eval(_input));
          _total = total;
          this.emit('CHANGE');
          break;

        case 'DEL_CHAR':
          let deleted = _input.slice(0, -1);
          _input = deleted;
          this.emit('CHANGE');
          break;

        case 'CLEAR_ALL':
          _input = '';
          _total = undefined;
          this.emit('CHANGE');
          break;

        case 'BOOB_IES':
          _input = '5318008';
          _total = '8008135';
          this.emit('CHANGE');
          break;

        case 'CONT_TOTAL':
          let temp = _total;
          _input = temp;
          _total = undefined;
          this.emit('CHANGE');
          break;
      }
    })
  }

  checkOperator(op) {
    let x = undefined;
    let lastChar = _input.toString().substr(_input.length - 1);
    if(lastChar.match(/\D/g)) {
      x = '';
    } else {
      x = op;
    }
    return x;
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getInput() {
    return _input;
  }

  getTotal() {
    return _total;
  }

}

export default new CalcStores();
