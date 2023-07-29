import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"
import facebookIcon from '/@img/facebook.svg';
import twitterIcon from '/@img/twitter.svg';
import instagramIcon from '/@img/instagram.svg';

const Footer = () => {
    return (
        <footer className="footerIndex py-3">
			<div className="container p-4 text-center">
				<div className="row">
				<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
					<h5 className="text-uppercase">Contacto</h5>
					<p>
					Puedes contactarnos por teléfono al +1 234 567 8901 o por correo electrónico a info@abuelarte.com
					</p>
				</div>
				<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
					<h5 className="text-uppercase">Enlaces</h5>
					<ul className="list-unstyled mb-0">
					<li>
						<a href="/">Inicio</a>
					</li>
					<li>
						<a href="AboutUs">Nosotros</a>
					</li>
					</ul>
				</div>
				<div  className="col-lg-3 col-md-6 mb-md-0">
					<h5 className="text-uppercase mb-0">Redes sociales</h5>
                    <ul className="social-icons list-unstyled">
                        <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <img className="icono" src={facebookIcon} alt="icono facebook" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.twitter.com" target="_blank">
                            <img className="icono" src={twitterIcon} alt="icono twitter" />
                        </a>
                        </li>
                        <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <img className="icono" src={instagramIcon} alt="icono instagram" />
                        </a>
                        </li>
                    </ul>
				</div>
				</div>
			</div>
			<div className="text-center">
				© 2023 abuelarte - Natalia Chehda
			</div>
		</footer>
    )
}

export default Footer