/* eslint-disable react/prop-types */
import "./Producto.css"
import { Button } from "react-bootstrap"

export default function Producto({title = "Producto sin nombre", desc, prize, image, stock}) {
    let stockDisponible = {
        color: "green"
    }
    let sinStock = {
        color: "red"
    }

  return (
    <>
        <h1 style={{color: "red"}}>{title}</h1>
        <img src={image} alt="" style={{width:"250px"}} />
        <p>Descripcion del producto: {desc}</p>
        <p style={stock == 0 ? sinStock : stockDisponible} > {  stock == 0 ? "No hay stock": "Stock=" + stock  } </p>
        <p>Precio= {prize}</p>
        <Button>Comprar</Button>

    </>
  )
}
