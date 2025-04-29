import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PlaneTicketContext from "./Components/PlaneTicketContext";

import tickets from './Tickets.config.json';


export default function ClassTest() {
  const [oldIcon, setOldIcon] = useState(null);
  const [newIcon, setNewIcon] = useState(
    "https://th.bing.com/th/id/OIP.s_HRA4eB7UDtofnuzNWkjAHaHa?rs=1&pid=ImgDetMain"
  );

  const [ticketList, setTicketList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Plane Ticket App";
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    } else setOldIcon(link.href);
    link.href = newIcon || oldIcon;
    setTimeout(() => {
      setTicketList(tickets.tickets);
      navigate('/CT17/flights');
    }, 1000);
    return () => {
      if (oldIcon) {
        link.href = oldIcon;
      }
    };
  }, []);
  return (
    <div>
      <PlaneTicketContext.Provider value={{ ticketList, setTicketList }}>
        <Outlet />
      </PlaneTicketContext.Provider>
    </div>
  );
}
