import styled from "styled-components";
import LoadingSpin from "react-loading-spin";
import { Color } from "./constants";

export const LoadingScreen = () => {
    return (
        <LoadingContainer>
            <LoadingSpin primaryColor="#456990" secondaryColor="#49BEAA" />
            <LoadingText>Hämtar salschema...</LoadingText>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div``

const LoadingText = styled.div`
    margin-top: 1rem;
    font-size: 1.2rem;
`