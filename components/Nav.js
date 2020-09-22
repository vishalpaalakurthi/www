import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link'
import Logo from './Logo';

export default () => {
    return (
        <Header>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                padding: '5px 5px',
                textTransform: 'uppercase'
            }}>
                <Logo />
                <NavWrapper>
                    <Link to="/" label="Home" />
                    <Link to="/blog" label="articles" />
                    <Link to="/#projects" label="Projects" />
                    <Link to="/#contactus" label="Contact" />
                </NavWrapper>
            </nav>
        </Header>
    )
}

const NavWrapper = styled.div`
    display: flex;
    list-style: none;
`;

const Header = styled.header`
    position: sticky;
    top: 0;
    background: transparent;
    display: flex;
    padding: 5px;
    z-index: 999;
    background: darkorange;
`;