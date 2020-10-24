import React from 'react';
import styled from 'styled-components';
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { github, linkedin, instagram, twitter } from 'react-icons-kit/fa';

export default ({size}) => {
    return (
        <SocialWrapper>
            <h5 style={{fontSize:'45px'}}>________</h5>
            <NavLink href="https://www.linkedin.com/in/vishal-paalakurthi-11481a8a">
                <a target="_blank">
                    <Icon icon={linkedin} size={size} />
                </a>
            </NavLink>
            <NavLink href="https://github.com/vishalpaalakurthi/">
                <a target="_blank">
                    <Icon icon={github} size={size} />
                </a>
            </NavLink>
            <NavLink href="https://twitter.com/VPaalakurthi">
                <a target="_blank">
                    <Icon icon={twitter} size={size} />
                </a>
            </NavLink>
            <NavLink href="https://www.instagram.com/uiuxvignanam/">
                <a target="_blank">
                    <Icon icon={instagram} size={size} />
                </a>
            </NavLink>
             <NavLink href="https://dev.to/vishalpaalakurthi">
                <a target="_blank">
                    <h3 style={{fontSize: size-10}}>DEV</h3>
                </a>
            </NavLink>
        </SocialWrapper>
    )
}

const SocialWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({theme}) => theme.secondarycolor};

    & h5 {
        color:  ${({theme}) => theme.textcolor};
        margin: 25px 0px;
        font-style: normal;
        font-weight: 500;
    }

    & a {
        margin: 10px;
        transition: 0.3s ease-in;
    }
    & a:hover {
        opacity: 0.5;
        transition: 0.3s ease-in-out;
    }
`;