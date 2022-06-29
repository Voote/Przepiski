import React, { useState, useEffect } from 'react';
import Landing from 'views/Landing';
import ReciepsMenu from 'components/molecules/ReciepsMenu/ReciepsMenu';
import { useQuery } from 'graphql-hooks';
import { options } from 'assets/arrays';
import { UserContext } from 'hooks/userContext';
import { Logo } from 'components/atoms/Logo/Logo';

const MainTemplate = () => {
  const [offset, setOffset] = useState(0);
  const isScrollMoved = offset > 20;

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // console.log({ offset, isScrollMoved });

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const query = `
  {
    allNewReciepes(orderBy: name_DESC, filter: {
      category: {
        matches: {
          pattern: "${selectedOption.value}"}}}) {
      name
      category
      time
      level
      people
      ingridients {
        ilosc
        unit
        nazwaSkladnika
      }
      picture {
        url
      }
    }
  }  
  `;

  const { loading, error, data } = useQuery(query, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  return (
    <>
      <Logo title="logo" />
      <UserContext.Provider value={{ selectedOption, setSelectedOption }}>
        <ReciepsMenu />
      </UserContext.Provider>
      <Landing isScrolled={isScrollMoved} data={data.allNewReciepes} />
    </>
  );
};

export default MainTemplate;
