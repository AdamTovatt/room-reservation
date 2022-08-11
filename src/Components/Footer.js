import styled from "styled-components";
import { Color } from "./constants";

export const Footer = () => {
  return (
    <FooterDiv>
      <TextContainer>
        <TextArea>KTH Lediga Salar</TextArea>
        <TextArea>En sida gjord av Adam Tovatt</TextArea>
        <TextArea>
          Källkod:{" "}
          <Link href="https://github.com/AdamTovatt/room-reservation">
            GitHub
          </Link>
        </TextArea>
      </TextContainer>
    </FooterDiv>
  );
};

const Link = styled.a`
  color: ${Color.OffWhite};
`;

const TextContainer = styled.div`
  margin-top: 2em;
  margin-bottom: 1em;
`;

const TextArea = styled.div`
  font-family: "Jost";
  color: ${Color.OffWhite};
  font-size: 0.8em;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
