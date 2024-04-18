// import logo from './logo.svg';
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Kinkekaart from "./pages/Kinkekaart";
import Esindused from "./pages/Esindused";
import Ariklient from "./pages/Ariklient";
import Ostukorv from "./pages/Ostukorv";
import Menyy from "./components/Menyy";
import LisaToode from "./pages/LisaToode";
import Seaded from "./pages/Seaded";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      
      <Menyy />

      {/* path="", mis järgneb localhost:3000-le ja <div>, millist sisu näidatakse */}
      <Routes>
        <Route path="/" element={ <Navigate to="/avaleht" /> } />
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="esindused" element={ <Esindused /> }></Route>
        <Route path="arikliendile" element={ <Ariklient /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
        <Route path="lisa-toode" element={ <LisaToode /> }></Route>
        <Route path="seaded" element={ <Seaded /> }></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
