import AppDispatcher from '../AppDispatcher';

const CalcActions = {
  add(number) {
    AppDispatcher.dispatch({
      type: 'ADD_NUMBER',
      payload: {
        number,
      }
    })
  },

  addOp(operator) {
    AppDispatcher.dispatch({
      type: 'ADD_OPERATOR',
      payload: {
        operator,
      }
    })
  },

  evaluate() {
    AppDispatcher.dispatch({
      type: 'EVAL_NUMS',
    })
  },

  deleteChar() {
    AppDispatcher.dispatch({
      type: 'DEL_CHAR',
    })
  },

  clearInput() {
    AppDispatcher.dispatch({
      type: 'CLEAR_ALL',
    })
  },

  mystery() {
    AppDispatcher.dispatch({
      type: 'BOOB_IES',
    })
  },

  cont() {
    AppDispatcher.dispatch({
      type: 'CONT_TOTAL',
    })
  }


}

export default CalcActions;
