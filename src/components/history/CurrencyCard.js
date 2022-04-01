import styled from "styled-components";
import { RightIcon } from "../../icons/RightIcon";

const CurrencyCard = ({ item, onClick }) => {
  return (
    <CurrencyCardWrapper onClick={onClick}>
      <CurrencyCardHeader>
        <CurrencyCardTitle>
          {item["Currency From"]}
          <RightIcon />
          {item["Currency To"]}
        </CurrencyCardTitle>
        <CurrencyCardStatus statusColor={item["Type"]} />
      </CurrencyCardHeader>
      <CurrencyAmount>
        Amount &nbsp;&nbsp; {item["Currency From"]}&nbsp; {item["Amount 1"]}
      </CurrencyAmount>
    </CurrencyCardWrapper>
  );
};

export default CurrencyCard;

const CurrencyCardWrapper = styled.div`
  width: 100%;
  height: 85px;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid #eff0f6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const CurrencyCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrencyCardTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;

  & svg {
    margin: 0 8px;
  }
`;

const CurrencyCardStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: ${({ statusColor }) =>
    statusColor === "Exchanged" ? "#6368DF" : "#40B439"};
`;

const CurrencyAmount = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;
