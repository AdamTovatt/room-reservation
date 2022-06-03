import styled from "styled-components";
import { Color } from "./constants";

export const Room = ({ room }) => {
  const clockArm = GetCurrentClockArmPosition();
  room.isAvailable = GetRoomIsAvailable(room);
  return (
    <ReservationBackground style={{ opacity: room.isAvailable ? 1 : 0.35 }}>
      {room.name.split(" ")[0]}
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
    </ReservationBackground>
  );
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

  const borderRadius = 5; //default border radius
  const leftBorder = start > 7 ? 0 : borderRadius;
  const rightBorder = end < 18 ? 0 : borderRadius;

  return { left, width, leftBorder, rightBorder };
}

const ReservationBackground = styled.div`
  width: 110px;
  height: 54px;
  background-color: ${Color.Blue};
  border-radius: 5px;
  position: relative;
  font-size: 1rem;
  margin: 0.4rem;
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
  border-radius: 0px 0px 5px 5px;
  bottom: 0px;
  position: absolute;
`;

const ReservationGreenBar = styled.div`
  width: 100%;
  height: 15px;
  background-color: ${Color.Green};
  border-radius: 0px 0px 5px 5px;
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
  background-color: white;
`;

const ClockNumberContainer = styled.div`
  width: 100px;
  justify-content: space-between;
  display: flex;
  z-index: 2;
  position: absolute;
  top: -14px;
  left: 5px;
  color: white;
  color: rgba(255, 255, 255, 0.9);
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
