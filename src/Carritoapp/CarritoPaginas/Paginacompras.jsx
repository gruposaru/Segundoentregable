import { Card } from "@mui/material";
import { useEffect, useState } from "react";

const Paginacompras = () => {
  const [productos, setProductos] = useState([]);

  const fetchproductos = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchproductos();
  }, []);
  return (
    <>
      <Card>e</Card>
    </>
  );
};

export default Paginacompras;
