import React from 'react';
import styled from 'styled-components';
import NavLink from 'next/link';
import { useRouter } from 'next/router';

export default ({ to, label }) => {
    const router = useRouter();
    let isSelected = false;
    if (router.pathname === to) {
        isSelected = true;
    }

    return (
        <NavLink
            href={to}>
            <a style={{ display: 'flex', padding: '5px 10px' }}>
                <span>{label}</span>
                {isSelected && (
                    <Bucket />
                )}
            </a>
        </NavLink>
    )
}

const Bucket = styled.div`
    position: absolute;
    background: ${({theme}) => theme.highlitecolor};
    padding: 10px 15px;
    width: 30px;
    z-index: -1;
    opacity: 0.6;
    margin: 5px 0px;
`;