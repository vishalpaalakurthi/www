import { Container, Inner, PasteBox } from '../styles';

export default function CpContainer ({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

CpContainer.PasteBox = function CpContainerPasteBox({children, ...restProps}) {
    return (
        <PasteBox {...restProps}>
            {children}
        </PasteBox>
    )
}