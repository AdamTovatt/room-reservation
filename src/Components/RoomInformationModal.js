import styled from "styled-components";
import { Color } from "./constants";

export const RoomInformationModal = ({ room }) => {
    return (
        <ModalBackground>
            <ModalBackplate>
                <ModalHeader>Kollegiesalen</ModalHeader>
                <ModalBody>Den här salen är bokad för ett viktigt möte</ModalBody>
            </ModalBackplate>
        </ModalBackground>
    );
};

const ModalHeader = styled.div`
font-size: 1.2em;
padding: 1em;
`

const ModalBody = styled.div`
padding: 0em 1em 1em 1em;
font-size: 0.8em;
`

const ModalBackplate = styled.div`
border-radius: 5px;
background-color: ${Color.Blue};
width: 16em;
height: 10em;
position: fixed;
top: 30%;
z-index: 5;
box-shadow: 3px 3px 6px 3px rgba(0,0,0,0.2);
opacity: 1;
`;

const ModalBackground = styled.div`
width: 100%;
height: 100%;
top: 0px;
position: fixed;
display: flex;
justify-content: center;
background-color: rgba(0, 0, 0, 0.6);
z-index: 4;
`