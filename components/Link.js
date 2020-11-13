import React from 'react';
import styled from 'styled-components';
import NavLink from 'next/link';
import { useRouter } from 'next/router';
import { theme } from '../Theme';

export default ({ to, label }) => {
    const router = useRouter();
    let isSelected = false;
    if (router.pathname === to) {
        isSelected = true;
    }

    return (
        <NavLink
            href={to}>
            <a style={{ display: 'flex', padding: '5px', fontStyle: 'normal', 
                        fontWeight: isSelected ? '500' : '400', 
                        lineHeight: '52px', color: isSelected ? "#3A48C6" : "currentcolor" }}>
                <span>{label.toUpperCase()}</span>
            </a>
        </NavLink>
    )
}