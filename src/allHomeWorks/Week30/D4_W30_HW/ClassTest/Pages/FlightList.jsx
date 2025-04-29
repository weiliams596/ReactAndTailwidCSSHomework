import React, { useContext, useEffect } from "react";
import FlightContext from "../Components/PlaneTicketContext";

import tickets from '../Tickets.config.json';
import { useNavigate } from "react-router-dom";


export default function FlightList() {
  const { ticketList, setTicketList } = useContext(FlightContext);
  const navigate = useNavigate();
  console.log(ticketList);
  const handleClick = (e,id)=>{
    navigate(`/CT17/booking/${id}`);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTicketList(tickets.tickets);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flight-list">
      <h1>Flight List</h1>
      {ticketList &&
        ticketList.map((item, index) => {
          return (
            <div key={index} className="flight-item">
              <div className="left">
                <h3>{`${item.from} ${item.seats} ${item.to}`}</h3>
                <p>{`Start time: ${item.time}`}</p>
                <p>{`Air line: ${item.airline}`}</p>
                <p>{`Sit set: ${item.seats}`}</p>
              </div>
              <div className="right">
                <p>{`${item.price} KZT`}</p>
                <button onClick={(e)=>{
                  handleClick(e,item.id);
                }}>Book</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
