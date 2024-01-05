import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import CartProvider from './components/Context/CartContext';
import Cart from "./components/Cart/Cart"
import { Checkout }  from "./components/Checkout/Checkout"

function App() {


  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>

    <Route path="/" element={<ItemListContainer/>} />
<Route path='/category/:id' element={<ItemListContainer />} />
<Route path='/item/:id' element={<ItemDetailContainer />} />
<Route path={"/cart"} element={<Cart/>} />
<Route path={"/checkout"} element={<Checkout/>} />
     
   
    </Routes>
    </CartProvider>
</BrowserRouter>

    </>
  )
}

export default App

