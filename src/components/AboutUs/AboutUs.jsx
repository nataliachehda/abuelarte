import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'


const AboutUs = () => {
  return (
    <div className='aboutus'>
      <h2>Sobre Nosotros</h2>
      <p>
        Nuestra tienda virtual es una cooperativa de abuelos que comparten su talento y dedicación 
        para crear productos únicos y especiales: juguetes, ropa y decoración hechos a mano y con mucho amor.
        Nuestro objetivo es ofrecer productos delaborados a mano con materiales de calidad, 
        llenos de cariño.
      </p>
      <h3>Características</h3>
      <ul>
        <li>Amplia selección de productos hechos a mano por abuelos.</li>
        <li>Categorías de productos: juguetes, ropa, decoración y amigurumis.</li>
        <li>Detalles de cada producto, incluyendo nombre, descripción, precio y disponibilidad.</li>
        <li>Gestión de stock por encargo.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
