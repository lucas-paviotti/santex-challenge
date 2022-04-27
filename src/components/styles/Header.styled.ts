import styled from "styled-components";
import { Container } from "./Container.styled";

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${({ theme }) => theme.heights.header};
    z-index: 1;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    img {
        display: block;
        width: auto;
        height: 30px;
    }
    ${Container} {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`