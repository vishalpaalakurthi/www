import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 100px;
`;

export const Inner = styled.div`
    display: flex;
    margin: 40px 0px;
    width: 100%;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Block = styled.div`
    display: flex;
    margin: 0px 10px;
    flex-direction: column;
    width: 100%;    
    justify-content: center;
    align-items: center;
`;

export const Text = styled.h5`  
    margin: 25px 0px;
    font-style: normal;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.primarycolor};
    font-size: 60px;
    line-height: 50px;
    font-weight: 400;
`;

export const SubTitle = styled.h5`
    margin: 5px;
    font-size: 18px;
    font-weight: 400;
`;

export const Social = styled.div``;

export const Break = styled.div``;