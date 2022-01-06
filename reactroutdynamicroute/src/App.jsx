import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./componants/Home";
import { Navbar } from "./componants/Navbar";
import { Products } from "./componants/Products";
import { ProductsDet } from "./componants/Productsid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductsDet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
