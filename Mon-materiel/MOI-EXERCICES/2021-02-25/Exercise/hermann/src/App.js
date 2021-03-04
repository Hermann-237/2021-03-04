
import "./mycss.css"
import './App.css';
import Header from "./components/Header"
import Headline from "./components/Headline"
import Footer from "./components/Footer"
import ListProduct from "./components/ListProduct"
function App() {

  
  return (
    <div className="page-container">
      <Header />
      <Headline />
      <ListProduct/>
      <Footer />
    </div>
  );
}

export default App;





