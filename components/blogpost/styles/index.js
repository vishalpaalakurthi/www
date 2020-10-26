import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 40px;

    @media (max-width: 600px) {
        margin: 25px;
    }
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    justify-content: space-around;
    border-radius: 5px;
`;

export const Title = styled.h2`
     font-size: 40px;
     font-weight: 500;
     line-height: 40px;
`;

export const TextItem = styled.p`
    margin: 5px 20px;
    font-weight: 500;
    font-size: 16px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0px;
    background: ${({theme}) => theme.secondarycolor};
    color: ${({theme}) => theme.bgcolor};
    border-radius: 5px;
    padding: 10px 20px;

    ${Title} {
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 75px;
        letter-spacing: 0.02em;
    }
`;

export const SubHeader = styled.div`
    display: flex;
    ${TextItem} {
        font-style: normal;
        font-weight: 500;
        font-size: 25px;
        line-height: 37px;
        letter-spacing: 0.02em;
    }
`;

export const Article = styled.article`
     line-height: 2em;
     font-style: normal;
     font-weight: normal;
     font-size: 35px;

    @media(max-width: 600px) {
        font-size: 30px;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;

    & blockquote{
        border-left: 1px solid ${({theme}) => theme.primarycolor};
        padding: 5px 10px;
        font-style: italic;
    }

    & p {
    }

    & h3 {
        color: ${({theme}) => theme.primarycolor};
        filter: hue-rotate(45deg);
        opacity: 500;
    }

    & ol, ul {
        border-left: 1px solid ${({theme}) => theme.primarycolor};
        font-weight: 400;
        li {
            color: ${({theme}) => theme.primarycolor};
        }
    }

    & pre {
        background: #f5f5f5;
        padding: 20px 30px;
        color: currentColor;
        font-weight: 500;
        white-space: pre-wrap;
        border-radius: 5px;
        border: 1px solid #d3dce6;
    }

    & code {
        font-family: Operator Mono A,Operator Mono B,Source Code Pro,Menlo,Consolas,Monaco,monospace;
        font-weight: 400;
    }

    & a {
        color: #0556f3;
    }

    & a:hover {
        text-decoration: underline;
        letter-spacing: 1px;
        transition: 0.3s ease-in-out;
        color: ${({theme}) => theme.primarycolor};
        opacity: 0.8;
    }

    & em {
        color: ${({theme}) => theme.primarycolor};
    }

    & strong {
        font-weight: 600;
    }
`;