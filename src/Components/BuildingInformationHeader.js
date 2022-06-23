import styled from "styled-components";
import { Room } from "./Room";
import { Building } from "./Building";
import { Color } from "./constants";
import { GetDayNameByOffset } from "./DayOffsetPicker";

export const BuildingInformationHeader = ({ dayOffset, setInformationHeaderVisible, informationHeaderVisible }) => {
  return (
    <HeaderContainer>
      <InformationHeader>
        Reservationer {GetDayNameByOffset(dayOffset, true).toLocaleLowerCase()}{" "}
        {dayOffset === 0
          ? "klockan " +
          new Date()
            .toLocaleTimeString("en-US", { hour12: false })
            .replace(/(.*)\D\d+/, "$1")
          : ""}
      </InformationHeader>
      <SetVisibleButton onClick={() => { setInformationHeaderVisible(!informationHeaderVisible); }}>i</SetVisibleButton>
    </HeaderContainer>
  );
};

const SetVisibleButton = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 5px;
  background-color: ${Color.Blue};
  margin-top: 0.05em;
  margin-left: 1em;
  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.8em;
  margin-left: 0.4em;
`

const InformationHeader = styled.div`
  padding: 0.1em;
  max-width: 30em;
  overflow: hidden;
  text-align: left;
  font-weight: 600;
`;
