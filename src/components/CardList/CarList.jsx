import { useEffect, useState } from 'react';
import { SharedModal } from '../Modal/Modal';
import { getCars } from 'Api';
import { addToFavorites } from '../../redux/carSlice';
import heart from '../img/heart.svg';
import activeHeart from '../img/activeHeart.svg';
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
  LoadMoreButton,
  MoreButtonWrap,
  TitleCont,
} from './CarList.styled';
import { CloseModalBtn } from '../Modal/Modal.styled';
import { useDispatch, useSelector } from 'react-redux';

export const CarList = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [moreData, setMoreData] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const favoriteCars = useSelector(state => state.favoriteCars.favoriteCars);

  const fetchCars = async () => {
    try {
      let data;

      data = await getCars(page, 12);

      if (page === 1) {
        setCars(data);
      } else {
        setCars(prevCars => [...prevCars, ...data]);
      }

      setMoreData(data.length > 0);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };
  useEffect(() => {
    fetchCars();
    // eslint-disable-next-line
  }, [page]);
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
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
        {cars.map(car => (
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
              <img
                src={
                  favoriteCars.some(favCar => favCar.id === car.id)
                    ? activeHeart
                    : heart
                }
                alt="heart"
              />
            </ButtonFavorite>
          </CarsItem>
        ))}
      </CarsList>
      <MoreButtonWrap>
        {moreData && (
          <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
        )}
      </MoreButtonWrap>
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
