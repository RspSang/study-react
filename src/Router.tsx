import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./components/coins";
import Coin from "./components/coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
