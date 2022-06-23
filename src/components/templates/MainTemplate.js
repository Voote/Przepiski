import React, { useState } from 'react';
import Landing from 'views/Landing';
import ReciepsMenu from 'components/molecules/ReciepsMenu/ReciepsMenu';
import { useQuery } from 'graphql-hooks';
import { options } from 'assets/arrays';
import { UserContext } from 'hooks/userContext';
import { Logo } from 'components/atoms/Logo/Logo';

const MainTemplate = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const query = `
  {
    allNewReciepes(filter: {category: {matches: {pattern: "${selectedOption.value}"}}}) {
      name
      category
      time
      level
      ingridients {
        ilosc
        unit
        nazwaSkladnika
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
      <Landing data={data.allNewReciepes} />
    </>
  );
};

export default MainTemplate;
