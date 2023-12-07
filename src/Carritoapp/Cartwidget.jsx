import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Paginacompras from "./CarritoPaginas/Paginacompras";
import PaginaCarrito from "./CarritoPaginas/PaginaCarrito";

function Cartwidget() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
      <Routes>
        <Route path="/" element={<Paginacompras></Paginacompras>}></Route>
        <Route path="/carrito" element={<PaginaCarrito></PaginaCarrito>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
  </Routes>
  </div>
    </>
  );
}

export default Cartwidget;
