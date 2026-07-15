import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";

import DashboardLayout from "./assets/layouts/DashboardLayout";

import Dashboard from "./assets/pages/Dashboard";
import Stocks from "./assets/pages/Stocks";
import StockDetails from "./assets/pages/StockDetails";
import Predictions from "./assets/pages/Predictions";
import Portfolio from "./assets/pages/Portfolio";
import Watchlist from "./assets/pages/Watchlist";
import News from "./assets/pages/News";
import Settings from "./assets/pages/Settings";

import NotFound from "./assets/pages/NotFound";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/register" 
          element={<Register />} 
        />


        <Route 
          path="/" 
          element={<DashboardLayout />}
        >

          <Route 
            index 
            element={<Dashboard />} 
          />


          <Route 
            path="dashboard" 
            element={<Dashboard />} 
          />


          <Route 
            path="stocks" 
            element={<Stocks />} 
          />


          <Route 
            path="stocks/:id" 
            element={<StockDetails />} 
          />


          <Route 
            path="predictions" 
            element={<Predictions />} 
          />


          <Route 
            path="portfolio" 
            element={<Portfolio />} 
          />


          <Route 
            path="watchlist" 
            element={<Watchlist />} 
          />


          <Route 
            path="news" 
            element={<News />} 
          />


          <Route 
            path="settings" 
            element={<Settings />} 
          />


        </Route>


        <Route 
          path="*" 
          element={<NotFound />} 
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;