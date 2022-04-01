import { useEffect, useState } from "react";
import styled from "styled-components";

import CurrencyInput from "./CurrencyInput";

import { getCoins } from "../../api";
import { USDEUROptions } from "../../utils/constants";
import {changePaginationPage} from "../../utils/changePaginationPage";

const Exchange = ({ changeTableData,setShowNotification }) => {
  const [coins, setCoins] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState();
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);

  const handleChangeCurrencyFrom = (value) => {
    setCurrencyFrom(value);
    setAmount2(value.current_price * amount1);
  };

  const handleChangeCurrencyTo = (value) => {
    setCurrencyTo(value);
  };

  const handleChangeAmount1 = (value) => {
    setAmount1(value);
    setAmount2(currencyFrom?.current_price * value);
  };

  const handleChangeAmount2 = (value) => {
    setAmount2(value);
    setAmount1(!currencyFrom ? 1 : value / currencyFrom?.current_price);
  };

  // to get coins values when page initiliaze
  const getCoinsToSetInitialValues = async () => {
    const res = await getCoins(currencyTo);
    setCoins(res.data);
    handleChangeCurrencyFrom(res.data[0]);
    handleChangeAmount2(res.data[0].current_price);
    handleChangeCurrencyTo(USDEUROptions[0]);
    setAmount1(1);
  };

  // to get coins values when currencies change
  const getCoinsWhenCurrencyChanges = async () => {
    const res = await getCoins(currencyTo);
    setCoins(res.data);
    let current_price = 1;
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].name === currencyFrom?.name) {
        current_price = res.data[i].current_price;
      }
    }
    setAmount2(amount1 * current_price);
  };

  // that adds all currency values to table
  const addCoinsToTableByCurrencyTo = async (currencyToType) => {
    const res = await getCoins(currencyToType);

    for (let i = 0; i < res.data.length; i++) {
      let newItem = {
        "Date & Time": new Date().toString(),
        "Currency From": "",
        "Amount 1": 1,
        "Currency To": "",
        "Amount 2": 0,
        Type: "Live Price",
      };

      newItem["Currency From"] = res.data[i].name;
      newItem["Amount 2"] = res.data[i].current_price;
      newItem["Currency To"] = currencyToType.name;
      changeTableData(newItem);
    }
  };

  const updateAndAddCoinsEveryMin = async () => {
    const res = await getCoins(currencyTo);
    setCoins(res.data);

    // update currency values
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].name === currencyFrom?.name) {
        setAmount2(res.data[i].current_price);
      }
    }

    // add all currency types
    for (let i = 0; i < USDEUROptions.length; i++) {
      addCoinsToTableByCurrencyTo(USDEUROptions[i]);
    }
  };

  // that adds to table exchaged values
  const exchangeCoins = () => {
    const newItem = {
      "Date & Time": new Date().toString(),
      "Currency From": currencyFrom.name,
      "Amount 1": amount1,
      "Currency To": currencyTo.name,
      "Amount 2": amount2,
      Type: "Exchanged",
    };
    changeTableData(newItem);
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    },1500)
    changePaginationPage(1)
  };

  useEffect(() => {
    // when component initialize, get coins
    getCoinsToSetInitialValues();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // update coins values and add to table updated valus every minute
    const interval = setInterval(() => {
      updateAndAddCoinsEveryMin();
    }, 60000);

    //Clean up can be done like this
    return () => clearInterval(interval);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyFrom]);

  useEffect(() => {
    // update coins values, when currency (usd - eur) changes
    getCoinsWhenCurrencyChanges();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyTo]);

  return (
    <ExchangeWrapper>
      <ExchangeTitle>Exchange</ExchangeTitle>
      <ExchangeForm>
        <CurrencyInput
          currencyTitle={"Currency From"}
          currencyFrom={currencyFrom}
          amount={amount1}
          onCurrencyChange={handleChangeCurrencyFrom}
          onAmountChange={handleChangeAmount1}
          options={coins}
          isMoney={false}
        />
        <StyledEqualIcon>=</StyledEqualIcon>
        <CurrencyInput
          currencyTitle="Currency To"
          currencyFrom={currencyTo}
          amount={amount2}
          onCurrencyChange={handleChangeCurrencyTo}
          onAmountChange={handleChangeAmount2}
          options={USDEUROptions}
          isMoney={true}
        />
        <StyledButton
          onClick={exchangeCoins}
          disabled={amount1 === 0 && amount2 === 0}
        >
          Save
        </StyledButton>
      </ExchangeForm>
    </ExchangeWrapper>
  );
};

export default Exchange;

const ExchangeWrapper = styled.div`
  width: 100%;
  max-width: 1095px;
  padding-bottom: 45px;
  padding-top: 60px;
  margin: auto;


  @media (max-width: 1175px) {
    margin: 0 20px;
  }

  @media (max-width: 960px) {
    max-width: 380px;
    padding: 36px 24px 48px 24px;
    margin: auto;
  }


`;

const ExchangeTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 27px;
`;

const ExchangeForm = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-right: 20px;
  }

`;

const StyledEqualIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 12px 16px;

  @media (max-width: 960px) {
    display: none;
  }

`;

const StyledButton = styled.button`
  width: 84px;
  height: 40px;
  background-color: #49cd5e;
  color: white;
  margin-left: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #223cc7;
    transition: all ease-in 0.15s;
  }

  &:disabled {
    background-color: #e1e8ed;
  }


  @media (max-width: 960px) {
   width: 100%;
   max-width: 380px;
   margin: 0;
  }
`;
