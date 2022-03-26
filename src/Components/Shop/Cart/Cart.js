import React from 'react';
import './Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight ,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import SingleCart from './SingleCart/SingleCart';
import RandomSuggest from './RandomSuggest/RandomSuggest';

const Cart = (props) => {
    const datas = props.data;

    const cickedAddCart = props.clickedData;
    console.log();

    const sendASingleData = (props) =>{
    
    const dataLength = props.length; 
    const randomN = Math.floor(Math.random() * dataLength);
    console.log(randomN);

    console.log(props[randomN]);

    const randomSingleData = cickedAddCart;
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

               <button> Select Agin  <FontAwesomeIcon icon={faRotateRight} /></button>  
               
               <button onClick={()=>{sendASingleData(cickedAddCart)}} > Suggest One For Me </button>
               {
                  <RandomSuggest  data={cickedAddCart} data={'l'}  ></RandomSuggest>
               }
           </div>
        </div>
    );
};

export default Cart;