import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Stocks from './routes/Stocks';
import Show from './routes/Show';
import About from './routes/About';
import NoMatch from './routes/NoMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Stocks />} />
        <Route path="show" element={<Show />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
