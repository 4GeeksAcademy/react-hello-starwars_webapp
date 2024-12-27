import React, { useEffect, useState } from 'react'
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { useParams } from 'react-router';

export const PlanetsView = (props) => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    // const [characterData,setCharacterData] = useState(null)


    useEffect(() => {
        actions.getSinglePlanet(id)
    }, [])

    const planetData = store.singlePlanet
    console.log(planetData)
    return (
        <div>
            <div className="d-flex justify-content-around p-3 text-center">



                <div>
                    {planetData ? (
                        <div>
                            
                            <div className="d-flex justify-content-around">
           <div className="col-1"></div>
            <div className="col-4">
               
               <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Card image cap"
                         onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} />
            </div>    
            <div className="col-1"></div>
            <div className="col-5">
           
            <h1>{planetData.name}</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            
            
            </div>      
                 
                 




            <div className="d-flex justify-content-around text-center ml-3 ">
             <div className=''>
              <div className="border-bottom p-3  rounded m-2"><h5>Name</h5></div>
              <div className=" p-3  rounded m-2">{planetData.name}</div>

            </div>
            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Climate</h5></div>
              <div className=" p-3 rounded m-2">{planetData.climate}</div>

            </div>

            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Gravity</h5></div>
              <div className=" p-3  rounded m-2">{planetData.gravity}</div>
            </div>

            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Population</h5></div>
              <div className=" p-3  rounded m-2">{planetData.population}</div>
            </div>

            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Terrain</h5></div>
              <div className=" p-3  rounded m-2">{planetData.terrain}</div>
            </div>
             
            </div>


             
             
             
              </div>

              ):(
                <p>cargando</p>
              )}
                      

            </div>



          </div>





    </div>
  )
}
