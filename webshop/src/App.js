import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AddProduct from "./pages/admin/AddProduct";
import AdminHome from "./pages/admin/AdminHome";
import EditProduct from "./pages/admin/EditProduct";
import MaintainCategories from "./pages/admin/MaintainCategories";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/global/Cart";
import HomePage from "./pages/global/HomePage";
import NotFound from "./pages/global/NotFound";
import Shops from "./pages/global/Shops";
import SingleProduct from "./pages/global/SingleProduct";
import ContactUs from './pages/global/ContactUs';
import Supplier from './pages/admin/Supplier';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:title" element={<SingleProduct />} />
 
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit-product/:productId" element={<EditProduct />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route
          path="admin/maintain-categories"
          element={<MaintainCategories />}
        />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        <Route path="admin/supplier" element={<Supplier />} />
 
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// 13.05
// 16.05 Ada läheb 11.45 ära   kogused ostukorvis, ostukorvis pikad numbrid
// Tarjetiga: 1. API päringuid 2. Kodused 3. Edit
// 20.05 kujundus, API päringud
// 22.05 Tarjet läheb 11.45 ära
// 24.05