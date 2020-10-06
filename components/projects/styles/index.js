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

export const ProjectsBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: calc(559440px - 99900%);
    flex-grow: 1;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    border-radius: 5px;
    margin: 20px;
    padding: 10px 10px;
    height: auto;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const PrimaryTitle = styled.h2`
    font-weight: 600;
    color: ${({ theme }) => theme.primarycolor};
    opacity: 0.8;
    letter-spacing: 1px;
`;

export const Title = styled.h3`
    margin: 2px;
    font-weight: 600;
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
    font-weight: 500;
    opacity: 0.8;
    font-size: 12px;
`;

export const Navigation = styled.div`
    transition: 0.3s ease-in;
    font-size: 12px;
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
    font-weight: normal;
`;