import './App.css';
import FrontPage from "./components/pages/FrontPage"
import LoginPage from "./components/pages/LoginPage"
import ProductsPage from "./components/pages/ProductsPage"
import ProductsDetailsPage from "./components/pages/ProductsDetailsPage"
import {BrowserRouter as Router ,Switch, Route ,Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/login">Login</Link></li>
          <li> <Link to="/products">Products</Link></li>
          <li> <Link to="/products/12">Products 12</Link></li>
        </ul>
      <Switch>
      <Route path="/" component ={FrontPage} exact/>
      <Route path="/login" component ={LoginPage}/>
      <Route path="/products" component ={ProductsPage} exact/>
      <Route path="/products/:productId" component ={ProductsDetailsPage}/>
      </Switch>
        


      </Router>
    
    </div>
  );
}

export default App;
