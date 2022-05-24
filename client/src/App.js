
import './App.css';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router,Link, Navigate, Route, Routes} from "react-router-dom";
import Success from './pages/Success';
import {useSelector} from "react-redux"

function App() {

  const user = useSelector(state=>state.user.currentUser);
  return (
   <Router>
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/products/:category" element={<ProductList/>} />
     <Route path="/product/:id" element={<Product/>} />
     <Route path="/cart" element={<Cart/>} />
     <Route path="/success" element={<Success/>} />
     {user ? <Route path="/login" element={<Navigate to="/"/>}/> : <Route path="/login" element={<Login/>}/>}
     <Route path="/login" element={<Navigate to="/"/>}/>
     {user ? <Route path="/register" element={<Navigate to="/"/>}/> : <Route path="/register" element={<Register/>}/>}
     </Routes>
   </Router>
  );
}

export default App;
