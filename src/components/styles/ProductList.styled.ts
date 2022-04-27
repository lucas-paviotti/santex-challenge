import styled from "styled-components";

export const ProductListStyled = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr;
    padding-block: 3rem;
    @media (min-width:${({ theme }) => theme.breakPoints.mobileBreakpoint}) {
        grid-template-columns: repeat(4, 1fr);
    }
`