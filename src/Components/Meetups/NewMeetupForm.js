import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props)
{
  
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const addressInputRef=useRef();
    const descriptionInputRef=useRef();
     
     function  submitHandler(event)
     {
        event.preventDefault();

        console.log(event);

        alert("Submitted");
        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredaddres=addressInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;

        const meetupData={
            title:enteredTitle,
            image:enteredImage,
            address:enteredaddres,
            descritpion:enteredDescription,
        };

        console.log("here is the data",meetupData);

        props.onAddMeetup(meetupData);
     }
 return (
     <Card>
     <form className={classes.form} onSubmit={submitHandler}>
         <div className={classes.control}>
             <label htmlFor="title">Meetup Title</label>
             <input type="text" required id="title" ref={titleInputRef}/>
         </div>
         <div className={classes.control}>
             <label htmlFor="image">Meetup Image</label>
             <input type="url" required id="image" ref={imageInputRef}/>
         </div>
         <div className={classes.control}>
             <label htmlFor="address">Address</label>
             <input type="text" required id="address" ref={addressInputRef}/>
         </div>

         <div className={classes.control}>
             <label htmlFor="desxription">Meetup Description</label>
             <textarea required  rows='5'id="description" ref={descriptionInputRef}/>
         </div>
   
         <div className={classes.actions}>
             <button>Add Meetup</button>
         </div>

     </form>   
     </Card>
 );


}
export default NewMeetupForm;