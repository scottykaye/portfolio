import React, {
  createContext, ReactNode, useContext, CSSProperties,
} from 'react';
import cx from 'classnames';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './Sidebar.css';

type Anchor = 'left' | 'right';
interface Context {
  /** The size of the Sidebar */
  size?: string;
  /** The side the Sidebar is anchored to */
  anchor?: Anchor;
  /** Whether the Sidebar is anchored to it's parent or if false anchored to the window */
  isAnchoredToParent?: boolean;
}
const SidebarContext = createContext<Context>({});

interface WrapperProps extends Context {
  /** The children rendered in the Sidebar.Wrapper component */
  children: ReactNode;
}

function Wrapper({
  children,
  size = '250px',
  anchor = 'left',
  isAnchoredToParent = false,
}: WrapperProps) {
  const sharedContext = React.useMemo(() => ({
    size,
    isAnchoredToParent,
    anchor,
  }), [size,
    isAnchoredToParent,
    anchor]);

  return (
    <SidebarContext.Provider value={sharedContext}>
      <div
        className={styles.wrapper}
        style={assignInlineVars({ [styles.sidebarSize]: size })}
      >
        {children}

      </div>
    </SidebarContext.Provider>
  );
}

interface PageProps extends Context {
  /** The children rendered in the Sidebar.Page component */
  children?: ReactNode;
}

function Page({ children }: PageProps) {
  const { size, anchor, isAnchoredToParent } = useContext(SidebarContext);

  return (
    <div className={cx(styles.page, styles.pageSize[anchor === 'left' ? 'left' : 'right'])}>
      {children}
    </div>
  );
}

interface Props {
  /** The children rendered in Sidebar component */
  children: ReactNode;
  /** The top numeric position the Sidebar will stick at */
  top?: CSSProperties['top'];
  /** The top numeric position the Sidebar will stick at */
  bottom?: CSSProperties['bottom'];
  /** Background color of Sidebar */
  backgroundColor?: CSSProperties['backgroundColor'];
  props?: { [key: string]: unknown };
}

// Create two interfaces, both in which setting that the other should never happen.
interface LabelWithoutHeading extends Props {
  /** Label of whats contained in the Sidebar */
  label: string;
  /** Identifier to the label thats in the Sidebar */
  labelledBy?: never;
}
interface LabelWithHeading extends Props {
  /** Label of whats contained in the Sidebar */
  label?: never;
  /** Identifier to the label thats in the Sidebar */
  labelledBy: string;
  /** The display property for the Sidebar */
  display?: CSSProperties['display'];
  /** The flex direction of the Sidebar */
  flexDirection?: CSSProperties['flexDirection'];
  /** The top start point of where the Sidebar sticks to */
  top?: CSSProperties['top'];
  /** The bottom start point of where the Sidebar sticks to */
  bottom?: CSSProperties['bottom'];
}

// Create a union that makes clear one or the other should not both.
type AccessibleLabelWithProps = LabelWithoutHeading | LabelWithHeading;

function Sidebar({
  children, labelledBy, label, top = '0', bottom = '0', ...props
}: AccessibleLabelWithProps) {
  const { isAnchoredToParent } = useContext(SidebarContext);

  return (
    <nav
      {...props}
      aria-label={label}
      aria-labelledby={labelledBy}
      className={cx(styles.sidebar, styles.isAnchoredToParent[isAnchoredToParent ? 'sticky' : 'fixed'])}

    >
      {children}
    </nav>
  );
}

export default Object.assign(Sidebar, {
  Wrapper,
  Page,
});
