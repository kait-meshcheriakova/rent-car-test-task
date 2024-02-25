import styled from 'styled-components';

export const SpanStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 74px;
`;

export const SelectStyles = styled.select`
  border: none;
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  width: 224px;
  height: 48px;
  background: #f7f7fb;
  margin-top: 8px;
  outline: none;

  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    outline: 2px dashed cornflowerblue;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    height: 8px;

    border-radius: 10px;
  }
`;

export const FormStyles = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  width: 1060px;
  height: 74px;
  margin: 0 auto 50px;
  outline: none;
`;

export const TextStyles = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
`;
export const InputMillageWrapper = styled.div`
  height: 74px;
  border: none;
`;

export const InputMillage = styled.input`
  font-family: 'ManropeMedium';
  font-size: 16px;
  line-height: 125%;
  color: rgba(18, 20, 23, 0.9);

  width: 160px;
  padding: 14px 24px;
  outline: none;
  background: #f7f7fb;
  border: none;
`;
export const InputText = styled.p`
  position: absolute;
`;

export const DivMillage = styled.div`
  position: relative;
  display: flex;
  margin-top: 8px;
  outline: none;
`;
export const ButtonStyles = styled.button`
  display: flex;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background: #3470ff;
  color: white;
  border: none;
  &:hover {
    background-color: #0b44cd;
  }
`;
