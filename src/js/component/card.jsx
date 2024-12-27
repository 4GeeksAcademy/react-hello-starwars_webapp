import React from 'react'
import ReactDOM from "react-dom";
import PropType from "prop-types";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
        const { store, actions } = useContext(Context)
        return (
                <div className="card flex-shrink-0" style={{ width: "18rem" }}>

                       
                        <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`} alt="Card image cap"
                         onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} />
                        <div className="card-body ">
                                <h5 className="card-title">{props.name}</h5>
                                <p className="card-text"></p>

                                <div className='d-flex justify-content-between align-items-center'>
                                        <Link to={`/${props.type}/${props.id}`} >
                                                <button href="#" className="btn btn-primary">See More</button>
                                        </Link>
                                        <div> 
                                                <button className="btn btn-outline-warning"
                                                onClick={()=>{
                                                        actions.addToFavourites({
                                                                name: props.name,
                                                                type: props.type,
                                                                id: props.id
                                                        })
                                                }}
                                                >
                                                        <FontAwesomeIcon classname="heart"icon={faHeart} /> 
                                                </button>
                                        </div>
                               </div>
                        </div>
                </div>

        )
}
Card.propTypes = {
        name: PropType.string,
        id: PropType.string,
        type: PropType.string,
}