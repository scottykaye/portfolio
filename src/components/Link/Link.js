import { useRouter } from 'next/router';

export default function Link({ children, href, ...props }) {
  const { isActive, ...rest } = props;

  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
