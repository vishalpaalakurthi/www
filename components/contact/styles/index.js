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

export const ContactBody = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PrimaryTitle = styled.h2`
    font-weight: 600;
    color: ${({ theme }) => theme.primarycolor};
    opacity: 0.8;
    letter-spacing: 1px;
    font-size: 30px;
`;

export const Title = styled.h3`
    margin: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.primarycolor};
    opacity: 0.8;
    font-size: 18px;
`;

export const SubTitle = styled.h5`
    margin: 2px;
    font-weight: normal;
    color: ${({ theme }) => theme.primarycolor};
    opacity: 0.5;
    font-size: 15px;
`;

export const Description = styled.p`
    margin: 2px;
    font-weight: 300;
    opacity: 0.8;
    font-size: 12px;
`;

export const Navigation = styled.div`
    transition: 0.3s ease-in;
    font-size: 15px;
    margin: 0px 20px;
    padding: 0px 10px;
    font-weight: 400;
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
    font-size: 16px;
    font-weight: 300;
`;