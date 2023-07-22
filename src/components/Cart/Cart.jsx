import "./Cart.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(
    CarritoContext
  );

  if (cantidadTotal === 0) {
    return (
      <div className="carrito">
        <h2>No hay productos en el carrito</h2>
        <Link to="/" className="btn btn-primary">Ver productos</Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <h3>Total: $ {total}</h3>
      <h3>Cantidad total: {cantidadTotal}</h3>
      <button className="btn btn-danger" onClick={() => vaciarCarrito()}>
        Vaciar Carrito
      </button>
      <hr />
      <Link to="/checkout" className="btn btn-primary botonFinal">
        Finalizar Compra
      </Link>
    </div>
  );
};

export default Cart;