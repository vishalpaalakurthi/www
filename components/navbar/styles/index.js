import styled from 'styled-components';
import NavLink from 'next/link';

export const Container = styled.div`
    display: flex;
    margin: 5px 10px;
    width: 100%;
    position: sticky;
    top: 0;
    background: ${({theme}) => theme.bgcolor};
    z-index: 1;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LinkWrapper = styled.div`
    padding: 5px;
    margin: 0px 10px;
    font-weight: 600;
    transition: 0.3s ease-in;

    &:hover {
        font-weight: 700;
        opacity: 0.8;
        letter-spacing: 1px;
        transition: 0.3s ease-in-out;
    }
`;

export const Link = styled(NavLink)`
`;

export const Logo = styled.div`
    padding: 5px;
    margin: 0px 10px;
`;