import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {

	const { store, actions } = useContext(Context)


	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-around">
			<div className="mx-3">
				<Link to="/">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyadim8FWsXGqhpwrfW_hQTeoYCJPCf47ROwgTqh8aU8DF6vN8Abn1Bcy1GuTP2p7qYA&usqp=CAU" className="starWars" alt="..." />
				</Link>
			</div>



			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle p-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favourites {store.favourites.length}  </button>
				<ul className="dropdown-menu">
					{store.favourites.map((value) => {
						return (
							<li className="d-flex justify-content-between" key={value.name}>
								<Link to={`/${value.type}/${value.id}`} className="dropdown-item">
									{value.name}
								</Link>
								<button className="btn button pr-2"
									onClick={() => {
										actions.removeFromFavourites(value.name)
									}}
								>
									<FontAwesomeIcon icon={faTrash}/>
								</button>
							</li>
						)
					})}

				</ul>
			</div>


		</nav>
	);
};
