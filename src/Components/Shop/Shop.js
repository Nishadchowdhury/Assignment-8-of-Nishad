import Cycle from '../Cycle/Cycle';
import './Shop.css'
import { useEffect ,useState } from 'react';
import Cart from './Cart/Cart';

const Shop = () => {

    const [cycles , setCycles] =useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCycles(data))
    } ,[])


    
    const [CartData , setCartData] =  useState([]);

    const getByClcik = (id) =>{
        const CartDataUniquieFy = CartData.find(data => data.id === id );

        if(CartDataUniquieFy){
            return;
        }

      if(CartData.length <4 ){
        const singleIteam = cycles.find(cycle => cycle.id === id); 
        const data = [...CartData , singleIteam];
        setCartData(data);
      }else{
          alert("You can't add more then 4 iteam")
      }

      
    }

    // console.log(CartData);
    
    

    return (
        <div className="shop">
            <div className="items">
                {
                    cycles.map(cycle => <Cycle key={cycle.id} getByClcik={getByClcik} data={cycle} ></Cycle>)
                }
            </div>


            <div className="cart">
                <div className="containerCart">
                <Cart data={cycles} clickedData={CartData} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;