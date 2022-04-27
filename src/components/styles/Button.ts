import styled from "styled-components";

export const ButtonStyled = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5em 1em;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.5px;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    -webkit-font-smoothing: subpixel-antialiased;
    border: none;
    background-color: ${({ theme }) => theme.colors.green};
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        background-color: ${({ theme }) => theme.colors.darkGreen};
        transition: all 0.3s ease-in-out;
        -webkit-font-smoothing: subpixel-antialiased;
    }
    svg {
        font-size: 1.5rem;
        margin-right: 0.8em;
        path {
            stroke: ${({ theme }) => theme.colors.white};
        }
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover ;
    }
    span {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        margin-bottom: -2px;
    }
`