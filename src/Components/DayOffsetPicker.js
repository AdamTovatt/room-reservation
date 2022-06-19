import styled from "styled-components";
import { Color } from "./constants";

export const DayOffsetPicker = ({ dayOffset, setDayOffset }) => {
  return (
    <DayOffsetPickerContainer>
      <DayOffsetPickerBackground>
        <ChangeDayButton
          onClick={() => {
            setDayOffset(dayOffset - 1);
          }}
        >
          <ChangeDayButtonText>-</ChangeDayButtonText>
        </ChangeDayButton>
        <DayOffsetText>{GetDayNameByOffset(dayOffset)}</DayOffsetText>
        <ChangeDayButton
          onClick={() => {
            setDayOffset(dayOffset + 1);
          }}
        >
          <ChangeDayButtonText>+</ChangeDayButtonText>
        </ChangeDayButton>
      </DayOffsetPickerBackground>
    </DayOffsetPickerContainer>
  );
};

const DayOffsetPickerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const DayOffsetPickerBackground = styled.div`
  width: 300px;
  height: 90px;
  background-color: ${Color.Blue};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChangeDayButtonText = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
  user-select: none;
`;

const ChangeDayButton = styled.div`
  border-radius: 4px;
  width: 75px;
  height: 75px;
  background-color: ${Color.Alternative};
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const DayOffsetText = styled.div`
  font-size: 18px;
  margin-bottom: 0.3em;
`;

export function GetDayNameByOffset(dayOffsetValue) {
  if (dayOffsetValue === 0) return "Idag";
  if (dayOffsetValue === 1) return "Imorgon";
  if (dayOffsetValue === -1) return "Igår";

  let date = new Date();
  let realDate = addDays(date, dayOffsetValue);

  const dayArray = [
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];

  return dayArray[realDate.getDay()];
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
