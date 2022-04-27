import styled from "styled-components";

export const ProductCardStyled = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        margin-top: -1.2em;
        margin-bottom: 1em;
    }
    h2 {
        font-size: 1.3rem;
        text-align: center;
    }
    p {
        font-size: 0.875rem;
        color: #666666;
    }
`
export const ProductCardImageContainerStyled = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover ;
    }
`

export const ProductCardPriceStyled = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: auto;
    margin-bottom: 0;
`