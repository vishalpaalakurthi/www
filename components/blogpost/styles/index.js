import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 40px;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    justify-content: space-around;
`;

export const Title = styled.h2`
     font-size: 30px;
     font-weight: 500;
`;

export const TextItem = styled.p`
    margin: 5px 10px;
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
     font-weight: 300;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;

    & blockquote{
        border-left: 1px solid ${({theme}) => theme.primarycolor};
        padding: 5px 10px;
        font-style: italic;
    }

    & h3 {
        color: ${({theme}) => theme.primarycolor};
        filter: hue-rotate(45deg);
        opacity: 300;
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
        background: linear-gradient(45deg, black, transparent);
        padding: 10px 20px;
        color: ${({theme}) => theme.primarycolor};
        filter: hue-rotate(45deg);
        font-weight: 500;
    }

    & code {
        font-family: Operator Mono A,Operator Mono B,Source Code Pro,Menlo,Consolas,Monaco,monospace;
        font-size: 13px;
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