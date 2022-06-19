import styled from "styled-components";
import { Room } from "./Room";
import { Building } from "./Building";
import { GetDayNameByOffset } from "./DayOffsetPicker";

export const BuildingInformationHeader = ({ dayOffset }) => {
  return (
    <InformationHeader>
      Reservationer {GetDayNameByOffset(dayOffset, true).toLocaleLowerCase()}{" "}
      {dayOffset === 0
        ? "klockan " +
          new Date()
            .toLocaleTimeString("en-US", { hour12: false })
            .replace(/(.*)\D\d+/, "$1")
        : ""}
    </InformationHeader>
  );
};

const InformationHeader = styled.div`
  margin-top: 1.8em;
  padding: 0.1em;
  max-width: 30em;
  overflow: hidden;
  text-align: left;
  margin-left: 0.4em;
  font-weight: 600;
`;
