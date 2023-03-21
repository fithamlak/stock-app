import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Stocks from './routes/Stocks';
import Show from './routes/Show';
import About from './routes/About';
import NoMatch from './routes/NoMatch';
import Stock from './routes/Stock';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Stocks />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="stock" element={<Stock />}>
          <Route path=":slug" element={<Show />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
