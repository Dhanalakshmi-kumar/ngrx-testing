import * as counterActions from './../actions/counter.actions';


const initialState =  {
  counter: 0
};

export function counterReducer(state = initialState, action: counterActions.Actions){

  switch (action.type) {
    case counterActions.INCREMENT_COUNT : {
      console.log(state);
      return {
        ...state,
        counter : state.counter + action.payload
      };
    }
    case counterActions.DECREMENT_COUNT : {
      console.log('DECREMENT_COUNT');
      console.log(state);
      return {
        ...state,
        counter : state.counter - action.payload
      };
    }
    default: {
      return state;
    }
  }

}
