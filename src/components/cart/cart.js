import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './cart.css';
import CartDel from './CartDel/CartDel';
import Button from'../UI/Button/Button';

const  MyCart= ( props ) => {
           
        let arr =[]; 
        const listItems = props.MyCart.map((pizza) => { 
        arr =[]; 
             Object.keys( pizza.fillings).forEach((key,index)=>{   
               if(pizza.fillings[key] === 1) 
                  {
                      arr.push(key)
                    }      
             })  
          
            return (
        <Aux key={pizza.OrderId} >
        <div className={classes.card}> 
      {pizza.del===1 ? (
        <div>
           <ul className={classes.bullets} > 
           <li> Order Id {pizza.OrderId}</li>
           <li  className={classes.col}>Pizza Name - {pizza.name}</li> 
           <li  className={classes.col}> Size -{pizza.size}</li>
           <li className={classes.col} >QTY - {pizza.qty}   </li>
          {arr.length!==0? <li className={classes.col} >your extra fillings -</li>:null}
      
       {
           arr.map((type)=> <p className={classes.col}>{type}</p> )
           } 
           </ul>
           <p> PRICE  {pizza.price} </p>
           <CartDel
           del={()=> props.delItem(pizza.OrderId)}
           delItem={()=>props.del(pizza.OrderId)}
           addItem={()=>props.add(pizza.OrderId)}
        /> 
       </div>) : ( null)}
    </div>
        <br/>
        </Aux>
              ) }
        );
     
    return (
        <Aux key={props.MyCart.id}>
            <Button btnType="Success" >CHECKOUT </Button>
            <div className={classes.CartHeader}>
            <h3  >Your Current Cart</h3>
            <h4>Total price : {props.price}</h4>
            <ul>
                {props.MyCart.length !== 0 ? listItems : null}  
            </ul>
            </div>
        </Aux>
    );
    }
    
export default MyCart;