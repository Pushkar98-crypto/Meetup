import {useNavigate} from 'react-router-dom'
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";
function NewMeetupPage()
{

    const history= useNavigate();
    function addMeetupHandler(meetupData)
    {
         fetch('https://react-getting-started-eb18a-default-rtdb.firebaseio.com/meetups.json',
         {
             method:'POST',
             body:JSON.stringify(meetupData),
             headers:{
                 'Content-type':'application/json'
             }
         }
         ).then(()=>{
          console.log("Done");
         });
    }
    return (
        <section>
            <h1>
                Add New Meetup
            </h1>

            <div><NewMeetupForm onAddMeetup={addMeetupHandler}/>
            </div>
        </section>
    );

}
export default NewMeetupPage;