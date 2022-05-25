import logo from "./logo.svg";
import "./App.css";
import { Reservation } from "./reservation";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Building } from "./reservationContainer";

function App() {
  const [buildings, setBuildings] = useState([]);
  useEffect(() => {
    fetch("https://room-reservation-api.herokuapp.com/schedule/get?dayOffset=0")
      .then((response) => response.json())
      .then((responseData) => {
        setBuildings(responseData);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {buildings.map((building) => (
          <Building building={building}></Building>
        ))}
      </header>
    </div>
  );
}

export default App;
