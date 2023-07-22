import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "../img/cart.jpg";
    return (
        <div>
            <Link to="/cart">
            <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
            {
                cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
            }
            </Link>
        </div>
    )
}

export default CartWidget