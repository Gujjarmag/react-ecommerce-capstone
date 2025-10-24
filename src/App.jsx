import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/contact" element={<Home />}></Route>
            <Route path="/checkout" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
