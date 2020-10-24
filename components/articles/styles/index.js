import styled from "styled-components";

//Container, Inner, Title, SubTitle, Description, Navigation 

export const Container = styled.div`
    display: flex;
`;

export const Inner = styled.div`
    display: flex;
    margin: 40px;
    width: 100%;
    flex-direction: column;
`;

export const ArticlesBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: calc(559440px - 99900%);
    flex-grow: 1;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Article = styled.div`
    display: flex;
    flex-direction: column;
    width: 32%;
    border-radius: 5px;
    margin: 10px 3px;
    padding: 10px 20px;
    height: auto;
    background: ${({ theme }) => theme.secondarycolor};
    min-height: 300px;
    height: auto;
    justify-content: space-between;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const PrimaryTitle = styled.h2`
    font-weight: 400;
    color: ${({ theme }) => theme.primarycolor};
    letter-spacing: 0.02em;
    font-size: 50px;
`;

export const Title = styled.h3`
    font-weight: 500;
    color: ${({ theme }) => theme.bgcolor};
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 5px;
`;

export const SubTitle = styled.h5`
    font-weight: normal;
    color: ${({ theme }) => theme.bgcolor};
    font-size: 25px;
    font-weight: 400;
    line-height: 35px;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-weight: 300;
    font-size: 12px;
`;

export const Navigation = styled.div`
    transition: 0.3s ease-in;
    font-size: 25px;
    line-height: 40px;
    color: ${({ theme }) => theme.bgcolor};
    &:hover {
        letter-spacing: 1px;
        transition: 0.3s ease-in-out;
    }
`;

export const Break = styled.div`
    margin: 10px 0px;
`;

export const Message = styled.div`
    display: flex;
    margin: 20px;
    padding: 10px 10px;
    font-size: 13px;
    font-weight: 300;
`;