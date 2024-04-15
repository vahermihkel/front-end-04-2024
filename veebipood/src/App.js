// import logo from './logo.svg';
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Kinkekaart from "./pages/Kinkekaart";
import Esindused from "./pages/Esindused";
import Ariklient from "./pages/Ariklient";
import Ostukorv from "./pages/Ostukorv";

function App() {
  return (
    <div className="App">
      <Link to="/avaleht">
        <img
          className="pilt"
          src="https://dalton.ee/wp-content/uploads/2019/10/nobercar1.jpg"
          alt=""
        />
      </Link>

      <Link to="/osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="/esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="/arikliendile">
        <button className="nupp">Äriklient</button>
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      {/* path="", mis järgneb localhost:3000-le ja <div>, millist sisu näidatakse */}
      <Routes>
        <Route path="/" element={ <Navigate to="/avaleht" /> } />
        <Route path="avaleht" element={ <Avaleht /> } />
        <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
        <Route path="esindused" element={ <Esindused /> }></Route>
        <Route path="arikliendile" element={ <Ariklient /> }></Route>
        <Route path="ostukorv" element={ <Ostukorv /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
