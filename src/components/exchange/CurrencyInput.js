import styled from "styled-components";
import Select from "./Select";

const CurrencyInput = ({
  currencyFrom,
  amount,
  onCurrencyChange,
  onAmountChange,
  options,
  currencyTitle,
  isMoney,
}) => {
  return (
    <CurrencyInputWrapper>
      <StyledLabel>
        {currencyTitle}
        <Select
          currencyFrom={currencyFrom}
          onCurrencyChange={onCurrencyChange}
          options={options}
        />
      </StyledLabel>
      <StyledLabel>
        Amount
        <StyledInput
          isMoney={isMoney}
          type="number"
          min={0}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </StyledLabel>
    </CurrencyInputWrapper>
  );
};

export default CurrencyInput;

const CurrencyInputWrapper = styled.div`
  display: flex;
  
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 400;
  color: #9c9c9c;
  
  @media (max-width: 960px) {
    width: 100%;
  }

`;

const StyledInput = styled.input`
  width: 100%;
  max-width: 380px;
  height: 42px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-top: 4px;
  padding: ${({ isMoney }) => (isMoney ? "0 24px" : "0 16px")};
  color: #000000;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  background-image: url(${({ isMoney }) => isMoney && "https://www.alt-codes.net/images/dollar-sign.png"});
  background-position: 10px 14px;
  background-size: 12px 12px;
  background-repeat: no-repeat;
`;
