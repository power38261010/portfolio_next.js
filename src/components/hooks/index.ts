import { useState, useRef, useEffect, useCallback } from 'react';

const useScrollButtons = (id: string | number) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<{
    [key: string | number]: {
      isScrollableLeft: boolean;
      isScrollableRight: boolean;
    };
  }>({
    [id]: {
      isScrollableLeft: false,
      isScrollableRight: false,
    },
  });

  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setScrollState((prevState) => ({
        ...prevState,
        [id]: {
          isScrollableLeft: scrollLeft > 0,
          isScrollableRight: Math.ceil(scrollLeft + clientWidth) < scrollWidth,
        },
      }));
    }
  }, [id]);

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => {
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [checkScrollButtons]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return {
    scrollContainerRef,
    isScrollableLeft: scrollState[id]?.isScrollableLeft || false,
    isScrollableRight: scrollState[id]?.isScrollableRight || false,
    scrollLeft,
    scrollRight,
    checkScrollButtons,
  };
};

export default useScrollButtons;
