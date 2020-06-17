import React from 'react';
import classes from '../cart.css'
import Button from '../../UI/Button/Button'
const CartDel = (props) => (
    
    <div >
          <div className={classes.button}>
          <button  onClick={props.addItem}>+</button>
          </div>
          <div className={classes.button}>
          <button  onClick={props.delItem}>-</button>
          </div>
          <br/>
          <Button btnType="Danger" clicked={props.del}>Remove Item</Button>
        
    </div> 
);
export default CartDel; 
