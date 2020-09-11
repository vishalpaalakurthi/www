import styled, { createGlobalStyle, ThemeProvider, ThemeContext } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import Nav from './components/Nav'
import Home from './pages/index'
import Social from './components/Social';

export const theme = {
    light: {
        bgcolor: '#FFFFFF',
        textcolor: '#000000'
    }
}

export const GlobalStyles = createGlobalStyle`
  html {
      scroll-behavior: smooth;
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
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    font-family: Poppins;
    font-style: normal;
    margin: 0;
    padding: 5px 15px;
    transition: all 0.25s linear;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  h1, h4, p {
      margin: 10px 0px;
  }
  h1 {
      font-size: 30px;
  }
  h3 {
      font-weight: 600;
      font-size: 20px;
      text-transform: uppercase;
  }
  .sectionTitle {
      color: #00CD37;
  }
  footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
  }

  .gridWrapper {
    display: flex;
    height: auto;
    border-radius: 15px;
    flex-direction: column;
    margin: 40px;  
  }

.secHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 5px;
}
.secBody {
    display: flex;
    height: auto;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
}
.overviewBody {
    flex-direction: column;
    margin: 10px 5px;
    background: transparent;
    flex:1;
    border-radius: 5px;
    padding: 5px;
}

  .overview {
      display: flex;
      min-height: 100px;
      height: auto;
      border-radius: 1px solid black;
      width: 50%;
  }

  @media (max-width: 600px) {
          .overview {
            width: 100%;
          }
    }

`;

export const ThemeWrapper = ({ children }) => {
    const [themed, setThemed] = React.useState(theme.light);

    return (
        <>
            <ThemeContext.Provider value={themed}>
                <ThemeProvider theme={themed}>
                    <GlobalStyles />
                    <Wrapper>
                        <Nav />
                        <MDXProvider>
                            {children}
                        </MDXProvider>
                        <footer>
                            <Social />
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