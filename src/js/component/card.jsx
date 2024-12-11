import React from 'react'
import ReactDOM from "react-dom";
import PropType from "prop-types";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Card = (props) => {
        return (
                <div className="card flex-shrink-0" style={{ width: "18rem" }}>

                       
                        <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`} alt="Card image cap"
                         onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} />
                        <div className="card-body">
                                <h5 className="card-title">{props.name}</h5>
                                <p className="card-text"></p>
                                <Link to={`/info/${props.id}`} >
                                        <button href="#" className="btn btn-primary">See More</button>
                                </Link>
                        </div>
                </div>

        )
}
Card.propTypes = {
        name: PropType.string,
        id: PropType.string,
        type: PropType.string,
}