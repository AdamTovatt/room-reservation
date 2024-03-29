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
import { DayOffsetPicker } from "./Components/DayOffsetPicker";
import { BuildingInformationHeader } from "./Components/BuildingInformationHeader";
import { Footer } from "./Components/Footer";
import ErrorMessage from "./Components/ErrorMessage";
import DisplayText from "./Components/DisplayText";

function App() {
  const [roomModal, setRoomModal] = useState(undefined);
  const [dayOffset, setDayOffset] = useState(0);
  const [apiResponse, setApiResponse] = useState([]);
  const [informationHeaderVisible, setInformationHeaderVisible] =
    useState(false);
  const [error, setError] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  let requestPath =
    "https://sakurapi.se/room-reservation/schedule/get?dayOffset=";

  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    //use local api if development
    //requestPath =
    // "http://192.168.1.89/room-reservation/schedule/get?dayOffset=";
    //requestPath = "http://localhost:5000/schedule/get?dayOffset=";
  }

  useEffect(() => {
    fetch(requestPath + dayOffset).then((response) => {
      console.log(response);
      if (!response.ok) {
        setError(true);
      }
      response.json().then((responseData) => {
        console.log(responseData);
        setApiResponse(responseData);
      });
    });
  }, [dayOffset, requestPath]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lediga Salar KTH</title>
      </Helmet>
      <header className="App-header">
        {roomModal ? (
          <RoomInformationModal
            room={roomModal}
            setRoomModal={setRoomModal}
            style={{ display: "none" }}
          ></RoomInformationModal>
        ) : null}
        {apiResponse.buildings ? (
          <div>
            {informationHeaderVisible ? (
              <DayOffsetPicker
                dayOffset={dayOffset}
                setDayOffset={setDayOffset}
              ></DayOffsetPicker>
            ) : (
              ""
            )}
            <BuildingInformationHeader
              dayOffset={apiResponse.dayOffset}
              setInformationHeaderVisible={setInformationHeaderVisible}
              informationHeaderVisible={informationHeaderVisible}
            />
            <BuildingContainer
              buildings={apiResponse.buildings}
              setRoomModal={setRoomModal}
            />
            <Footer />
          </div>
        ) : (
          <>
            {apiResponse.scheduleResponseCode || error ? (
              <ErrorMessage error={apiResponse} />
            ) : (
              <>
                {!statusMessage || statusMessage === "" ? (
                  <LoadingScreen />
                ) : (
                  <DisplayText
                    header={statusMessage.split("\n")[0]}
                    body={statusMessage.split("\n")[1]}
                    subBody={statusMessage.split("\n")[2]}
                  />
                )}
              </>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
