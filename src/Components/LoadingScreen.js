import styled from "styled-components";
import LoadingSpin from "react-loading-spin";

export const LoadingScreen = () => {
  return (
    <LoadingContainer>
      {/* <LoadingSpin primaryColor="#456990" secondaryColor="#49BEAA" /> */}
      <LoadingText>
        Servern för den här hemsidan har tyvärr nyligen trillat av pinn. Jag
        jobbar på att fixa en ny. Kom tillbaka om någon dag.
      </LoadingText>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div``;

const LoadingText = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-family: "Jost";
`;
