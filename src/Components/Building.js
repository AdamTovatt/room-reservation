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
        {building.rooms.map((room, index) => {
          return room.hide ? null : (
            <Room key={index} room={room} setRoomModal={setRoomModal}></Room>
          );
        })}
      </RoomContainer>
    </BuildingDiv>
  );
};

const BuildingDiv = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  max-width: 30em;

  @media (max-width: 900px) {
    max-width: 46.5rem;
  }
  @media (max-width: 748px) {
    max-width: 38.8rem;
  }
  @media (max-width: 624px) {
    max-width: 31rem;
  }
  @media (max-width: 500px) {
    max-width: 23.2rem;
  }
  @media (max-width: 374px) {
    max-width: 15.5rem;
  }
  @media (max-width: 250px) {
    max-width: 8rem;
  }
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
