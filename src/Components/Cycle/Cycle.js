import React from 'react';
import './Cycle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Cycle = (props) => {
    const {id , name , picture , price} = props.data;

    const sendData = props.getByClcik;

    const randomN = Math.floor(Math.random());

    return (
        <div className="Cycle">
           <div className='img'>
           <img src={picture} alt="" />
           <div className="info">
              <p> <strong className="name"> {name}</strong></p>
              <p><strong>price:- ${price}</strong></p>

              <button onClick={()=>{sendData(id)}}  > <span>Add To Cart <FontAwesomeIcon icon={faCartPlus} /> </span> </button>

           </div>
           </div>
        </div>
    );
};

export default Cycle;