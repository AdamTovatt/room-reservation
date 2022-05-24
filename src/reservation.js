import styled from "styled-components";
import { Color } from "./constants";

export const Reservation = ({ reservation }) => {
  console.log(reservation);
  return (
    <ReservationBackground>
      Q
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
      </ReservationGreenBar>
    </ReservationBackground>
  );
};

/**
 *
 * @param {Date} startTime
 * @param {number} duration
 */
function TimeToPixels(startTime, duration) {
  const left = (startTime.getHours() - 7) * 10;
  const width = duration * 10;

  return { left, width };
}

const ReservationBackground = styled.div`
  width: 110px;
  height: 54px;
  background-color: ${Color.Blue};
  border-radius: 5px;
  position: relative;
`;

const CenterContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ReservationRedBar = styled.div`
  width: 100%;
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
