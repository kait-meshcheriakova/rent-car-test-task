import styled from 'styled-components';

export const CarsList = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 274px);
  column-gap: 30px;
  row-gap: 50px;
  justify-content: center;
`;

export const CarsItem = styled.li`
  width: 274px;
  height: 426px;
  position: relative;
`;

export const CarsImage = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const CarsTitle = styled.h2`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const InfoItem = styled.li`
  position: relative;
  padding-right: 6px;
  margin-left: 2px;
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

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

export const ButtonMore = styled.button`
  position: absolute;
  top: 400px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  border-radius: 12px;
  border: none;
  background: #3470ff;
  display: flex;
  width: 274px;
  height: 44px;
  //   padding: 12px 99px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const ButtonFavorite = styled.button`
  position: absolute;
  display: flex;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
`;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const CarPrice = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const TitleCont = styled.div`
  margin: 14px 0 8px 0;
  display: flex;
  justify-content: space-between;
`;

export const MoreButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const LoadMoreButton = styled.a`
  margin-bottom: 50px;
  color: rgba(52, 112, 255, 1);
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  border: none;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #0b44cd;
  }
`;
export const SvgHeart = styled.svg`
  stroke: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
