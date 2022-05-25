import styled from "styled-components";
import { Color } from "./constants";
import { Reservation } from "./reservation";

export const Building = ({ building }) => {
  return (
    <BuildingContainer>
      <BuildingNameContainer>
        <BuildingName>{building.name}:</BuildingName>
      </BuildingNameContainer>
      {building.rooms.map((room) => (
        <Reservation reservation={room}></Reservation>
      ))}
    </BuildingContainer>
  );
};

const BuildingNameContainer = styled.div`
  width: 100%;
  display: flex;
`;

const BuildingName = styled.div`
  padding-left: 1rem;
`;

const BuildingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
