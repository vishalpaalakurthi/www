import NavBar from './elements';
import Logo from '../Logo';
import Pallette from '../pallette';

const NavBarContainer = () => {
    return (
        <NavBar>
            <NavBar.Logo>
                <Logo />
            </NavBar.Logo>
            <NavBar.Links>
                <NavBar.LinkWrapper>
                    <NavBar.Link to="/" label="Home" />
                </NavBar.LinkWrapper>
                <NavBar.LinkWrapper>
                    <NavBar.Link  to="/blog" label="Articles" />
                </NavBar.LinkWrapper>
                <NavBar.LinkWrapper>
                    <NavBar.Link  to="/#projects" label="Projects" />
                </NavBar.LinkWrapper>
                <NavBar.LinkWrapper>
                    <NavBar.Link  to="/#contactus" label="Contact" />
                </NavBar.LinkWrapper>
                <Pallette />
            </NavBar.Links>
        </NavBar>


    )
}

export default NavBarContainer;