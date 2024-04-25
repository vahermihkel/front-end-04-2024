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
import { useState } from "react";
import Tooted from "./pages/Tooted";
import Hinnad from "./pages/Hinnad";
import Tootajad from "./pages/Tootajad";
import HaldaEsindused from "./pages/HaldaEsindused";
import HaldaHinnad from "./pages/HaldaHinnad";
import HaldaTootajad from "./pages/HaldaTootajad";
import HaldaTooted from "./pages/HaldaTooted";

function App() {                        
  const [darkMode, setDarkMode] = useState(localStorage.getItem("isDarkTheme") === "true" ? true : false);

  const toLightMode = () => {
    setDarkMode(false);
    localStorage.setItem("isDarkTheme", false);
  }

  const toDarkMode = () => {
    setDarkMode(true);
    localStorage.setItem("isDarkTheme", true);
  }

  return (
    <div className={darkMode === true ? "App-dark" : "App"}>

      <Menyy />

      {darkMode === true && <img className="mode-button" onClick={toLightMode} src="/light.png" alt="" />}
      {darkMode === false && <img className="mode-button" onClick={toDarkMode} src="/dark.png" alt="" />}


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
        <Route path="tooted" element={ <Tooted /> }></Route>
        <Route path="hinnad" element={ <Hinnad /> }></Route>
        <Route path="tootajad" element={ <Tootajad /> }></Route>
        <Route path="halda-esindused" element={ <HaldaEsindused /> }></Route>
        <Route path="halda-hinnad" element={ <HaldaHinnad /> }></Route>
        <Route path="halda-tootajad" element={ <HaldaTootajad /> }></Route>
        <Route path="halda-tooted" element={ <HaldaTooted /> }></Route>
        <Route path="*" element={ <NotFound /> }></Route>
      </Routes>
    </div>
  );
}

export default App;

// 25.04
// 02.05
// 06.05
// 09.05
// 13.05
// 16.05
// 20.05
// 22.05
// 24.05
