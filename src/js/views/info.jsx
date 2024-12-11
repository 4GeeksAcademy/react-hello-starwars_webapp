import React, {useEffect, useState} from 'react'
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { useParams } from 'react-router';

export const info = (props) => {
  const { store, actions } = useContext(Context)
  const {id} = useParams()
  // const [characterData,setCharacterData] = useState(null)
  // console.log(characterData)
  // console.log(id)

  useEffect(()=>{

  // actions.singleCharacter(id).then((data)=>{
  //   setCharacterData(data.result.properties)
  // })
  actions.getSingleCharacter(id)
  },[])

  const characterData= store.singleCharacter
console.log(characterData)
  return (
    <div>
          <div className="d-flex justify-content-around p-3 text-center">
          
            {/* <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.id}.jpg`} alt="Card image cap"
                         onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }} /> */}

            <div>
              {characterData ? (
                <h1>{characterData.name}</h1>
              ):(
                <p>cargando</p>
              )}
                      <h3></h3>
                      <p>lorem impsum</p>

            </div>

            <div className="d-flex justify-content-around p-3 text-center" style={{ color: "#db2818" }}>
              <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}>hi</div>
              <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}>hi</div>
              <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}>hi</div>
              <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}>hi</div>
              <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}>hi</div>
              <div className="col-md-3 p-3 text-light rounded m-2" style={{ backgroundColor: "#080a0f" }}>hi</div>
            </div>


          </div>





    </div>
  )
}
