import styled from "styled-components";
import { Room } from "./Room";

export const Building = ({ building, setRoomModal }) => {
  return (
    <BuildingDiv>
      <BuildingNameContainer>
        <BuildingName>{building.name}:</BuildingName>
      </BuildingNameContainer>
      <RoomContainer>
        {building.rooms.map((room) => (
          <Room room={room} setRoomModal={setRoomModal}></Room>
        ))}
      </RoomContainer>
    </BuildingDiv>
  );
};

const BuildingDiv = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const BuildingNameContainer = styled.div`
  display: flex;
`;

const BuildingName = styled.div`
  padding-left: 0.4em;
`;

const RoomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
