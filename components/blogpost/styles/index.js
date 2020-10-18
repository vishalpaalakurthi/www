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
    padding: 10px 20px;
    justify-content: space-around;
    background: ${({theme}) => theme.blogBg};
    border-radius: 5px;
`;

export const Title = styled.h2`
     font-size: 40px;
     font-weight: 500;
     line-height: 40px;
`;

export const TextItem = styled.p`
    margin: 5px 10px;
    font-weight: 500;
    font-size: 16px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0px;

    ${Title} {
        color: ${({theme}) => theme.primarycolor}
    }
`;

export const SubHeader = styled.div`
    display: flex;
    ${TextItem} {
        font-weight: 300;
    }
`;

export const Article = styled.article`
     font-size: 15px;
     font-weight: 400;
     line-height: 2em;
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
            filter: hue-rotate(45deg);
        }
    }

    & pre {
        background: ${({theme}) => theme.primarycolor};
        padding: 20px 30px;
        color: ${({theme}) => theme.bgcolor};
        font-weight: 500;
        white-space: pre-line;
        border-radius: 5px;
    }

    & code {
        font-family: Operator Mono A,Operator Mono B,Source Code Pro,Menlo,Consolas,Monaco,monospace;
        font-size: 15px;
        font-weight: 400;
    }

    & a {
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