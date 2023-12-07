import { useState } from "react"


const Card = (imagen,titulo, descripcion,precio) => {

  return (
    <>
    <div>sientro card</div>
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen"></img>
      <div  className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>


      </div>
  </div>
    </>
  )
}

export default Card

