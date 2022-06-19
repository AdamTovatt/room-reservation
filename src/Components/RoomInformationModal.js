import styled from "styled-components";
import { Color } from "./constants";

export const RoomInformationModal = ({ room, setRoomModal }) => {
  let currentReservation = GetCurrentReservation(room);

  let department = currentReservation
    ? currentReservation.department ?? "(saknas)"
    : "";
  let description = currentReservation
    ? currentReservation.description ?? "(saknas)"
    : "";
  let reservationType = currentReservation
    ? currentReservation.reservationType ?? "(saknas)"
    : "";
  let programme = currentReservation
    ? currentReservation.programmes.length > 0
      ? currentReservation.programmes[0]
      : "(saknas)"
    : "";
  let staff = currentReservation
    ? currentReservation.staff.length > 0
      ? currentReservation.staff[0] +
        (currentReservation.staff.length > 1
          ? " (+" + currentReservation.staff.length + ")"
          : "")
      : "(saknas)"
    : "";
  let otherRooms = currentReservation
    ? currentReservation.occupiedRooms > 1
      ? "(och " + currentReservation.occupiedRooms + " andra salar)"
      : ""
    : "";

  console.log(currentReservation);
  return (
    <ModalBackground onClick={() => setRoomModal(null)}>
      <ModalBackplate>
        <ModalHeader>{room.name}</ModalHeader>
        <ModalSubheader>{otherRooms}</ModalSubheader>
        <ModalBody>
          <ModalBodyTextLine>
            <ModalBodyTextLine>
              {currentReservation
                ? "Beskrivning: " + description
                : "Salen är ledig just nu"}
            </ModalBodyTextLine>
            {currentReservation ? "Bokad av: " + department : ""}
          </ModalBodyTextLine>
          <ModalBodyTextLine>
            {currentReservation ? "Reservationstyp: " + reservationType : ""}
          </ModalBodyTextLine>
          <ModalBodyTextLine>
            {currentReservation ? "Program: " + programme : ""}
          </ModalBodyTextLine>
          <ModalBodyTextLine>
            {currentReservation ? "Personal: " + staff : ""}
          </ModalBodyTextLine>
        </ModalBody>
      </ModalBackplate>
    </ModalBackground>
  );
};

function GetCurrentReservation(room) {
  var currentDate = new Date();
  for (let i = 0; i < room.reservedTimes.length; i++) {
    try {
      if (
        currentDate > new Date(room.reservedTimes[i].start) &&
        currentDate < new Date(room.reservedTimes[i].end)
      ) {
        return room.reservedTimes[i];
      }
    } catch (error) {
      console.log(
        "Error when finding current reservation " + room.name + " " + error
      );
    }
  }
  return null;
}

const ModalSubheader = styled.div`
  font-size: 0.8em;
  padding: 0em;
`;

const ModalHeader = styled.div`
  font-size: 1.2em;
  padding-top: 1em;
`;

const ModalBody = styled.div`
  padding: 0.5em 2em 2em 2em;
  font-size: 0.8em;
  text-align: left;
`;

const ModalBodyTextLine = styled.p`
  padding: 0em;
  margin: 0.2em 0em 0.2em 0em;
`;

const ModalBackplate = styled.div`
  border-radius: 5px;
  background-color: ${Color.Blue};
  min-width: 16em;
  position: fixed;
  top: 30%;
  z-index: 5;
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.2);
  opacity: 1;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 4;
`;
