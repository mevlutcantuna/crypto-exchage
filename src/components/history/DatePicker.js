import DatePicker from "react-datepicker";
import styled from "styled-components";

const CustomDatePicker = ({onDatePickerChange,datePickerValue}) => {

  return (
    <CustomDatePickerWrapper>
      <StyledDatePicker
        selected={datePickerValue}
        onChange={(date) => onDatePickerChange(date)}
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        showDisabledMonthNavigation
      />
    </CustomDatePickerWrapper>  
  );
};

export default CustomDatePicker;

const StyledDatePicker = styled(DatePicker)`
  border: 1px solid red;
  width: 160px;
  height: 42px;
  padding-left: 16px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  background-image: url("https://cdn-icons.flaticon.com/png/512/2782/premium/2782901.png?token=exp=1648137616~hmac=a2a012ab09e868816068f0ccc8a1a0ac");
  background-position: 90% 14px;
  background-repeat: no-repeat;
  background-size: 14px 14px;

  @media (max-width: 960px) {
    width: 100%;
    max-width: 160px;
    background-position: 97% 13px;

  }

  @media (max-width: 480px) {
    width: 100%;
    background-position: 97% 13px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
    padding-left: 8px;
  }
`;

const CustomDatePickerWrapper = styled.div`
  & .react-datepicker {
    border: none;
    box-shadow: 0px 8px 16px 0px #1111110f;
  }

  & .react-datepicker__triangle {
    display: none;
  }

  & .react-datepicker__navigation-icon::before {
    border-color: #000000;
    border-style: solid;
    border-width: 2px 2px 0 0;
    height: 6px;
    width: 6px;
    border-radius: 1px;
    top: 12px;
  }

  & .react-datepicker__header {
    border: none;
    background: none;
  }

  & .react-datepicker__current-month {
    margin-bottom: 13px;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 700;
  }

  & .react-datepicker__day-name {
    color: #9c9c9c;
    font-size: 14px;
    font-weight: 400;
    width: 40px;
  }

  & .react-datepicker__day {
    width: 40px;
    height: 39px;
    padding: 7px 8px;
    border-radius: 8px;
    border: 1px solid #000000;
    font-size: 14px;
    font-weight: 400;
  }

  & .react-datepicker__day--disabled {
    background-color: #eeeeee;
    color: rgba(#000000, 0.4);
    border: none;
  }

  & .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    width: 42px;
    height: 41px;
    background-color: #000000;
    border: none;
  }
`;
