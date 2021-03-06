import styled, { createGlobalStyle, ThemeProvider, ThemeContext } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import Home from './pages/index'
import Social from './components/Social';
import NavBar from './components/navbar';

export const theme = {
    light: {
        bgcolor: '#FFFFFF',
        textcolor: '#100e17',
        primarycolor: '#100e17',
        secondarycolor: "#3A48C6",
        blogBg: '#FFFFFF',
        highlitecolor: '#ff6363'
    },
    dark: {
        bgcolor: '#100e17',
        textcolor: '#FFFFFF',
        primarycolor: '#ff6363'
    }
}

export const GlobalStyles = createGlobalStyle`
  html {
      scroll-behavior: smooth;
      line-height: 30px;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
            width: 14px;
            height: 14px
        }
        ::-webkit-scrollbar-track {
            background-color: transparent
        }
        ::-webkit-scrollbar-thumb,::-webkit-scrollbar-track {
            border: 4px solid transparent;
            background-clip: padding-box;
            border-radius: 8px
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.textcolor}
        }
        ::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0
        }
        ::-webkit-scrollbar-corner {
            background-color: transparent
        }

  body {
    background: ${({ theme }) => theme.bgcolor};
    color: ${({ theme }) => theme.textcolor};
    display: grid;
    overflow-x: hidden;
    font-style: normal;
    margin: 0;
    transition: all 0.25s linear;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
  }

  @media (max-width: 600px) {
 }

`;

export const ThemeWrapper = ({ children }) => {
    const [themed, setThemed] = React.useState(theme.light);

    return (
        <>
            <ThemeContext.Provider value={{themed, setThemed, theme}}>
                <ThemeProvider theme={themed}>
                    <GlobalStyles />
                    <Wrapper>
                        {/* <Nav /> */}
                        <NavBar />
                        <MDXProvider>
                            {children}
                        </MDXProvider>
                        <footer style={{display: 'flex', justifyContent: 'flex-end', margin: '10px 0px'}}>
                            <Social size={40} />
                        </footer>
                    </Wrapper>
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}

const Wrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;
`;