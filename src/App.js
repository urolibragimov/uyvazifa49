import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Headerbottom from "./components/header-bottom/Headerbottom";
import Strstegies from "./components/strategies/Strstegies";
import Price from "./components/price/Price";
import Clients from "./components/clients/Clients";
import Join from "./components/join/Join";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Home />
        <Headerbottom />
        <Strstegies />
        <Price />
        <Clients />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
