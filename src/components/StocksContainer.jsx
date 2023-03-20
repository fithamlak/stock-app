import Stock from './Stock';

const StocksContainer = () => {
  const stocks = [{ companyName: 'Toyota' }, { companyName: 'Microsoft' }];

  return (
    <>
      <h4>List of CompanyName</h4>
      {stocks.map((stock) => (
        <Stock
          key={stock.companyName}
          companyName={stock.companyName}
        />
      ))}
    </>
  );
};

export default StocksContainer;
