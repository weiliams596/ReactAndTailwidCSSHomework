import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PlaneTicketContext from "../Components/PlaneTicketContext";

export default function FlightBooking() {
  const { id } = useParams();
  const { ticketList } = useContext(PlaneTicketContext);
  const showInfo = ticketList.find((value) => value.id == id);
  if (!showInfo) {
    return <div>No flight found with this ID</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      userSeat: document.getElementById("select-place").value,
      flightId: id
    };

    // send data to server
    console.log(userData);
  };
  return (
    <div className="submit-form">
      <h1>Flight Booking</h1>
      <div className="shower-div">
        <div className="left">
          <h3>{`${showInfo.from} ${showInfo.seats} ${showInfo.to}`}</h3>
          <p>{`Start time: ${showInfo.time}`}</p>
          <p>{`Air line: ${showInfo.airline}`}</p>
          <p>{`Sit set: ${showInfo.seats}`}</p>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="date">Choose time:</label>
            <input type="date" id="date" value={new Date().toISOString().split("T")[0]}/>
            <label htmlFor="select-place">Select place:</label>
            <select name="select-place" id="select-place">
              {Array.from({ length: showInfo.seats }, (_, i) => (
                <option key={i} value={i + 1}>{`Place: 0${i}`}</option>
              ))}
            </select>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
