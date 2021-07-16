import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<p className="copyright">&copy; Matilda Mared 2021</p>
			<nav className="contact">
				<ul className="contact__list">
					<li className="contact__item">
						<a
							href="https://github.com/MatildaMared"
							target="_blank"
							id="github"
							className="contact__link">
							<i className="icon bx bxl-github bx-tada-hover"></i>
						</a>
					</li>
					<li className="contact__item">
						<a
							href="mailto:matildamared@live.se"
							id="mail"
							className="contact__link">
							<i className="icon bx bx-mail-send bx-tada-hover"></i>
						</a>
					</li>
					<li className="contact__item">
						<a
							href="https://www.linkedin.com/in/matilda-mared"
							target="_blank"
							id="linkedin"
							className="contact__link">
							<i className="icon bx bxl-linkedin-square bx-tada-hover"></i>
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
