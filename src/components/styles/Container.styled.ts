import styled from "styled-components";

export const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 992px;
    padding: 0 15px;
    @media (min-width:${({ theme }) => theme.breakPoints.mobileBreakpoint}) {
        max-width: 960px;
        padding: 0;
    }
    @media (min-width:${({ theme }) => theme.breakPoints.laptopBreakpoint}) {
        max-width: 1140px;
    }
`