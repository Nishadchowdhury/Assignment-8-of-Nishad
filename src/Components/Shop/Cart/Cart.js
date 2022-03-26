import React, { useState } from 'react';
import './Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight ,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import SingleCart from './SingleCart/SingleCart';
import RandomSuggest from './RandomSuggest/RandomSuggest';

const Cart = (props) => {

    const cickedAddCart = props.clickedData;
    const clearCart = props.makeCartEmpty;


    const [dataToSendInSuggest , setSendInSuggest] = useState([]);
  

    const sendASingleData = (props) =>{

        const dataLength = props.length; 
        const randomN = Math.floor(Math.random() * dataLength);
        setSendInSuggest(props[randomN]);
        
    }

   
    return (
        <div className='cartDiv'>
           <h2>Your items</h2>
           <div className="selectedItems">
        {
            cickedAddCart.map(data => <SingleCart key={data.id} data={data}  ></SingleCart>)
        }
           </div>


           <div className="btn">
               <button> Delete an item <FontAwesomeIcon icon={faTrashCan} /></button>

               <button onClick={clearCart} > Select Agin   <FontAwesomeIcon icon={faRotateRight} /></button>  
               
               <button className="suggestBtn" onClick={()=>{sendASingleData(cickedAddCart)}} > Suggest One For Me </button>

               {
                  <RandomSuggest  data={dataToSendInSuggest}  ></RandomSuggest>
               }
           </div>
        </div>
    );
};

export default Cart;