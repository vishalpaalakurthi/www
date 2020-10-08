import Icon from 'react-icons-kit';
import { circle } from 'react-icons-kit/fa';
import { Container, Inner, IconWrapper } from '../styles';

export default function Pallette({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Pallette.ColorSquare = function PalletteColorSquare({children, ...restProps}) {
    return (
        <IconWrapper {...restProps}>
            <Icon icon={circle} />
        </IconWrapper>
    )
}