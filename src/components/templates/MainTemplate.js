import React, { useContext } from 'react';
import Landing from 'views/Landing';
import useModal from 'components/organisms/Modal/useModal';
import ReciepsMenu from 'components/molecules/ReciepsMenu/ReciepsMenu';
import { useQuery } from 'graphql-hooks';
import { Logo } from 'components/atoms/Logo/Logo';
import { ModalContext } from 'hooks/userContext';
import { MenuContext } from 'hooks/userContext';

const MainTemplate = () => {
  const { menuOption } = useContext(MenuContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const query = `
  {
    allNewReciepes(orderBy: name_DESC, filter: {
      category: {
        matches: {
          pattern: "${menuOption.value}"}}}) {
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
      <ReciepsMenu isOpen={isOpen} />
      <ModalContext.Provider value={{ isOpen, handleOpenModal, handleCloseModal }}>
        <Landing data={data.allNewReciepes} />
      </ModalContext.Provider>
    </>
  );
};

export default MainTemplate;
