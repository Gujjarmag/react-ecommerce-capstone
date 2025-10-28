import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Products from "./components/Products";
import CartSection from "./components/CartSection";
import { SnackbarProvider } from "notistack";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
              <Route path="/cart" element={<CartSection />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </>
  );
}

export default App;
