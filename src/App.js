import logo from "./logo.svg";
import "./App.css";
import { Reservation } from "./reservation";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Building } from "./reservationContainer";
import { Helmet } from "react-helmet";
import LoadingSpin from "react-loading-spin";
import { LoadingScreen } from "./LoadingScreen";

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  useEffect(() => {
    fetch("https://room-reservation-api.herokuapp.com/schedule/get?dayOffset=0")
      .then((response) => response.json())
      .then((responseData) => {
        setApiResponse(responseData);
      });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lediga Salar KTH</title>
      </Helmet>
      <header style={{ backgroundColor: "#111922" }} className="App-header">
        {apiResponse.buildings
          ? 
          apiResponse.buildings.map((building) => (
              <Building building={building}></Building>
            ))
          : <LoadingScreen />}
      </header>
    </div>
  );
}

export default App;
