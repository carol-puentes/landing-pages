import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../Componentes/FooterStyle";
import map from '../img/mapa.png'

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>  El Sabor De La Empanada	</h1>
	<Container>
		<Row>
		<Column>
			<Heading style={{"marginBottom":"20px"}}>Nuestos Telefonos De Contactos</Heading>
			<FooterLink>320-850-6932</FooterLink>
			<FooterLink>317-852-6751</FooterLink>
			<FooterLink>313-4281-642</FooterLink>
		</Column>

		<Column>
			<Heading style={{"margin-left": "35px","marginBottom":"20px"}}>Dirección</Heading>
			<FooterLink>Cra. 1 # 30 - 56 # 30 - 2a</FooterLink>
			<FooterLink style={{"margin-left": "40px","marginTop":"-10px"}}> Neiva, Huila</FooterLink>
			<Heading style={{"margin-left": "-20px","marginBottom":"20px"}}>Horario De Atención</Heading>
			<FooterLink style={{"margin-left":"20px"}}>Lunes a Domingo</FooterLink>
			<FooterLink style={{"margin-left": "40px","marginTop":"-10px"}}>3pm - 10pm</FooterLink>
		</Column>

		<Column>
		    <a href='https://goo.gl/maps/DHiYd7dGLncBZc1w8' target="_blank">
				<img src={map} alt="Landing" style={{"width":"300px", "height":"300px"}} />
			</a>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
