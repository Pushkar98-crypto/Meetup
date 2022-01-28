import { createContext,useState } from "react";

const  FavouriteContext=createContext({
    favourites:[],
    totalFavourites:0,
    addFavourite:(favouriteMeetup)=>{},
    removeFavourite:(meetupId)=>{},
    itemIsFavourite:(meetupId)=>{}

});


// Responsile for providing he context to other Components and
// It is also responsible for updating context
export function FavrouiteContentProviders(props)
{


    function addfavHandler(favouriteMeetup)
    {
      setuserFavourite((previousUserFavourites)=>{
      return previousUserFavourites.concat(favouriteMeetup);
      });
    }
    function removefavHanlder(meetupId)
    {
        setuserFavourite((previousUserFavourites)=>{
            return previousUserFavourites.filter(meetup=> meetup.id !== meetupId);
            });
    }

    function itemIsFavHandler(meetupId)
    {
          return userFavourite.some(meetup=> meetup.id=== meetupId);
    }

    const [userFavourite,setuserFavourite]=useState([]);

    const context={
        favourites:userFavourite,
        totalFavourites:userFavourite.length,
        addFavourite:addfavHandler,
        removeFavourite:removefavHanlder,
        itemIsFavourite:itemIsFavHandler
    };

   return<FavouriteContext.Provider value={context}>
      {props.children}
   </FavouriteContext.Provider>
}

export default FavouriteContext;