import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { useDispatch } from "react-redux";
import { baseCurrencyThunk } from "./redux/operation";
import { setBaseCurrency } from "./redux/slice";

const HomePage = lazy(() => import("./pages/HomePage"));
const RatesPage = lazy(() => import("./pages/RatesPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      const crd = pos.coords;
      dispatch(baseCurrencyThunk(crd));
    }

    function error(error) {
      dispatch(setBaseCurrency("USD"));
      console.warn(`${error.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/rates" element={<RatesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
