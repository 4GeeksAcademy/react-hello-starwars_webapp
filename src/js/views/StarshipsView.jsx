import React, { useEffect, useState } from 'react'
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { useParams } from 'react-router';

export const StarshipsView = (props) => {
    const { store, actions } = useContext(Context)
    const { id } = useParams()
    // const [characterData,setCharacterData] = useState(null)


    useEffect(() => {
        actions.getSingleStarship(id)
    }, [])

    const starshipData = store.singleStarship
    console.log(starshipData)
    return (
        <div>
            <div className="d-flex justify-content-around p-3 text-center">



                <div>
                    {starshipData ? (
                        <div>
                            <div className="d-flex justify-content-around">
           <div className="col-1"></div>
            <div className="col-4">
               
               <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt="Card image cap"
                         onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} />
            </div>    
            <div className="col-1"></div>
            <div className="col-5">
           
            <h1>{starshipData.name}</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            
            
            </div>      
                 
                 




            <div className="d-flex justify-content-around text-center ml-3 ">
             <div className=''>
              <div className="border-bottom p-3  rounded m-2"><h5>Name</h5></div>
              <div className=" p-3  rounded m-2">{starshipData.name}</div>

            </div>
            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Cargo Capacity</h5></div>
              <div className=" p-3 rounded m-2">{starshipData.cargo_capacity}</div>

            </div>

            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Crew</h5></div>
              <div className=" p-3  rounded m-2">{starshipData.crew}</div>
            </div>

            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Model</h5></div>
              <div className=" p-3  rounded m-2">{starshipData.model}</div>
            </div>

            <div>
              <div className="border-bottom p-3  rounded m-2"><h5>Passengers</h5></div>
              <div className=" p-3  rounded m-2">{starshipData.passengers}</div>
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
