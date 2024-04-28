import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Steps from "./pages/Steps"
import Users from "./pages/Users"
import Inventary from "./pages/Inventary"
import Products from "./pages/Products"
import Menu from "./pages/members/Menu"
import Orders from "./pages/members/Orders"
import OrdersReady from "./pages/members/Orders-Ready"
import Pay from "./pages/members/Pay"
import BillAdmin from "./pages/BillAdmin"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/users" element={<Users />} />
        <Route path="/inventary" element={<Inventary />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bill" element={<BillAdmin />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders-ready" element={<OrdersReady />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
