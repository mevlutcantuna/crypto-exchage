import { useState, useRef } from "react";
import styled from "styled-components";

import ArrowIcon from "../../icons/arrow.svg";
import { useOnClickOutside } from "use-hooks";

const Select = ({ options, currencyFrom, onCurrencyChange }) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const ref = useRef(null);

  const changeIsOpenList = (value) => {
    setIsOpenList(value);
  };

  useOnClickOutside(ref, () => setIsOpenList(false));

  const onListClick = (item) => {
    onCurrencyChange(item);
    setIsOpenList(false);
  };

  return (
    <SelectWrapper ref={ref}>
      <SelectInput onClick={() => changeIsOpenList(true)}>
        <SelectValue>
          <SelectListItemImage src={currencyFrom?.image} /> {currencyFrom?.name}
        </SelectValue>
        <img src={ArrowIcon} alt="arrow" />
      </SelectInput>
      <SelectList isOpen={isOpenList}>
        {options?.map((item) => (
          <SelectListItem onClick={() => onListClick(item)} key={item.name}>
            <SelectListItemImage src={item.image} />
            {item.name}
          </SelectListItem>
        ))}
      </SelectList>
    </SelectWrapper>
  );
};

export default Select;

const SelectWrapper = styled.div`
  margin-top: 4px;
  margin-right: 13px;
  border-radius: 4px;
  position: relative;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const SelectInput = styled.div`
  width: 200px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
    transition: all ease-in 0.1s;
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: 380px;
  }
`;

const SelectValue = styled.div`
  display: flex;
  align-items: center;
`;

const SelectList = styled.ul`
  width: 100%;
  max-width: 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  margin-top: 4px;
  position: absolute;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? "" : "none")};

  @media (max-width: 960px) {
    width: 100%;
    max-width: 380px;
  }
`;

const SelectListItem = styled.li`
  width: 100%;
  height: 48px;
  padding: 0 24px;
  font-size: 14px;
  font-weight: 500;
  color: #565656;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
    transition: all ease-in 0.15s;
  }
`;

const SelectListItemImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 100%;
`;
