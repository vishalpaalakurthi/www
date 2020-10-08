import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 5px 5px;
`;

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.primarycolor};
    padding: 0px 5px;
    border-radius: 5px;
`;

export const IconWrapper = styled.div`
    margin-left: 3px;
    cursor: pointer;
`;