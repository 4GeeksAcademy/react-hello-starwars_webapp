import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { useContext } from 'react';

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		<div>

			<div className="p-3 mt-2">
				<h3>Characters</h3>
				
					<div className="d-flex  overflow-auto">
						{store.characters.map((character, index) => {
							return <Card
								name={character.name}
								id={character.uid}
								type="characters"

								
							/>
						})
						}

					</div>
			
			</div>

			<div className="p-3 mt-2">
				<h3>Planets</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto">

					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.planets.map((planet, index) => {
							return <Card
								name={planet.name}
								id={planet.uid}
								type="planets"

							/>
						})
						}

					</div>
				</div>
			</div>

			<div className="p-3 mt-2">
				<h3>Starships</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto">

					<div className="d-flex flex-row flex-nowrap overflow-auto">
						{store.ships.map((ship, index) => {
							return <Card
								name={ship.name}
								id={ship.uid}
								type="starships"

							/>
						})
						}

					</div>
				</div>
			</div>
				
						</div>

					
					);
};
