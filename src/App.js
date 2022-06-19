import logo from "./logo.svg";
import "./App.css";
import { Room } from "./Components/Room";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Building } from "./Components/Building";
import { Helmet } from "react-helmet";
import LoadingSpin from "react-loading-spin";
import { LoadingScreen } from "./Components/LoadingScreen";
import { RoomInformationModal } from "./Components/RoomInformationModal";
import { BuildingContainer } from "./Components/BuildingContainer";

function App() {
  const [roomModal, setRoomModal] = useState(undefined);
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
        {roomModal ? (
          <RoomInformationModal
            room={roomModal}
            setRoomModal={setRoomModal}
            style={{ display: "none" }}
          ></RoomInformationModal>
        ) : null}
        {apiResponse.buildings ? (
          <BuildingContainer
            buildings={apiResponse.buildings}
            setRoomModal={setRoomModal}
          />
        ) : (
          <LoadingScreen />
        )}
      </header>
    </div>
  );
}

export default App;
