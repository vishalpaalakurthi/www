import React from 'react';
import { DefaultSeo } from 'next-seo';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import SEO from './next-seo.config';

import Icon from 'react-icons-kit';
import { moon, sun } from 'react-icons-kit/feather';

import MDXComponents from './components/MDXComponents';
import Nav from './components/Nav';

export const theme = {
  light: {
    background: '#fefefe',
    color: '#121212',
    tint: 'rgba(255 255 255 / 80%)',
    accent: 'green'
  },
  dark: {
    background: '#001321',
    color: '#fefefe',
    tint: 'rgb(0 16 29 / 60%)',
    accent: 'palegreen'
  }
};

export const ThemeContext = React.createContext({
  themed: theme.dark,
  setThemed: () => {}
});

export const GlobalStyle = createGlobalStyle`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background:${(props) => props.theme.background};
          scroll-behavior: smooth;
        } 
        * {
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
            background-color: ${(props) => props.theme.accent}
        }
        ::-webkit-scrollbar-button {
            display: none;
            width: 0;
            height: 0
        }
        ::-webkit-scrollbar-corner {
            background-color: transparent
        }
        a{
            text-decoration:none;
            color:inherit;
        }
        
        main {
          padding: 5rem 0;
          flex: 1; 
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: palegreen;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }
 

        .description {
          line-height: 1.5;
          font-size: 1.2rem;
        }

        code { 
            border: 1px solid aaa;
          border-radius: 5px;
          padding: 0.75rem; 
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: palegreen;
          border-color: palegreen;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
`;

export const ThemedButton = () => (
  <ThemeContext.Consumer>
    {({ themed, setThemed }) => (
      <Button
        onClick={() => {
          themed === theme.light
            ? localStorage.setItem('theme', 'dark')
            : localStorage.setItem('theme', 'light');
          setThemed(themed === theme.light ? theme.dark : theme.light);
        }}
      >
        {' '}
        {themed === theme.light ? <Icon icon={moon} /> : <Icon icon={sun} />}
      </Button>
    )}
  </ThemeContext.Consumer>
);

const Button = styled.button`
  background: inherit;
  outline: none;
  border: none;
  color: ${(props) => props.theme.color};
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
`;

export const ThemeWrapper = ({ children }) => {
  const [themed, setThemed] = React.useState(theme.dark);

  React.useEffect(() => {
    const _theme = localStorage.getItem('theme');
    if (_theme === 'light') {
      setThemed(theme.light);
      localStorage.setItem('theme', 'light');
    } else {
      setThemed(theme.dark);
      localStorage.setItem('theme', 'dark');
    }
  }, [themed]);

  return (
    <>
      <ThemeContext.Provider value={{ themed, setThemed }}>
        <ThemeProvider theme={themed}>
          <GlobalStyle />
          <Nav />
          <Wrapper>
            <DefaultSeo {...SEO} />
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </Wrapper>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
};
const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  max-width: 800px;
  margin: auto;
  min-height: 100vh;
  padding: 0 0.5rem;
`;
