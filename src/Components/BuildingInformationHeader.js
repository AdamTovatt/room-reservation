import styled from "styled-components";
import { Room } from "./Room";
import { Building } from "./Building";
import { GetDayNameByOffset } from "./DayOffsetPicker";

export const BuildingInformationHeader = ({ dayOffset, setInformationHeaderVisible }) => {
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
      <SetVisibleButton></SetVisibleButton>
    </HeaderContainer>
  );
};

const SetVisibleButton = styled.div`
  width: 1em;
  height: 1em;
  background-color: red;
  margin-top: 0.2em;
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
