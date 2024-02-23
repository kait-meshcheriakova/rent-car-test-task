import { SharedModal } from '../Modal/Modal';
import { CloseModalBtn } from '../Modal/Modal.styled';
import { addToFavorites } from '../../redux/carSlice';
import {
  ButtonFavorite,
  ButtonMore,
  CarModel,
  CarPrice,
  CarsImage,
  CarsItem,
  CarsList,
  CarsTitle,
  InfoItem,
  InfoList,
  TitleCont,
} from '../CardList/CarList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import activeHeart from '../img/activeHeart.svg';
export const FavoriteCarsList = () => {
  const favoriteCars = useSelector(state => state.favoriteCars.favoriteCars);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const dispatch = useDispatch();
  const handleOpenModal = car => {
    setSelectedCar(car);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleAddToFavorites = car => {
    dispatch(addToFavorites(car));
  };
  return (
    <>
      <CarsList>
        {favoriteCars.map(car => (
          <CarsItem key={car.id}>
            <CarsImage src={car.img} alt={car.make} />
            <TitleCont>
              <CarsTitle>
                {car.make} <CarModel> {car.model}</CarModel>,{' '}
                <span>{car.year}</span>
              </CarsTitle>
              <CarPrice>{car.rentalPrice}</CarPrice>
            </TitleCont>
            <InfoList>
              <InfoItem>{car.address.split(',')[1]}</InfoItem>
              <InfoItem>{car.address.split(',')[2]}</InfoItem>
              <InfoItem>{car.rentalCompany}</InfoItem>
              <InfoItem>{car.type}</InfoItem>
              <InfoItem>{car.model}</InfoItem>
              <InfoItem>{car.id}</InfoItem>
              <InfoItem>
                {car.functionalities[0].split(' ').slice(0, -1).join(' ')}
              </InfoItem>
            </InfoList>
            <ButtonMore onClick={() => handleOpenModal(car)}>
              Learn more
            </ButtonMore>
            <ButtonFavorite onClick={() => handleAddToFavorites(car)}>
              <img src={activeHeart} alt="heart" />
            </ButtonFavorite>
          </CarsItem>
        ))}
      </CarsList>
      <SharedModal
        openModal={openModal}
        onClose={handleCloseModal}
        selectedCar={selectedCar}
      >
        <CloseModalBtn onClick={handleCloseModal}></CloseModalBtn>
      </SharedModal>
    </>
  );
};
