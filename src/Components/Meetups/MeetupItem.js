import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import {useContext} from 'react';
import FavouriteContext  from '../../store/Favourite-context';

function MeetupItem(props)
{

    const favouriteCtx= useContext(FavouriteContext);
     const itemIsFavourite=favouriteCtx.itemIsFavourite(props.id);
    function toggleFavouritesStatusHandler()
    {
           if(itemIsFavourite)
           {
               favouriteCtx.removeFavourite(props.id)
           }
           else
           {
               favouriteCtx.addFavourite({
                   id:props.id,
                   title:props.title,
                   description:props.description,
                   address:props.address,
                   image:props.image
               })
           }
    }
   return(  <li className={classes.item}>
        <Card>
        <div className={classes.image}>
       
       <img src={props.image} alt ={props.title}/>
       </div>
       <div className={classes.content}>
           <h3>{props.title}</h3>
           <address>{props.address}</address>
           <p>{props.description}</p>
           
       </div>
       <div className={classes.actions}>
           <button onClick={toggleFavouritesStatusHandler}>{itemIsFavourite? 'Remove':'To Favourites'}</button>
       </div>
        </Card>
       
          
   </li>
   );
}
export default MeetupItem;