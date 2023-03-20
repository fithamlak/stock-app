import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../redux/stocks/stocksSlice';
import Stock from './Stock';

const StocksContainer = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.stocks.ifSucceed);
  const stocksArray = useSelector((store) => store.stocks.stocksArray);

  useEffect(() => {
    if (stocksArray.length === 0) {
      dispatch(fetchStocks());
    }
  }, [dispatch, ifSucceed, stocksArray]);

  return (
    <>
      <h4>List of CompanyName</h4>
      {stocksArray.map((stock) => (
        <Stock
          key={stock.symbol}
          companyName={stock.companyName}
        />
      ))}
    </>
  );
};

export default StocksContainer;
