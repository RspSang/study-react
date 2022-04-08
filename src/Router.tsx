import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./components/coins";
import Coin from "./components/coin";
import Chart from "./components/chart";
import Price from "./components/price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
