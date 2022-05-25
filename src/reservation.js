import styled from "styled-components";
import { Color } from "./constants";

export const Reservation = ({ reservation }) => {
  return (
    <ReservationBackground>
      {reservation.name.split(" ")[0]}
      <ReservationGreenBar>
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
        <RedSpans reservation={reservation}></RedSpans>
      </ReservationGreenBar>
    </ReservationBackground>
  );
};

const RedSpans = ({ reservation }) => {
  if (reservation.reservedTimes.length > 0) {
    console.log(reservation.reservedTimes);
    return reservation.reservedTimes.map((reservation) => {
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
  z-index: 1;
  position: absolute;
  top: -16px;
  left: 5px;
`;

const ClockNumber = styled.div`
  width: 12px;
  height: 12px;
  font-size: 0.7rem;
`;
