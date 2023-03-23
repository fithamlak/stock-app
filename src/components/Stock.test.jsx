import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Stock from './Stock';
import store from '../redux/store';

const SampleStock = {
  symbol: 'CRM',
  companyName: 'Salesforce, Inc.',
  marketCap: 188680000000,
  sector: 'Technology',
  beta: 1.2094,
  price: 188.68,
  exchangeShortName: 'NYSE',
  volume: 4379287,
  lastAnnualDividend: 0,
};

describe('test suite for Stock component', () => {
  it('expects to render a snapshot of the Stock component', () => {
    const stockComponent = render(
      <Provider store={store}>
        <Stock
          symbol={SampleStock.symbol}
          companyName={SampleStock.companyName}
          sector={SampleStock.sector}
          marketCap={SampleStock.marketCap}
          beta={SampleStock.beta}
          price={SampleStock.price}
          exchangeShortName={SampleStock.exchangeShortName}
          volume={SampleStock.volume}
          lastAnnualDividend={SampleStock.lastAnnualDividend}
        />
      </Provider>,
    );
    expect(stockComponent).toMatchSnapshot();
  });
});
