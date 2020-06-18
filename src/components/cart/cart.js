import React from 'react';

import CartDel from './CartDel/CartDel';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



import onion from '../../assets/images/onion.jpg';
import tomato from '../../assets/images/tomato.jpg';
import mixveg from '../../assets/images/mixVeg.jpeg';
import cheese from '../../assets/images/cheese.jpeg';

export default function  MyCart( props ) {
           
        let arr =[]; 
        const listItems = props.MyCart.map((pizza) => { 
        arr =[]; 
             Object.keys( pizza.fillings).forEach((key,index)=>{   
               if(pizza.fillings[key] === 1) 
                  {
                      arr.push(key)
                    }      
             })  ;   
          
        return (

            <Card   >
            <CardActionArea>
           <CardMedia
             
             image={props.img}
             title="Pizza"
           />
        <CardContent> 
       {pizza.del===1 ? (
        <div>
             {pizza.name.localeCompare("onion") ===0 ? <CardMedia  image={onion} /> : null }
             {pizza.name.localeCompare("tomato")===0 ? <CardMedia   image={tomato} /> : null }
             {pizza.name.localeCompare("mixveg")===0 ? <CardMedia   image={mixveg} /> : null }
             {pizza.name.localeCompare("cheese")===0 ? <CardMedia   image={cheese} /> : null }
             

            <Typography variant="body2" color="textSecondary" component="p">
            {pizza.name} </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {pizza.size} </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           {pizza.qty} </Typography>
           {arr.length!==0? <Typography variant="body2" color="textSecondary" component="p"> your extra fillings  </Typography> :null}
           {
           arr.map((type)=> <Typography variant="body2" color="textSecondary" component="p"> >{type}</Typography> )
           } 
          <Typography variant="body2" color="textSecondary" component="p">
            {pizza.price} </Typography>
           <CartDel      
           del={()=> props.delItem(pizza.OrderId)}
           delItem={()=>props.del(pizza.OrderId)}
           addItem={()=>props.add(pizza.OrderId)}
           /> 
           </div>) : ( null)}
           </CardContent>
           </CardActionArea>
           </Card> 
        
              ) }
        );
     
    return (
        <Card>
            <Typography> Your Current Cart</Typography>
            <h4>Total price : {props.price}</h4>
            <ul>
                {props.MyCart.length !== 0 ? listItems : null}  
            </ul>
            </Card>
        
      );
    }
    

