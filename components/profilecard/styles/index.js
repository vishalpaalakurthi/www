import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 100px;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.primarycolor};
    opacity: 0.8;
    font-size: 50px;
    font-weight: 400;
`;

export const SubTitle = styled.h5`
    margin: 5px;
    font-weight: 400;
`;

export const Social = styled.div``;

export const Break = styled.div``;