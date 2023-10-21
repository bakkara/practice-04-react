import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from "react";
import './App.css';
import Layout from './components/Layout';
import { userInfo } from './services/getUserInfo';

const HomePage = lazy(() => import('./pages/HomePage'));
const RatesPage = lazy(() => import('./pages/RatesPage'));

function App() {

  useEffect(() => {
    if (navigator.geolocation)
    {navigator.geolocation.getCurrentPosition(position => {
                                                const lat = position?.coords?.latitude;
                                                const long = position?.coords?.longitude;
    userInfo({lat, long});
                                              })
                                            }
  }, [])
  

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
