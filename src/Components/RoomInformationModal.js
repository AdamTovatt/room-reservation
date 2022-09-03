import styled from "styled-components";
import { Color } from "./constants";
import { Lock } from "./Lock";

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

  const headerAlignment = currentReservation
    ? currentReservation.description
      ? "unset"
      : "unset"
    : "center";

  const roomAvailable = currentReservation
    ? currentReservation.description
      ? false
      : false
    : true;

  const roomLink = "https://www.kth.se/places/room/id/" + room.externalId;

  return (
    <ModalBackground onClick={() => setRoomModal(null)}>
      <ModalBackplate
        style={{
          borderColor: currentReservation ? Color.Red : Color.Green,
        }}
      >
        {room.requiresAccess ? (
          <LockIcon size={"42"} color={Color.OffWhite} />
        ) : null}
        <ModalHeader>{room.name}</ModalHeader>
        <ModalSubheader>{otherRooms}</ModalSubheader>
        <ModalBody>
          <ModalBodyTextLine style={{ textAlign: headerAlignment }}>
            {currentReservation
              ? currentReservation.description
                ? "Beskrivning: " + description
                : ""
              : "Salen är ledig just nu"}
          </ModalBodyTextLine>
          {room.requiresAccess ? (
            <ModalBodyTextDisclaimer style={{ textAlign: headerAlignment }}>
              Obs! Salen kräver speciellt tillträde
            </ModalBodyTextDisclaimer>
          ) : null}
          {currentReservation && currentReservation.department > 0
            ? "Bokad av: " + department
            : ""}
          <ModalBodyTextLine>
            {currentReservation ? "Reservationstyp: " + reservationType : ""}
          </ModalBodyTextLine>
          <ModalBodyTextLine>
            {currentReservation && currentReservation.programmes.length > 0
              ? "Program: " + programme
              : ""}
          </ModalBodyTextLine>
          <ModalBodyTextLine>
            {currentReservation && currentReservation.staff.length > 0
              ? "Personal: " + staff
              : ""}
          </ModalBodyTextLine>
          <ModalBodyLocateButtonContainer>
            <Link href={roomLink}>
              <LocateButton
                style={{
                  borderColor: roomAvailable ? Color.Green : Color.Red,
                }}
              >
                Hitta hit
              </LocateButton>
            </Link>
          </ModalBodyLocateButtonContainer>
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

const LockIcon = ({ color, size }) => {
  return (
    <LockContainer>
      <Lock size={size} color={color} style={{ position: "absolute" }}></Lock>
    </LockContainer>
  );
};

const LockContainer = styled.div`
  position: absolute;
  right: 0;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  width: 100%;
`;

const ModalSubheader = styled.div`
  font-size: 0.8em;
  padding: 0em;
`;

const ModalHeader = styled.div`
  font-size: 1.2em;
  padding-top: 1em;
`;

const ModalBody = styled.div`
  padding: 0.5em 2em 1.85em 2em;
  font-size: 0.8em;
  text-align: left;
`;

const ModalBodyLocateButtonContainer = styled.p`
  margin: 1em 0em 0em 0em;
  display: flex;
  justify-content: center;
`;

const LocateButton = styled.button`
  width: 100%;
  height: 54px;
  background-color: transparent;
  color: ${Color.OffWhite};
  border: solid;
  border-color: ${Color.Green};
  border-width: 2px;
  border-radius: 12px;
  position: relative;
  font-size: 1rem;
  margin: 0.3rem;
  //box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    transition-duration: 0.1s;
  }
`;

const ModalBodyTextLine = styled.p`
  padding: 0em;
  margin: 0.2em 0em 0em 0em;
`;

const ModalBodyTextDisclaimer = styled.p`
  padding: 0em;
  margin: 0.2em 0em 0.2em 0em;
  font-style: italic;
  font-size: 0.8em;
  color: ${Color.Red};
`;

const ModalBackplate = styled.div`
  font-family: "Jost";
  color: ${Color.OffWhite};
  background-color: ${Color.Background};
  min-width: 16em;
  position: fixed;
  top: 30%;
  z-index: 5;
  border: solid;
  border-width: 2px;
  border-radius: 12px;
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
