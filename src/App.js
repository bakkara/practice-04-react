import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import './App.css';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const RatesPage = lazy(() => import('./pages/RatesPage'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/rates' element={<RatesPage/>} />
        </Route>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </div>
  );
}

export default App;
