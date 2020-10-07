import React, { useState, useContext } from 'react';
import {ThemeContext } from 'styled-components';

export default () => {
    const { theme, themed, setThemed } = useContext(ThemeContext);

    const [ ti, setti ] = useState(0);

    function onChangeTheme () {
        if( ti === 0 ) {
            setti(1)
            setThemed(theme.dark)
        } else {
            setti(0)
            setThemed(theme.light)
        }
    }

    return (
        <div onClick={() => onChangeTheme()}>
            <svg width="30" height="30" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.75 45C3.31667 44.7667 4.25 44.3833 5.55 43.85C6.81666 43.3167 8.26666 42.7167 9.9 42.05C11.5333 41.35 13.2667 40.6333 15.1 39.9C16.9333 39.1333 18.6667 38.4167 20.3 37.75C21.9333 37.0833 23.4 36.4833 24.7 35.95C25.9667 35.4167 26.8833 35.0333 27.45 34.8C27.5167 34.7667 27.75 34.6833 28.15 34.55C28.55 34.4167 28.9 34.3167 29.2 34.25L27.45 33.75C26.8833 33.5167 25.9667 33.1333 24.7 32.6C23.4 32.0667 21.9333 31.4667 20.3 30.8C18.6667 30.1333 16.9333 29.4333 15.1 28.7C13.2667 27.9333 11.5333 27.2167 9.9 26.55C8.26666 25.85 6.81666 25.2333 5.55 24.7C4.25 24.1667 3.31667 23.7833 2.75 23.55L2.75 18.15C3.21667 18.35 4.06667 18.7167 5.3 19.25C6.5 19.75 7.96667 20.3667 9.7 21.1C11.4333 21.8333 13.3333 22.65 15.4 23.55C17.4667 24.4167 19.5667 25.3167 21.7 26.25C23.8333 27.15 25.9333 28.05 28 28.95C30.0667 29.8167 31.9667 30.6167 33.7 31.35C35.4333 32.05 36.9167 32.6667 38.15 33.2C39.35 33.7 40.1833 34.05 40.65 34.25L2.75 50.4V45Z" fill="currentcolor" />
                <path d="M6.45 18.9H11.4C12.7333 18.9 13.85 18.6667 14.75 18.2C15.65 17.7333 16.35 17.1667 16.85 16.5C17.3833 15.8333 17.75 15.1167 17.95 14.35C18.1833 13.5833 18.3 12.9 18.3 12.3C18.3 11.6667 18.1833 10.9833 17.95 10.25C17.75 9.48333 17.3833 8.78333 16.85 8.15C16.3167 7.48333 15.6 6.93333 14.7 6.5C13.8333 6.06667 12.75 5.85 11.45 5.85H6.45V18.9ZM0.95 37V0.749999H10.85C12.75 0.749999 14.4833 0.999999 16.05 1.5C17.65 2 19.0167 2.75 20.15 3.75C21.3167 4.71667 22.2167 5.91666 22.85 7.35C23.4833 8.75 23.8 10.3667 23.8 12.2C23.8 13.6333 23.5833 15.0667 23.15 16.5C22.7167 17.9 22.0167 19.1667 21.05 20.3C20.0833 21.4 18.8167 22.3 17.25 23C15.6833 23.7 13.7833 24.05 11.55 24.05H6.45V37H0.95Z" fill="currentcolor" />
            </svg>


        </div>
    )
}