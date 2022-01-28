import MeetupList from "../Components/Meetups/MeetupList";
import { useState, useEffect} from "react";


function AllMeetupsPage()
{
   const [isloading, setIsLoading]=useState(true);
   const [loadedMeetups,SetLoadedMeetups]=useState([])

   useEffect(()=>{
     setIsLoading(true);
    fetch('https://react-getting-started-eb18a-default-rtdb.firebaseio.com/meetups.json'
    ).then((response)=>
    {
       return response.json();
    }).then(data=>
      {
        const meetups=[];
        for( const key in data)
        {
          const meetup={
            id:key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        SetLoadedMeetups(meetups);
  
      });
   },[]);

  


    if(isloading)
    {
      return(
        <section>
          <p>loading....</p>
        </section>
      );
    
    }
    return (
    <section>
        <h1 IN>All meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </section>

    );

}
export default AllMeetupsPage;