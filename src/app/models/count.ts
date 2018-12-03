import { produce } from 'immer';

const defaultState = Object.freeze({
  count: 0
});

export default {
  state: defaultState,
  effects: dispatch => ({
    async increaseAsync(payload: number) {
      const count = await async(payload, 1000);
      dispatch({
        type: 'count/increaseSuccess',
        payload: count
      });
    }
  }),
  reducers: {
    increaseSuccess(state, payload: number) {
      return produce(state, draft => {
        draft.count = ++payload;
      });
    }
  }
} as App.Store.Model<Count>;

function async(count: number, delay: number): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(count);
    }, delay);
  });
}
