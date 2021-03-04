
import "./mycss.css"
import './App.css';
import Contact from "./components/pages/contact/Contact"
import Index from "./components/pages/indexPage/Index"
import Products from "./components/pages/products/Products"
import Login from "./components/pages/login/Login"
import Register from "./components/pages/register/Register"
import ProductByArticleNo from "./components/pages/productByArticleNo/ProductArticleNo"
import Header from "./components/Header"
import Footer from "./components/Footer"

import {BrowserRouter,Switch,Route} from "react-router-dom"
function App() {

  
  return (
    <div className="page-container">

      <BrowserRouter>
      <Header/>
      <div className="container">
      <Switch>

      <Route path ="/" component={Index} exact/>
      <Route path ="/products" component={Products} exact />
      <Route path ="/products/:articleNo" component={ProductByArticleNo} />
      <Route path ="/contact" component={Contact} />
      <Route path ="/login" component={Login} />
      <Route path ="/register" component={Register}/>
      </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;





