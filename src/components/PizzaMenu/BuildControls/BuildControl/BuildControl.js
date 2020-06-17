
import React from 'react';
import classes from './BuildControl.css';


const buildControl = (props) => (
    <div >
        <div className={classes.header} >{props.label}</div><br/>
        <div className={classes.des}>{props.des}</div><br/>
        <div >    
             <img src={props.img} alt="Pizza" width ="50" className={classes.center}/>
          </div>   
        <div className={classes.orderbtn}>
        <select className={classes.button} onChange={props.chooseSize}>
            <option value="Large">Large</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
          </select>
        <button className={classes.button}
            onClick={props.costumize} 
            >customise</button>
        <button className={classes.button}
            onClick={props.added}>Add to cart</button>  
         </div>   
    </div> 
);
export default buildControl;
