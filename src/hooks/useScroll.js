import React, { useEffect, useState } from 'react';
import { ScrollContext } from './userContext';

export const ScrollProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const isScrollMoved = offset > 20;

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrollMoved }}>
      {children}
    </ScrollContext.Provider>
  );
};
