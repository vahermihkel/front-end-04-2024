// import logo from './logo.svg';
import "./App.css";
// võtab tüki sealt moodulist --> võimalik veel võtta
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
// võtab tüki sealt moodulist --> võimalik veel võtta
import { useState } from "react";
import Tooted from "./pages/Tooted";
import Hinnad from "./pages/Hinnad";
import Tootajad from "./pages/Tootajad";
import HaldaEsindused from "./pages/HaldaEsindused";
import HaldaHinnad from "./pages/HaldaHinnad";
// ilma loogeliste sulgudeta võtab terve selle lehe/faili
import HaldaTootajad from "./pages/HaldaTootajad";
import HaldaTooted from "./pages/HaldaTooted";
import YksToode from "./pages/YksToode";
import YksHind from "./pages/YksHind";
import YksTootaja from "./pages/YksTootaja";
import YksEsindus from "./pages/YksEsindus";
import MuudaToode from "./pages/MuudaToode";
import MuudaHind from "./pages/MuudaHind";
import MuudaTootaja from "./pages/MuudaTootaja";
import MuudaEsindus from "./pages/MuudaEsindus";
import Shops from "./pages/Shops";
import { ContactUs } from "./pages/ContactUs";

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
        <Route path="toode/:nimi" element={ <YksToode /> }></Route>
        <Route path="hind/:summa" element={ <YksHind /> }></Route>
        <Route path="tootaja" element={ <YksTootaja /> }></Route>
        <Route path="esindus" element={ <YksEsindus /> }></Route>
        <Route path="muuda-toode/:index" element={ <MuudaToode /> }></Route>
        <Route path="muuda-hind/:index" element={ <MuudaHind /> }></Route>
        <Route path="muuda-tootaja" element={ <MuudaTootaja /> }></Route>
        <Route path="muuda-esindus" element={ <MuudaEsindus /> }></Route>
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// Firebase-i üleslaadimiseks
// npm run build   --> pakib failid kokku "build" kausta
// firebase deploy   --> saadab kokku pakitud failid Firebase-i serverisse


// 25.04
// 02.05
// 06.05 - * sorteerimine/filtreerimine õige asi, objektid
// * kontroll kui ei ole õige number URLs
// 09.05 - uus Eng projekt - tõlge, bootstrap UI Library
// 13.05
// 16.05
// 20.05
// 22.05
// 24.05
