import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_FIREBASE_URL}/meetups.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // We need to transform the data to an array because we get an object where, nested we get our desired values
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <>
        <section>
          <p>Loading...</p>
        </section>
      </>
    );
  }
  return (
    <>
      <section>
        <h1>All Meetups</h1>
        <ul>
          <MeetupList meetups={loadedMeetups} />
        </ul>
      </section>
    </>
  );
}
export default AllMeetUpsPage;
