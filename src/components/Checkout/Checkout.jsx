import "./Checkout.css";
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { Form, Button } from "react-bootstrap";

const Checkout = () => {
  const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(
    CarritoContext
  );
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrdenId] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor, complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("El email no coincide");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Error al crear la orden; intente nuevamente");
          });
      })
      .catch((error) => {
        console.log("Error al actualizar el stock", error);
        setError("Se produjo un error al actualizar el stock. Intente nuevamente");
      });
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <Form onSubmit={manejadorFormulario} className="formulario">
        {carrito.map((producto) => (
          <div key={producto.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio $ {producto.item.precio} </p>
            <hr />
          </div>
        ))}
        <div>
          <p>Total : {total}</p>
        </div>
        <hr />
        <Form.Group controlId="nombre">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="apellido">
          <Form.Label>Apellido:</Form.Label>
          <Form.Control
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="telefono">
          <Form.Label>Teléfono:</Form.Label>
          <Form.Control
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="emailConfirmacion">
          <Form.Label>Confirma e-mail:</Form.Label>
          <Form.Control
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </Form.Group>

        {error && <Alert variant="danger">{error}</Alert>}

        <Button className="ultimoBoton" variant="primary" type="submit">
          Finalizar Compra
        </Button>
      </Form>
      {orderId && (
        <strong className="ordenId">
          ¡Gracias por su compra! El número de orden es {orderId}. <hr /> Recibira un mail en su cuenta {email} con la orden de pago
        </strong>
      )}
    </div>
  );
};

export default Checkout;
