import styled from "styled-components";
import { Color } from "./constants";

export const Reservation = ({ reservation }) => {
  return (
    <ReservationBackground>
      {reservation.name.split(' ')[0]}
      <ReservationGreenBar>
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
        <RedSpans reservation={reservation} ></RedSpans>
      </ReservationGreenBar>
    </ReservationBackground>
  );
};

const RedSpans = ({reservation}) => {
  if(reservation.reservedTimes.length > 0)
  {
    console.log(reservation.reservedTimes);
    return (
      <RedSpan startTime={new Date(reservation.reservedTimes[0].start)} endTime={new Date(reservation.reservedTimes[0].end)}></RedSpan>
    );
  }
  return (
    ''
  );
}

const RedSpan = ({startTime, endTime}) => {
  const sizeInfo = TimeToPixels(startTime, (endTime - startTime) / 36e5);
  return (
    <ReservationRedBar style={{left: sizeInfo.left + "px", width: sizeInfo.width + "px"}}></ReservationRedBar>
  );
};

/**
 *
 * @param {Date} startTime
 * @param {number} duration
 */
function TimeToPixels(startTime, duration) {
  const left = (startTime.getHours() - 7) * 10;
  let width = duration * 10;

  if(width + left > 100){
    width = 100 - left;
  }

  return { left, width };
}

const ReservationBackground = styled.div`
  width: 110px;
  height: 54px;
  background-color: ${Color.Blue};
  border-radius: 5px;
  position: relative;
  font-size: 1rem;
  margin: 0.5rem;
`;

const CenterContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ReservationRedBar = styled.div`
  width: 30px;
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
`;

const ClockTick = styled.div`
  width: 2px;
  height: 4px;
  background-color: white;
`;
