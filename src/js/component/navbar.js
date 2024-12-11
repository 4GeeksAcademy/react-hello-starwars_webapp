import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from 'react';


export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			
			<div className="mx-3">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyadim8FWsXGqhpwrfW_hQTeoYCJPCf47ROwgTqh8aU8DF6vN8Abn1Bcy1GuTP2p7qYA&usqp=CAU" className="starWars" alt="..."/>
			</Link>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>

			<div className="btn-group p-3" role="group">
				<button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Favourites {store.favourites.length}
				</button>
				<div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
					<a className="dropdown-item" href="#">Dropdown link</a>
					<a className="dropdown-item" href="#">Dropdown link</a>
				</div>
			</div>
		</nav>
	);
};
