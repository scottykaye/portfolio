import React from 'react';
import Wrapper from '../Wrapper';
import {
  headerStyle, innerHeaderStyle, rightStyle, centerStyle,
} from './Header.css';
import {
  useTheme,
} from '../../hooks';

export default function Header(props) {
  return (
    <header className={headerStyle} {...props}>
      <Wrapper>
        <div className={innerHeaderStyle}>{props.children}</div>
      </Wrapper>
    </header>
  );
}

export function SplitContainer(props) {
  return <div className={rightStyle} {...props} />;
}

export function CenterContainer(props) {
  return <div className={centerStyle} {...props} />;
}
