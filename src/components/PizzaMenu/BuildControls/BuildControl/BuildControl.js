import React from 'react';
import BuildControl from './BuildControl/BuildControl'; 

import onion from '../../../assets/images/onion.jpg'
 import tomato from '../../../assets/images/tomato.jpg'
 import mixVeg from '../../../assets/images/mixVeg.jpeg'
 import cheese from '../../../assets/images/cheese.jpeg'

// made this state ,comes from backend 
const controls = [
    { label: 'tomato pizza', type: 'Tomato' , des:'A delectable combination of cheese and juicy tomato' , img :onion },
    { label: 'onion  pizza', type: 'onion' , des:' Delectable combination of onion and cheese', img:tomato},
    { label: 'Cheese pizza', type: 'cheese' ,des:'A classic delight with 100% Real mozzarella cheese' , img :mixVeg},
    { label: 'mix veg pizza', type: 'mixVeg' , des:'Delectable combination of onion & capsicum, a veggie lovers pick',img:cheese },
];

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 140,
    },
  });
// now it should be class based component  
// should be implemented in this component only 
export default function buildControl(props) { 
    const classes = useStyles();

  
        {controls.map(ctrl => (

   <Card  className={classes.root} >
   <CardActionArea>
   <CardMedia
   className={classes.media}
 image={ctrl.img}
 title="Pizza"
/>
 <CardContent>
 <Typography gutterBottom variant="h5" component="h2">
   {ctrl.label} 
 </Typography>
 <Typography variant="body2" color="textSecondary" component="p">
   {ctrl.des}
 </Typography>
</CardContent>
</CardActionArea>
<CardActions>
{ /* meta data large,small,medium to added from map */}  
<Select  onChange={(event) => props.chooseSize(ctrl.type , event )} value="Large" color = "primary" >  
   <MenuItem value="Large">Large</MenuItem>
   <MenuItem value="Small">Small</MenuItem>
   <MenuItem value="Medium">Medium</MenuItem>
 </Select>
<Button color = "primary"
   onClick={() => props.ingredientRemoved(ctrl.type)} 
   >Costomise</Button>
<Button color = "primary"
   onClick={() => props.ingredientAdded(ctrl.type)}>Add to cart
</Button>  
</CardActions>
</Card>
                                    
    //         <BuildControl
    //             img={ctrl.img}
    //             key={ctrl.type}
    //             // look into again
    //             des={ctrl.des}
    //             label={ctrl.label} 
    //             added={() => props.ingredientAdded(ctrl.type)} 
    //             removed={() => props.ingredientRemoved(ctrl.type)}
    //             chooseSize={ (event) => props.chooseSize(ctrl.type , event )} 
    //             costumize={props.ordered} // spell 
    //              />
           
        ))}
        }
