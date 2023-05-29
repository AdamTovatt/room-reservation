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
      <Header>Det blev något fel när sidan skulle laddas 😔</Header>
      <VerticalSpacing height={1} />
      <Body>
        Om du är nyfiken på vad som gick fel kan du kolla på nätverksanropen
        sidan gör
      </Body>
    </ErrorContainer>
  );
};

export default ErrorMessage;
