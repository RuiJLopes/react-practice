import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  // This hook allows us to navigate the browser history
  const navigateTo = useNavigate();

  function addMeetupHandler(meetupData) {
    const appUrl = import.meta.env.VITE_FIREBASE_URL;
    // This is where we will send the httpRequest
    fetch(`${appUrl}/meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigateTo("/");
    });

    console.log(appUrl);
  }
  return (
    <>
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    </>
  );
}
export default NewMeetupPage;
