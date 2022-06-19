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
  margin-top: 1em;
`;

const BuildingNameContainer = styled.div`
  display: flex;
`;

const BuildingName = styled.div`
  padding-left: 0.3em;
`;

const RoomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
