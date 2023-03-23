import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Stocks from './routes/Stocks';
import Show from './routes/Show';
import About from './routes/About';
import NoMatch from './routes/NoMatch';
import StockPage from './routes/Stock';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Stocks />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="stock" element={<StockPage />}>
          <Route path=":slug" element={<Show />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
