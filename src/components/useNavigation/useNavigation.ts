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
const useNavigation = (listItems, orientation = 'vertical') => {
  const handleKey = (e) => {
    const currentIndex = listItems.findIndex(
      (ref) => ref.current === document.activeElement,
    );

    if (/^[a-z0-9]$/i.test(e.key)) {
      const newOrder = [
        ...listItems.slice(currentIndex, listItems.length),
        ...listItems.slice(0, currentIndex),
      ];

      const index = newOrder.findIndex((ref) => {
        if (ref.current === document.activeElement) {
          return false;
        }

        const removeSpacesFromString = ref.current?.textContent
          // Make sure to remove any type of white space
          .split(/\s+/)
          .join('')
          .toLowerCase();

        return removeSpacesFromString?.startsWith(e.key);
      });

      if (index === -1) {
        return null;
      }

      newOrder[index]?.current?.focus();
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

export default useNavigation;
