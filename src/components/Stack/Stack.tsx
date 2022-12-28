import { ReactNode } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import cx from 'classnames';
import * as styles from './Stack.css';

interface Props {
  children: ReactNode;
  size?: string;
  isFullHeight?: boolean;
  rest?: { [key: string]: unknown };
  p?: '0' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  py?: '0' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  px?: '0' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  pl?: '0' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  pr?: '0' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  pt?: '0' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
  pb?: '0' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '1000'
 }

export default function Stack({
  children, isFullHeight = false, p, py, px, pt, pb, pl, pr, size = '10px', ...rest
}: Props) {
  return (
    <div
      {...rest}
      style={assignInlineVars({ [styles.size]: size })}
      className={cx(styles.base, {
        [styles.grow]: isFullHeight,
        [styles.padding[p]]: p,
        [styles.py[py]]: py,
        [styles.px[px]]: px,
        [styles.pl[pl]]: pl,
        [styles.padding[pr]]: pr,
        [styles.pb[pb]]: pb,
        [styles.pt[pt]]: pt,
      })}

    >
      {children}
    </div>
  );
}
