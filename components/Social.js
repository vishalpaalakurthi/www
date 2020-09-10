import React from 'react';
import styled from 'styled-components';
import NavLink from 'next/link';
import Icon from 'react-icons-kit';
import { github, linkedin, instagram, twitter } from 'react-icons-kit/fa';

export default () => {
    return (
        <SocialWrapper>
            <NavLink href="">
                <a>
                    <Icon icon={linkedin} size={20} />
                </a>
            </NavLink>
            <NavLink href="https://github.com/vishalpaalakurthi/">
                <a>
                    <Icon icon={github} size={20} />
                </a>
            </NavLink>
            <NavLink href="">
                <a>
                    <Icon icon={twitter} size={20} />
                </a>
            </NavLink>
            <NavLink href="">
                <a>
                    <Icon icon={instagram} size={20} />
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