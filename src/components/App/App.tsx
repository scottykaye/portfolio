import React, {
  ReactNode, useEffect, SetStateAction, useState,
} from 'react';
import { useRouter } from 'next/router';
import {
  useTheme, dark, light, useLocalStorage,
} from '../../hooks';
import * as styles from './App.css';
import Header, { HeaderContainer, HeaderStack } from '../Header';
import Heading from '../Heading';
import { Navigation, NavItem, NavLink } from '../Navigation';
import MainContent from '../MainContent';
import Footer, { FooterRightContainer } from '../Footer';
import Logo from '../Logo';
import Select from '../Select';
import Sidebar from '../Sidebar';
import Stack from '../Stack';
import Button from '../Button';
import useNavigation from '../useNavigation';
import ThemeProvider from '../ThemeProvider';
import '../../theme/global-reset.css';

interface Props {
  children: ReactNode;
}

function AppContainer(props: Props) {
  const router = useRouter();

  const logoBackgroundColor = styles.logoBGColor;
  const logoPrimaryColor = styles.logoFillColor;
  const { currentTheme, setCurrentTheme } = useTheme();
  const [colorMode, setColorMode] = useLocalStorage('os', 'colorMode');

  function handleChange(event: any) {
    if (event.target.value === 'os') {
      // if it's the os operating system we're gonna set the theme based on it an dstore the color mode in state
      setCurrentTheme(globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light);
    } else {
      setCurrentTheme(event.target.value);
    }

    setColorMode(event.target.value);
  }
  // MouseEvent<HTMLInputElement>)

  function handleOptionClick(event: any) {
    if (event.target.textContent === 'os') {
      // if it's the os operating system we're gonna set the theme based on it an dstore the color mode in state
      setCurrentTheme(globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light);
    } else {
      setCurrentTheme(event.target.textContent);
    }

    setColorMode(event.target.textContent as SetStateAction<string>);
  }

  useEffect(() => {
    if (colorMode === 'os') {
      setCurrentTheme(globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light);
    }
  }, [colorMode, setCurrentTheme]);

  //  stuff related to sidebar

  const [resize, setResize] = useState(typeof window !== 'undefined' ? '75px' : '50px');

  function handleToggle() {
    setResize((p) => (p === '50px' ? '250px' : '50px'));
  }

  const collapsedLinks = resize === '50px';

  const refs = [...Array(3).keys()].map(() => React.useRef(null));

  const { handleKey } = useNavigation(refs);

  return (
    <Sidebar.Wrapper>
      <Sidebar resize={resize}>
        <Stack>
          <Button onClick={() => console.log('Home')} onKeyDown={handleKey} ref={refs[0]}>
            Home
          </Button>
          <Button onClick={() => console.log('Blog')} onKeyDown={handleKey} ref={refs[1]}>
            Blog
          </Button>
          <Button onClick={() => console.log('Social')} onKeyDown={handleKey} ref={refs[2]}>
            Social
          </Button>

        </Stack>
      </Sidebar>
      <Sidebar.Page>
        <div><Button type="button" onClick={handleToggle}>toggle</Button></div>
        <Header>
          <Logo backgroundColor={logoBackgroundColor} foregroundColor={logoPrimaryColor} />
          <Heading>
            ScottyKaye
          </Heading>
          <Navigation>
            <NavItem><NavLink isActive={router.pathname === '/'} href="/">Home</NavLink></NavItem>
            <NavItem><NavLink isActive={router.pathname === '/blog'} href="/blog">Blog</NavLink></NavItem>
          </Navigation>
          <HeaderContainer>
            <HeaderStack>
              <Select
                label="Theme Select"
                options={[
                  { onKeyDown: handleOptionClick, onClick: handleOptionClick, value: 'os' },
                  { onKeyDown: handleOptionClick, onClick: handleOptionClick, value: 'light' },
                  { onKeyDown: handleOptionClick, onClick: handleOptionClick, value: 'dark' },
                ]}
                defaultValue={[colorMode]}
              />
              <p>
                <select value={colorMode} name="mode" id="mode" onChange={handleChange}>
                  <option value="os">OS Default</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </p>
              <p>{`${typeof currentTheme === 'string' && currentTheme.charAt(0).toUpperCase()}${currentTheme.slice(1)} theme`}</p>
            </HeaderStack>
          </HeaderContainer>
        </Header>
        <MainContent>
          {props.children}
        </MainContent>
        <Footer>
          <div>
            ScottyKaye
            {' '}
            {new Date().getFullYear()}
          </div>
          <FooterRightContainer>
            <a aria-label="Instagram" href="https://www.instagram.com/squattykaye" target="_blank" rel="noreferrer">
              <svg fill="inherit" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <title>Instagram</title>
                <desc>View ScottyKaye on Instagram</desc>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a aria-label="Twitter" href="https://twitter.com/scottykaye" target="_blank" rel="noreferrer">
              <svg fill="inherit" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <title>Twitter</title>
                <desc>View ScottyKaye on Twitter</desc>
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a aria-label="GitHub" href="https://github.com/scottykaye/" target="_blank" rel="noreferrer">
              <svg fill="inherit" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <title>GitHub</title>
                <desc>View ScottyKaye on GitHub</desc>
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </FooterRightContainer>
        </Footer>
      </Sidebar.Page>
    </Sidebar.Wrapper>
  );
}

export default function App(props: Props) {
  return (
    <ThemeProvider>
      <AppContainer {...props} />
    </ThemeProvider>
  );
}
