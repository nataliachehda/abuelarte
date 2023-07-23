import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className='contenedorItem tarjeta'>
      <h2> {nombre} </h2>
      <h3>Precio: ${precio} </h3>
      <h5>ID: {id} </h5>
      <p> Descripción: {descripcion}</p>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? (
        <>
          <Link to="/cart" className="btn btn-primary">
            Terminar compra
          </Link>
          <Link to="/" className="btn btn-secondary">
            Ver más productos
          </Link>
        </>
      ) : (
        <>
          <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          <Link to="/" className="btn btn-secondary">
            Ver más productos
          </Link>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
