import DateDisplay from "../components/DateDisplay";
import Countdown from "../components/Countdown";
import EventList from "../components/EventList";
import ToDoList from "../components/ToDoList";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <DateDisplay />
            <Countdown />
            <EventList />
            <ToDoList />
        </div>
        
    )
}

export default Home;