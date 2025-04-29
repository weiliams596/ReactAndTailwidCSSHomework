import React, { useEffect, useState } from "react";
import "./App.css";

import GlobalContex from "./MyContext";

function App({ children }) {
  const [info, setInfo] = useState({});
  useEffect(() => {}, [info]);
  return (
    <GlobalContex.Provider value={{ info, setInfo }}>
      {children}
    </GlobalContex.Provider>
  );
}

export default App;
