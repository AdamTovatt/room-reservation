import styled from "styled-components";
import { Room } from "./Room";
import { Color } from "./constants";

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
  max-width: 30em;
`;

const BuildingNameContainer = styled.div`
  display: flex;
`;

const BuildingName = styled.div`
  padding-left: 0.4em;
  font-family: "Jost";
  color: ${Color.OffWhite};
`;

const RoomContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
