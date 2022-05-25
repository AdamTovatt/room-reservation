import logo from "./logo.svg";
import "./App.css";
import { Reservation } from "./reservation";
import { useState, useEffect } from "react";
import { ReservationContainer } from "./reservationContainer";

function App() {
  const [reservations, setReservation] = useState([]);
  useEffect(() => {
    fetch("https://room-reservation-api.herokuapp.com/schedule/get?dayOffset=0")
      .then((response) => response.json())
      .then((responseData) => {
        setReservation(responseData);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ReservationContainer>
          {reservations.map((reservation) => (
            <Reservation reservation={reservation}></Reservation>
          ))}
        </ReservationContainer>
      </header>
    </div>
  );
}

export default App;
