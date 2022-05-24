import logo from "./logo.svg";
import "./App.css";
import { Reservation } from "./reservation";
import { useState, useEffect } from "react";

function App() {
  const [reservations, setReservation] = useState([]);
  useEffect(() => {
    fetch("https://localhost:5001/schedule/get?dayOffset=0")
      .then((response) => response.json())
      .then((responseData) => {
        setReservation(responseData);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {reservations.map((reservation) => (
          <Reservation reservation={reservation}></Reservation>
        ))}
      </header>
    </div>
  );
}

export default App;
