import {useContext} from  'react';
import FavouriteContext from '../store/Favourite-context';
import MeetupList from '../Components/Meetups/MeetupList';

function FavoritesPage()
{
  const favouriteCtx= useContext(FavouriteContext);

  return <section>
    <h1>Fav</h1>
    <MeetupList meetups={favouriteCtx.favourites}/>
  </section>
}

export default FavoritesPage;