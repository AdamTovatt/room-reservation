import styled from "styled-components";
import { Lock } from "./Lock";
import { Color } from "./constants";

export const Room = ({ room, setRoomModal }) => {
  const clockArm = GetCurrentClockArmPosition();
  room.isAvailable = GetRoomIsAvailable(room);
  return (
    <RoomBackground
      style={{
        opacity: room.isAvailable ? 1 : 0.35,
        borderColor: room.isAvailable ? Color.Green : Color.Red,
      }}
      onClick={() => RoomClicked(room, setRoomModal)}
    >
      <LockIcon></LockIcon>
      <RoomHeader>{room.name.split(" ")[0]}</RoomHeader>
      <ReservationGreenBar>
        {clockArm.visible ? (
          <ClockArm style={{ left: clockArm.position + "px" }}></ClockArm>
        ) : null}
        <CenterContentContainer>
          <ClockNumberContainer>
            <ClockNumber>8</ClockNumber>
            <ClockNumber style={{ marginLeft: "4px" }}>10</ClockNumber>
            <ClockNumber style={{ marginLeft: "1px" }}>12</ClockNumber>
            <ClockNumber style={{ marginLeft: "-1px" }}>13</ClockNumber>
            <ClockNumber style={{ marginLeft: "4px" }}>15</ClockNumber>
            <ClockNumber style={{ marginLeft: "4px" }}>17</ClockNumber>
          </ClockNumberContainer>
        </CenterContentContainer>
        <CenterContentContainer>
          <ClockTickContainer>
            <ClockTick style={{ height: "4px" }} />
            <ClockTick style={{ height: "3px" }} />
            <ClockTick style={{ height: "5px" }} />
            <ClockTick style={{ height: "3px" }} />
            <ClockTick style={{ height: "5px" }} />
            <ClockTick style={{ height: "5px" }} />
            <ClockTick style={{ height: "3px" }} />
            <ClockTick style={{ height: "5px" }} />
            <ClockTick style={{ height: "3px" }} />
            <ClockTick style={{ height: "4px" }} />
          </ClockTickContainer>
        </CenterContentContainer>
        <RedSpans room={room}></RedSpans>
      </ReservationGreenBar>
    </RoomBackground>
  );
};

const LockIcon = () => {
  return (<Lock width={22}></Lock>)
}

const RoomClicked = (room, setRoomModal) => {
  setRoomModal(room);
};

const RedSpans = ({ room }) => {
  if (room.reservedTimes.length > 0) {
    return room.reservedTimes.map((reservation) => {
      return (
        <RedSpan
          startTime={new Date(reservation.start)}
          endTime={new Date(reservation.end)}
        ></RedSpan>
      );
    });
  }
  return "";
};

const RedSpan = ({ startTime, endTime }) => {
  const sizeInfo = TimeToPixels(startTime, endTime);
  return (
    <ReservationRedBar
      style={{
        left: sizeInfo.left + "px",
        width: sizeInfo.width + "px",
        borderRadius:
          "0px 0px " +
          sizeInfo.rightBorder +
          "px " +
          sizeInfo.leftBorder +
          "px",
      }}
    ></ReservationRedBar>
  );
};

function GetRoomIsAvailable(room) {
  var currentDate = new Date();
  for (let i = 0; i < room.reservedTimes.length; i++) {
    try {
      if (
        currentDate > new Date(room.reservedTimes[i].start) &&
        currentDate < new Date(room.reservedTimes[i].end)
      ) {
        return false;
      }
    } catch (error) {
      console.log(
        "Some shit just went down when processing " + room.name + " " + error
      );
    }
  }
  return true;
}

function GetCurrentClockArmPosition() {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  if (currentHours < 17 && currentHours > 8) {
    return {
      visible: true,
      position: (currentHours - 7) * 10 + currentMinutes / 6 - 1,
    };
  }
  return { visible: false, position: 0 };
}

/**
 *
 * @param {Date} startTime
 * @param {number} duration
 */
function TimeToPixels(startTime, endTime) {
  let start = startTime.getHours();
  let end = endTime.getHours();

  if (endTime.getDay() > startTime.getDay()) end = 24;

  if (end > 18) end = 18;
  if (end < 7) end = 7;
  if (start < 7) start = 7;
  if (start > 18) start = 18;

  const left = (start - 7) * 10;
  const width = (end - start) * 10;

  const borderRadius = 10; //default border radius
  const leftBorder = start > 7 ? 0 : borderRadius;
  const rightBorder = end < 18 ? 0 : borderRadius;

  return { left, width, leftBorder, rightBorder };
}

const RoomHeader = styled.div`
  margin-top: 0.1em;
  font-family: Jost;
  font-weight: 450;
`;

const RoomBackground = styled.div`
  width: 110px;
  height: 54px;
  background-color: transparent;
  color: ${Color.OffWhite};
  border: solid;
  border-width: 2px;
  border-radius: 12px;
  position: relative;
  font-size: 1rem;
  margin: 0.3rem;
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;

const CenterContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ReservationRedBar = styled.div`
  width: 0px;
  height: 15px;
  background-color: ${Color.Red};
  border-radius: 0px 0px 10px 10px;
  bottom: 0px;
  position: absolute;
`;

const ReservationGreenBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: ${Color.Green};
  border-radius: 0px 0px 10px 10px;
  bottom: 0px;
  position: absolute;
`;

const ClockTickContainer = styled.div`
  width: 90px;
  justify-content: space-between;
  display: flex;
  z-index: 1;
`;

const ClockTick = styled.div`
  width: 2px;
  height: 4px;
  background-color: ${Color.OffWhite}; ;
`;

const ClockNumberContainer = styled.div`
  width: 100px;
  justify-content: space-between;
  display: flex;
  z-index: 2;
  position: absolute;
  top: -18px;
  left: 5px;
  color: ${Color.OffWhite};
`;

const ClockNumber = styled.div`
  width: 12px;
  height: 12px;
  font-size: 0.6rem;
`;

const ClockArm = styled.div`
  position: absolute;
  width: 2px;
  height: 15px;
  background-color: ${Color.Background};
  z-index: 1;
`;
