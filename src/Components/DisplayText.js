import styled from "styled-components";
import { Color } from "./constants";

const TextContainer = styled.div`
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

const Body = styled.div`
  font-size: 1rem;
`;

const VerticalSpacing = ({ height }) => {
  return <div style={{ height: height + "rem" }}></div>;
};

const DisplayText = ({
  header = undefined,
  body = undefined,
  subBody = undefined,
}) => {
  return (
    <TextContainer>
      <Header>{header}</Header>
      <VerticalSpacing height={1} />
      <Body>{body}</Body>
      <VerticalSpacing height={2} />
      <Body>{subBody}</Body>
    </TextContainer>
  );
};

export default DisplayText;
