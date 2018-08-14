import * as fromCounter from './../actions/counter.actions';


const initialState =  {
  counter: 0
};

export function counterReducer(state = initialState, action: fromCounter.Actions){

  switch (action.type) {
    case fromCounter.INCREMENT_COUNT : {
      console.log(state);
      return {
        ...state,
        counter : state.counter + action.payload
      };
    }
    case fromCounter.DECREMENT_COUNT : {
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
