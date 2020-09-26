import React from 'react';
import styled from 'styled-components';
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { github, linkedin, instagram, twitter } from 'react-icons-kit/fa';

export default () => {
    return (
        <SocialWrapper>
            <NavLink href="https://www.linkedin.com/in/vishal-paalakurthi-11481a8a">
                <a target="_blank">
                    <Icon icon={linkedin} size={20} />
                </a>
            </NavLink>
            <NavLink href="https://github.com/vishalpaalakurthi/">
                <a target="_blank">
                    <Icon icon={github} size={20} />
                </a>
            </NavLink>
            <NavLink href="https://twitter.com/VPaalakurthi">
                <a target="_blank">
                    <Icon icon={twitter} size={20} />
                </a>
            </NavLink>
            <NavLink href="https://www.instagram.com/uiuxvignanam/">
                <a target="_blank">
                    <Icon icon={instagram} size={20} />
                </a>
            </NavLink>
             <NavLink href="https://dev.to/vishalpaalakurthi">
                <a target="_blank">
                    <h4 style={{fontSize: '15px', paddingTop: '5px'}}>DEV</h4>
                </a>
            </NavLink>
            <style jsx="true">
                {`
                    a {
                        margin: 10px;
                    }
                `}
            </style>
        </SocialWrapper>
    )
}

const SocialWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;