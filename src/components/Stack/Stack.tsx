import { ReactNode } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Stack.css';

interface Props {
  children: ReactNode;
  size?: string;
  rest?: { [key: string]: unknown };
}

export default function Stack({ children, size = '10px', ...rest }: Props) {
  return (
    <div
      {...rest}
      className={styles.base}
      style={assignInlineVars({ [styles.size]: size })}
    >
      {children}
    </div>
  );
}
