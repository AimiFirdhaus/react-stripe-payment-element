import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import Register from "./Register";
import Prices from "./Prices";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
