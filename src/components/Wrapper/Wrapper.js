import { wrapperStyles } from './Wrapper.css';

export default function Wrapper({ children }) {
  return <div className={wrapperStyles}>{children}</div>;
}
