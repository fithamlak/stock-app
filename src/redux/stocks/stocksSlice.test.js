import store from '../store';

it('intially stock was empty', () => {
  const state = store.getState().stocks;
  const initialState = {
    stocksArray: [],
    ifSucceed: false,
    ifLoading: false,
    errors: null,
  };
  expect(state).toEqual(initialState);
});
