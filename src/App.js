import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Link to="/">Amazone</Link>
        </div>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
