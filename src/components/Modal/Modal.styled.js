import styled from 'styled-components';

export const CloseModalBtn = styled.button`
  background-color: transparent;
  color: rgba(18, 20, 23, 1);
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  cursor: pointer;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  margin: 14px 0 8px 0;
`;

export const ModalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const ModalItem = styled.li`
  position: relative;
  padding-right: 6px;
  margin-left: 2px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: calc(18 / 12);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const CarInfo = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 20px calc(20 / 14);
  margin-top: 14px;
`;

export const InfoTitle = styled.h3`
  margin-top: 24px;
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  margin-bottom: 8px;
`;
export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const RentalItem = styled.li`
  color: #363535;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  /* font-family: Montserrat; */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
export const RentalBtn = styled.a`
  width: 168px;
  margin-top: 24px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  border-radius: 12px;
  border: none;
  background: #3470ff;
  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const TitleSpan = styled.span`
  color: #3470ff;
`;

export const RentalSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
