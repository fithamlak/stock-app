import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StocksContainer from '../../components/StocksContainer';
import store from '../store';

const mockStore = configureStore([]);

describe('Tests for redux state of Stocks', () => {
  it('expects to initially set stocks as an empty object', () => {
    const state = store.getState().stocks;
    const initialState = {
      stocksArray: [],
      ifSucceed: false,
      ifLoading: false,
      errors: null,
    };
    expect(state).toEqual(initialState);
  });
  it('expects to display one stock from mock store', () => {
    const stocksArray = [
      {
        Symbol: 'SAP',
        companyName: 'SAP SE',
      },
    ];
    const state = {
      stocks: {
        stocksArray,
        ifSucceed: false,
        ifLoading: false,
        errors: null,
      },
    };
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <StocksContainer />
        </BrowserRouter>
      </Provider>,
    );
    const companyName = screen.getByText('SAP SE');
    expect(companyName).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
  });
});
