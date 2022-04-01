import styled from "styled-components";
import DatePicker from "./DatePicker";

import { TypeList } from "../../utils/constants";

const FilterBar = ({
  handleChangeToDate,
  handleChangeFromDate,
  handleChangeType,
  fromDate,
  toDate,
  type,
  onFilterClick,
}) => {
  return (
    <FilterBarWrapper>
      <FilterBarLabel mobile={false}>
        <FilterBarLabelTitle>From Date</FilterBarLabelTitle>
        <DatePicker
          onDatePickerChange={handleChangeFromDate}
          datePickerValue={fromDate}
        />
      </FilterBarLabel>
      <FilterBarLabel mobile={false}>
        <FilterBarLabelTitle> To Date</FilterBarLabelTitle>
        <DatePicker
          minDate={fromDate}
          onDatePickerChange={handleChangeToDate}
          datePickerValue={toDate}
        />
      </FilterBarLabel>
      <FilterBarLabel mobile={true}>
        <FilterBarLabelTitle>Type</FilterBarLabelTitle>
        <FilterBarSelect onChange={handleChangeType} value={type}>
          {TypeList.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </FilterBarSelect>
      </FilterBarLabel>
      <FilterBarButton onClick={onFilterClick}>Filter</FilterBarButton>
    </FilterBarWrapper>
  );
};

export default FilterBar;

const FilterBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 45px;
`;

const FilterBarLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: 16px;

  @media (max-width: 960px) {
    display: ${({ mobile }) => (!mobile ? "flex" : "none")};
  }
`;

const FilterBarLabelTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #9c9c9c;
  margin-bottom: 6px;
`;

const FilterBarSelect = styled.select`
  width: 160px;
  height: 42px;
  padding: 0 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  -webkit-appearance: none;
  background-image: url("https://cdn-icons.flaticon.com/png/512/2609/premium/2609201.png?token=exp=1648141892~hmac=ab0bee19181651e99b37cb011a6a276c");
  background-position: 135px 15px;
  background-repeat: no-repeat;
  background-size: 10px 10px;
`;

const FilterBarButton = styled.button`
  width: 78px;
  height: 40px;
  background-color: white;
  color: #1b31a8;
  border: 1px solid #1b31a8;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    background-color: #6581a3;
    border: none;
    color: white;
  }

  &:disabled {
    border: 1px solid #e1e8ed;
    color: #e1e8ed;
  }


  @media (max-width: 480px) {
    width: 75px;
  }

  @media (max-width: 380px) {
    width: 75px;
    font-size: 12px;
  }
`;
