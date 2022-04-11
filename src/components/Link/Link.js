import { useRouter } from 'next/router';
import { linkStyles } from './LinkStyles.css';

export default function Link({ children, href, ...props }) {
  const { isActive, ...rest } = props;

  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} className={linkStyles} {...rest}>
      {children}
    </a>
  );
}
