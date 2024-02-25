import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import makesDat from './makes.json';
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
// ....,,,,
export const Filter = () => {
  const [selectedMake, setSelectedMake] = useState('');

  const [makes, setMakes] = useState([]);
  useEffect(() => {
    const makesFromJson = makesDat.map(make => make);
    setMakes(makesFromJson);
  }, []);

  const dispatch = useDispatch();

  const handleMakeChange = selectedMake => {
    setSelectedMake(selectedMake);
    dispatch(setFilter(selectedMake));
  };

  return (
    <div>
      <FormStyles>
        <SpanStyles>
          <TextStyles>Car brend</TextStyles>
          <SelectStyles
            id="makeSelect"
            value={selectedMake}
            onChange={e => handleMakeChange(e.target.value)}
          >
            <option value="">Enter the text</option>
            {makes.map((make, idx) => (
              <option key={idx} value={make}>
                {make}
              </option>
            ))}
          </SelectStyles>
        </SpanStyles>
        <SpanStyles>
          <TextStyles>Price / 1 hour</TextStyles>
          <SelectStyles id="priceSelect">
            <option value="">To $</option>
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
              id="fromMillage"
              style={{
                borderRadius: '14px 0px 0px 14px',
                borderRight: '1px solid rgba(138, 138, 137, 0.20)',
              }}
              type="text"
            />
            <InputText style={{ left: '24px' }}>From</InputText>
            <InputMillage
              id="toMillage"
              style={{ borderRadius: '0 14px 14px 0' }}
              type="text"
            />
            <InputText style={{ right: '160px' }}>To</InputText>
          </DivMillage>
        </InputMillageWrapper>

        <ButtonStyles type="submit">Reset</ButtonStyles>
      </FormStyles>
    </div>
  );
};
