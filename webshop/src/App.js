import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import {ContactUs} from './pages/global/ContactUs';
import Supplier from './pages/admin/Supplier';
import BookSupplier from './pages/admin/BookSupplier';
import MaintainPictures from './pages/admin/MaintainPictures';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';

function App() {
  const {loggedIn} = useContext(AuthContext);
 
  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="shops" element={<Shops />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:title" element={<SingleProduct />} />
 
        {loggedIn === true && 
          <>
            <Route path="admin" element={<AdminHome />} />
            <Route path="admin/add-product" element={<AddProduct />} />
            <Route path="admin/edit-product/:productId" element={<EditProduct />} />
            <Route path="admin/maintain-products" element={<MaintainProducts />} />
            <Route
              path="admin/maintain-categories"
              element={<MaintainCategories />}
            />
            <Route path="admin/maintain-shops" element={<MaintainShops />} />
            <Route path="admin/maintain-pictures" element={<MaintainPictures />} />
            <Route path="admin/supplier" element={<Supplier />} />
            <Route path="admin/book-supplier" element={<BookSupplier />} />
          </>}

        {loggedIn === false &&
            // <Route path="admin/*" element={<Login />} />
            <Route path="admin/*" element={ <Navigate to={"/login"} /> } />
        }
 
        {/* loggedIn === false, siis näita neid */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* loggedIn === true, siis manuaalselt /login või /signup lehele minnes, suuna /admin */}
 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// 13.05
// 16.05 Ada läheb 11.45 ära   kogused ostukorvis, ostukorvis pikad numbrid
// Tarjetiga: 1. API päringuid 2. Kodused 3. Edit
// 20.05 kujundus, API päringud  ---> kodus Firebase
// 22.05 CSS moodulid, Firebase andmebaas
// 24.05 HomePages ja MaintainProductsis toodete võtmine
//        Vaja teha 2 listi -> 1.mida näitan välja 2.kust võtan
//        Loader
//        Edit-s ei muuda -> pärast refreshi muudab
//        Võtame kategooriad avalehel kasutusele, Addis, Editis

// let tüüpi muutuja rerenderdamisel
// useEffecti dependency array võimekust näidata

// 03.06
// 07.06 TW proovitöö üle vaatamine, TypeScript, Redux
// 10.06 useContext sisaldav proovitöö üle vaatamine
// 20.06 --> lõpuprojekti esitlemine / täiendamine  2ak/h
//              10.00-11.30   React + Firebase

// TypeScript -> lisakiht JavaScriptile, tundmaks ära tüüpe
// Redux -> Contexti edasiarendus

// useMemo()
// useReducer()

// * Ostukorvis poleks hind muudetav -> võtame tooted andmebaasist

// useQueryParams()
// * Makse järelkontroll
// * CSS best-practices


// * Sisselogimise / registreerumise puhul küsime Firebase-lt kes on sisselogitud
//      reaalselt tokenit saata Firebase-i
// * Toodet lisades võtab pildi arvutist