import Modal from 'react-modal';
import {
  CarInfo,
  CloseModalBtn,
  InfoTitle,
  ModalItem,
  ModalList,
  ModalImage,
  ModalTitle,
  RentalBtn,
  RentalItem,
  RentalList,
  RentalSpan,
  TitleSpan,
} from './Modal.styled';
import './Modal.css';
//
Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
export function SharedModal({ children, openModal, closeModal, selectedCar }) {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgb(21, 21, 21, 0.75)',
    },
  };

  if (openModal && selectedCar)
    return (
      <div>
        <Modal
          className="ReactModalContentClassName"
          isOpen={openModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Sample Modal"
          closeTimeoutMS={350}
        >
          <CloseModalBtn onClick={closeModal}>✕</CloseModalBtn>

          {children}
          <ModalImage src={selectedCar.img} alt={selectedCar.make} />
          <ModalTitle>
            {selectedCar.make} <TitleSpan> {selectedCar.model}</TitleSpan>,{' '}
            <span>{selectedCar.year}</span>
          </ModalTitle>
          <ModalList>
            <ModalItem>{selectedCar.address.split(',')[1]}</ModalItem>
            <ModalItem>{selectedCar.address.split(',')[2]}</ModalItem>
            <ModalItem>id: {selectedCar.id}</ModalItem>
            <ModalItem>Year: {selectedCar.year}</ModalItem>
            <ModalItem>Type: {selectedCar.type}</ModalItem>
            <ModalItem>
              Fuel Consumption: {selectedCar.fuelConsumption}
            </ModalItem>
            <ModalItem>Engine Size: {selectedCar.engineSize}</ModalItem>
          </ModalList>
          <CarInfo>{selectedCar.description}</CarInfo>
          <InfoTitle>Accessories and functionalities:</InfoTitle>
          <ModalList>
            <ModalItem>{selectedCar.accessories[0]}</ModalItem>
            <ModalItem>{selectedCar.accessories[1]}</ModalItem>
            <ModalItem>{selectedCar.accessories[2]}</ModalItem>
          </ModalList>
          <ModalList>
            <ModalItem>{selectedCar.functionalities[0]}</ModalItem>
            <ModalItem>{selectedCar.functionalities[1]}</ModalItem>
            <ModalItem>{selectedCar.functionalities[2]}</ModalItem>
          </ModalList>
          <InfoTitle>Rental Conditions: </InfoTitle>
          <RentalList>
            <RentalItem>
              {selectedCar.rentalConditions.split('').slice(0, 12).join('')}{' '}
              <RentalSpan>
                {selectedCar.rentalConditions.split('').slice(13, 15).join('')}
              </RentalSpan>
            </RentalItem>
            <RentalItem>
              {selectedCar.rentalConditions.split('').slice(15, 38).join('')}
            </RentalItem>
            <RentalItem>
              {selectedCar.rentalConditions.split('').slice(38, -1).join('')}
            </RentalItem>
            <RentalItem>
              Mileage:{' '}
              <RentalSpan>
                {selectedCar.mileage.toLocaleString('en-US')}
              </RentalSpan>
            </RentalItem>
            <RentalItem>
              Price: <RentalSpan>{selectedCar.rentalPrice}</RentalSpan>
            </RentalItem>
          </RentalList>
          <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
        </Modal>
      </div>
    );
}
