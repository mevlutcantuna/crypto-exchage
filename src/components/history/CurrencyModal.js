import styled from "styled-components";
import { Modal } from "antd";
import { CloseIcon } from "../../icons/CloseIcon";
import { changeDateFormat } from "../../utils/changeDateFormat";

const CurrencyModal = ({ visible, onOk, onCancel, modalInfo }) => {
  return (
    <Modal
      width={380}
      footer={null}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      closable={false}
    >
      <CurrencyModalHeader>
        <CurrencyModalTitle>Exchange</CurrencyModalTitle>
        <span onClick={onCancel}>
          <CloseIcon />
        </span>
      </CurrencyModalHeader>
      <CurrencyModalDivider />
      <CurrencyModalItem>
        <CurrencyModalItemName>{"Date & Time"}</CurrencyModalItemName>
        <CurrencyModalItemValue>
          {modalInfo && changeDateFormat(modalInfo["Date & Time"])}
        </CurrencyModalItemValue>
      </CurrencyModalItem>
      <CurrencyModalItem>
        <CurrencyModalItemName>Status</CurrencyModalItemName>
        <CurrencyModalItemValue>
          <CurrencyModalItemStatus statusColor={modalInfo && modalInfo["Type"]}>
            <CurrencyCardItemStatusIcon
              statusColor={modalInfo && modalInfo["Type"]}
            />{" "}
            &nbsp; {modalInfo && modalInfo["Type"]}
          </CurrencyModalItemStatus>
        </CurrencyModalItemValue>
      </CurrencyModalItem>
      <CurrencyModalItem>
        <CurrencyModalItemName>From</CurrencyModalItemName>
        <CurrencyModalItemValue>
          {modalInfo && modalInfo["Currency From"]}
        </CurrencyModalItemValue>
      </CurrencyModalItem>
      <CurrencyModalItem>
        <CurrencyModalItemName>To</CurrencyModalItemName>
        <CurrencyModalItemValue>
          {modalInfo && modalInfo["Currency To"]}
        </CurrencyModalItemValue>
      </CurrencyModalItem>
      <CurrencyModalItem>
        <CurrencyModalItemName>Amount</CurrencyModalItemName>
        <CurrencyModalItemValue>
          ${modalInfo && modalInfo["Amount 2"]}
          &nbsp; &nbsp; &nbsp;
          <CurrencyCardItemAmount>
            {modalInfo && modalInfo["Currency From"]}
            &nbsp;
            {modalInfo && modalInfo["Amount 1"]}
          </CurrencyCardItemAmount>
        </CurrencyModalItemValue>
      </CurrencyModalItem>
      <CurrencyModalItem>
        <CurrencyModalItemName>Total Amount</CurrencyModalItemName>
        <CurrencyModalItemValue>
          $ {modalInfo && modalInfo["Amount 2"]}
          &nbsp; &nbsp; &nbsp;
          <CurrencyCardItemAmount>
            {modalInfo && modalInfo["Currency From"]}
            &nbsp;
            {modalInfo && modalInfo["Amount 1"]}
          </CurrencyCardItemAmount>
        </CurrencyModalItemValue>
      </CurrencyModalItem>
      <CurrencyCardButton onClick={onCancel}>Close</CurrencyCardButton>
    </Modal>
  );
};

export default CurrencyModal;

const CurrencyModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrencyModalTitle = styled.div`
  font-size: 600;
  font-size: 16px;
  color: #000000;
`;

const CurrencyModalDivider = styled.div`
  border-bottom: 1px solid #f2f2f2;
  margin: 32px 0;
`;

const CurrencyModalItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const CurrencyModalItemName = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  width: 125px;
`;

const CurrencyModalItemValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
`;

const CurrencyModalItemStatus = styled.div`
  color: ${({ statusColor }) =>
    statusColor === "Exchanged" ? "#6368DF" : "#40B439"};
  display: flex;
  align-items: center;
`;

const CurrencyCardItemStatusIcon = styled.span`
  border-radius: 100%;
  width: 16px;
  height: 16px;
  background-color: ${({ statusColor }) =>
    statusColor === "Exchanged" ? "#6368DF" : "#40B439"};
`;

const CurrencyCardItemAmount = styled.span`
  color: #9c9c9c;
`;

const CurrencyCardButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 64px;
  background-color: #49cd5e;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #223cc7;
  }
`;
