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
        <DayOffsetTextContainer>
          <DayOffsetText>{GetDayNameByOffset(dayOffset)}</DayOffsetText>
          <DayOffsetSubtext>
            {dayOffset === 0 ? "" : GetDateTextByOffset(dayOffset)}
          </DayOffsetSubtext>
        </DayOffsetTextContainer>
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

const DayOffsetTextContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const DayOffsetSubtext = styled.div`
  font-size: 16px;
`;

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
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const DayOffsetText = styled.div`
  font-size: 18px;
  margin-bottom: 0.3em;
  font-weight: 600;
`;

export function GetDateTextByOffset(dayOffsetValue) {
  let date = new Date();
  date = addDays(date, dayOffsetValue);
  let dayNumber = date.getDate();

  if (dayNumber <= 2) return dayNumber + ":a";
  if (dayNumber.toString().endsWith("1")) {
    return dayNumber + (dayNumber.toString()[0] === "1" ? ":e" : ":a");
  }
  return dayNumber + ":e";
}

export function GetDayNameByOffset(dayOffsetValue, addPrefix = false) {
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

  let result = dayArray[realDate.getDay()];

  if (!addPrefix) return result;

  if (Math.abs(dayOffsetValue) < 7) {
    if (dayOffsetValue < 0) {
      return "i " + result + "s";
    }

    return "på " + result;
  } else {
    return (
      (dayOffsetValue > 0 ? "på " : "för ") +
      result +
      " den " +
      GetDateTextByOffset(dayOffsetValue)
    );
  }
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
