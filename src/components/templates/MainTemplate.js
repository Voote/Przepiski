import React from 'react';
import Landing from 'views/Landing';
import { Logo } from 'components/atoms/Logo/Logo';
import { useQuery } from 'graphql-hooks';

const query = `
{
  allNewReciepes {
    name
    category
    time
    level
    ingridients
  }
}  
`;

const MainTemplate = () => {
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
      <Landing data={data.allNewReciepes} />
    </>
  );
};

export default MainTemplate;
