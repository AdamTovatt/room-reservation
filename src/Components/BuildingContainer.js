import styled from "styled-components";
import { Room } from "./Room";
import { Building } from "./Building";

export const BuildingContainer = ({ buildings, setRoomModal }) => {
  return (
    <Container>
      {buildings.map((building) => (
        <Building building={building} setRoomModal={setRoomModal}></Building>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 0.1em;
  max-width: 30em;
  overflow: hidden;
`;
