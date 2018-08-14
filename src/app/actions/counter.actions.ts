import { Action } from '@ngrx/store';
export const INCREMENT_COUNT = 'INC_COUNT';
export const DECREMENT_COUNT = 'DEC_COUNT';


// export const incrementCount = () => {
//   return {
//       type: this.INCREMENT_COUNT,
//   };
// };

export class IncrementCounterAction implements Action {
  readonly type = INCREMENT_COUNT;

  public payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

export class DecrementCounterAction implements Action {
  readonly type = DECREMENT_COUNT;
  public payload: number;
  constructor(payload: number) {
    this.payload = payload;
  }
}

export type Actions
  = IncrementCounterAction
  | DecrementCounterAction ;
