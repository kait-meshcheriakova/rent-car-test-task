import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import makes from './makes.json';
import prices from './prices.json';
import {
  ButtonStyles,
  DivMillage,
  FormStyles,
  InputMillage,
  InputMillageWrapper,
  InputText,
  SelectStyles,
  SpanStyles,
  TextStyles,
} from './Filter.styled';

export const Filter = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const handleSelectPriceChange = event => {
    setSelectedPrice(event.target.value);
  };
  const dispatch = useDispatch();

  const handleMakeChange = e => {
    setSelectedMake(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const options = {
      make: selectedMake,
      rentalPrice: selectedPrice,
    };

    dispatch(setFilter(options));
  };
  return (
    <div>
      <FormStyles onSubmit={handleSubmit}>
        <SpanStyles>
          <TextStyles>Car brend</TextStyles>
          <SelectStyles value={selectedMake} onChange={handleMakeChange}>
            {makes.map((make, idx) => (
              <option key={idx} value={make}>
                {make}
              </option>
            ))}
          </SelectStyles>
        </SpanStyles>
        <SpanStyles>
          <TextStyles>Price / 1 hour</TextStyles>
          <SelectStyles onChange={handleSelectPriceChange}>
            to
            {prices.map((price, idx) => (
              <option key={idx} value={price}>
                {price}
              </option>
            ))}
          </SelectStyles>
        </SpanStyles>

        <InputMillageWrapper>
          <TextStyles>Сar mileage / km</TextStyles>
          <DivMillage>
            <InputMillage
              style={{
                borderRadius: '14px 0px 0px 14px',
                borderRight: '1px solid rgba(138, 138, 137, 0.20)',
              }}
              type="text"
              // value={fromMillage}
              // onChange={handleFromMillageChange}
            />
            <InputText style={{ left: '24px' }}>From</InputText>
            <InputMillage
              style={{ borderRadius: '0 14px 14px 0' }}
              type="text"
              // value={toMillage}
              // onChange={handleToMillageChange}
            />
            <InputText style={{ right: '160px' }}>To</InputText>
          </DivMillage>
        </InputMillageWrapper>

        <ButtonStyles type="submit">Search</ButtonStyles>
      </FormStyles>
    </div>
  );
};
