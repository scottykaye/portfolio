import { useState } from 'react';

const ORIENTATION = {
  vertical: {
    back: 'ArrowUp',
    forward: 'ArrowDown',
  },
  horizontal: {
    back: 'ArrowLeft',
    forward: 'ArrowRight',
  },
};

// vertical vs horizontal style navs
const useNavAccessibility = (listItems, orientation = 'vertical') => {
  const [, setIsTyped] = useState('');
  const handleKey = (e) => {
    if (/^[a-z0-9]$/i.test(e.key)) {
      // @ts-ignore
      clearTimeout(() => { });

      setTimeout(() => {
        setIsTyped('');
      }, 500);

      setIsTyped((prevState) => {
        const typed = prevState + e.key;
        const re = new RegExp(`^${typed}`, 'i');

        const index = listItems.findIndex((option) => re.test(option.current.textContent));

        if (index === -1) {
          return typed;
        }
        listItems[index]?.current?.focus();

        return typed;
      });
    }

    if (

      e.key !== ORIENTATION[orientation].back
      && e.key !== ORIENTATION[orientation].forward
      && e.key !== 'Home'
      && e.key !== 'End'
    ) {
      return null;
    }

    // Prevent scrolling on arrows if need be
    e.preventDefault();
    const currentIndex = listItems.findIndex((ref) => ref.current === document.activeElement);

    if (currentIndex === -1) {
      return null;
    }

    const lastIndex = listItems.length - 1;

    if (currentIndex === 0) {
      if (e.key === ORIENTATION[orientation].back) {
        return listItems[lastIndex]?.current?.focus();
      }
    }

    if (currentIndex === lastIndex) {
      if (e.key === ORIENTATION[orientation].forward) {
        return listItems[0]?.current?.focus();
      }
    }

    if (e.key === 'Home') {
      return listItems[0]?.current.focus();
    }

    if (e.key === 'End') {
      return listItems[lastIndex]?.current.focus();
    }

    const indexChange = e.key === ORIENTATION[orientation].back ? -1 : 1;

    return listItems[currentIndex + indexChange]?.current?.focus();
  };

  return { handleKey };
};

export default useNavAccessibility;
