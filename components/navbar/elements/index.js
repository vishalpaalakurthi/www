import NavLink from '../../Link';
import { Container, Inner, NavLinks, Link, Logo, LinkWrapper } from '../styles';

export default function NavBar ({children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

NavBar.Links = function NavBarLinks({children, ... restProps}) {
    return (
        <NavLinks {...restProps}>
            {children}
        </NavLinks>
    )
}

NavBar.LinkWrapper = function NavBarLinkWrapper({children, ...restProps}) {
    return (
        <LinkWrapper {...restProps}>
            {children}
        </LinkWrapper>
    )
}

NavBar.Link = function NavBarLink({children, ... restProps}) {
    return (
        <NavLink {...restProps} />
    )
}

NavBar.Logo = function NavBarLogo({children, ...restProps}) {
    return (
        <Logo>
            {children}
        </Logo>
    )
}