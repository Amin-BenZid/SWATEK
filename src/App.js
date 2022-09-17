import "./App.css";

import Home from "./pages/Home";
import ProduitList from "./pages/ProduitList";
import PartenairesList from "./pages/PartenairesList";
import Batiment from "./pages/Batiment";
import Embarques from "./pages/Embarques";
import Info from "./pages/Info";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Eror404 from "./pages/Eror404";
import jwt_decode from "jwt-decode";
import ActualitesList from "./pages/ActualitesList";
import ActualitePage from "./pages/ActualitePage";
import Equipe from "./pages/EquipeList";

function App() {
  const key = localStorage.getItem("authorization");
  var styleButton = { display: "none" };

  if (key !== null) {
    var decoded = jwt_decode(key);
    if (decoded.userIsAdmin) {
      var styleButton = { display: "flex" };
    }
  }
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <Routes>
        <Route path="/" element={<Home styleButton={styleButton} />} />
        <Route path="/produits" element={<ProduitList styleButton={styleButton} />} />
        <Route path="/partenaires" element={<PartenairesList styleButton={styleButton} />} />
        <Route path="/batiment" element={<Batiment styleButton={styleButton} />} />
        <Route path="/embarques" element={<Embarques styleButton={styleButton} />} />
        <Route path="/info" element={<Info styleButton={styleButton} />} />
        <Route path="/contact" element={<Contact styleButton={styleButton} />} />
        <Route path="/equipe" element={<Equipe styleButton={styleButton} />} />
        <Route path="/actualites" element={<ActualitesList styleButton={styleButton} />} />
        <Route path="/actualite/:id" element={<ActualitePage styleButton={styleButton} />} />
        <Route path="/admin/login" element={<Login styleButton={styleButton} />} />
        <Route path="*" element={<Eror404 />} />
      </Routes>
    </div>
  );
}

export default App;
