import styled from 'styled-components';

export const FooterStyled = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #f0f0f0;
    padding: 10px;
    text-align: center;
    font-size: 12px;
    color: #666;
    font-size: 16px;
    font-weight: 700;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
    &:focus {
    border-color: #4caf50;
}
`;

export const FooterContent = styled.p`
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
    color: #000;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
    &:focus {
        border-color: #4caf50;
    }
`;