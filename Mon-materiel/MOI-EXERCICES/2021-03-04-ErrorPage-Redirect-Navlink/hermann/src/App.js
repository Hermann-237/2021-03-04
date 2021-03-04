
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
import {useState} from "react"


import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom"
function App() {
  const [LoginValue, setLoginValue] = useState(false)
  
  return (
    <div className="page-container">

      <BrowserRouter>
      <Header/>
      <div className="container">
      <Switch>
      <Route path ="/" component={Index} exact/>

      <Route path ="/products"  exact >
        {(LoginValue)? <Products/> : <Redirect to="/login"/>}
      </Route>

      <Redirect from="/notebooks" to="/products"/> {/* ici tu fais la redirection */}
      
      <Route path ="/products/:articleNo" component={ProductByArticleNo} />
      <Route path ="/contact" component={Contact} />
      <Route path ="/login"  >
        <Login LoginValue ={LoginValue} setLoginValue ={setLoginValue}/>
      </Route>
      <Route path ="/register" component={Register}/>
      <Route component={()=> <h1 className="text-center">404 page not found</h1>}/>
      </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;





