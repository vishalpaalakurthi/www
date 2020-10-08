import Pallette from './elements';
import { useContext } from 'react';
import {ThemeContext } from 'styled-components';

export default function palletteconatainer () {
    const { theme, setThemed } = useContext(ThemeContext);

    function onChangeTheme (theme) {
        setThemed(theme)
    }

    return (
        <Pallette>
            <Pallette.ColorSquare style={{color:'white'}} onClick={() => onChangeTheme(theme.light)} />
            <Pallette.ColorSquare  style={{color:'black'}} onClick={() => onChangeTheme(theme.dark)} />
        </Pallette>
    )
}