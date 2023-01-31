import styled from "styled-components";
import LoadingSpin from "react-loading-spin";

export const LoadingScreen = () => {
  return (
    <LoadingContainer>
      {/* <LoadingSpin primaryColor="#456990" secondaryColor="#49BEAA" /> */}
      <LoadingText>Hämtar salsschema...</LoadingText>
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div``;

const LoadingText = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-family: "Jost";
`;
