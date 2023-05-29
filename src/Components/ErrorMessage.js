import styled from "styled-components";
import { Color } from "./constants";

const ErrorContainer = styled.div`
  display: flex;
  max-width: 30rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Jost";
  color: ${Color.offWhite};

  @media (max-width: 500px) {
    max-width: calc(100vw - 2rem);
  }
`;

const Header = styled.div`
  font-size: 1.2rem;
`;

const ErrorInformation = styled.div`
  font-family: "consolas";
  font-size: 0.8rem;
`;

const Body = styled.div`
  font-size: 1rem;
`;

const VerticalSpacing = ({ height }) => {
  return <div style={{ height: height + "rem" }}></div>;
};

const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <Header>KTHs server gav ett fel 😔</Header>
      <VerticalSpacing height={1} />
      <Body>
        Jag har varit i kontakt med KTH och de har varit hjälpsamma i att
        åtgärda problemet. Sidan kommer snart att fungera igen.
      </Body>
      <VerticalSpacing height={2} />
      <Body>Felmeddelandet som gavs var:</Body>
      <ErrorInformation>{error.scheduleResponseMessage}</ErrorInformation>
    </ErrorContainer>
  );
};

export default ErrorMessage;
