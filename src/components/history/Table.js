import styled from "styled-components";
import mainData from "../../data.json";
import { changeDateFormat } from "../../utils/changeDateFormat";

const Table = ({ data }) => {
  const headerItems = Object.keys(mainData[0]);

  return (
    <>
      <TableWrapper>
        <thead>
          <tr>
            {headerItems?.map((item, index) => (
              <TableHeaderItem key={index}>
                {item}
              </TableHeaderItem>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <TableRow key={index}>
              <TableRowItem>
                {changeDateFormat(item["Date & Time"])}
              </TableRowItem>
              <TableRowItem>{item["Currency From"]}</TableRowItem>
              <TableRowItem>{item["Amount 1"]}</TableRowItem>
              <TableRowItem>{item["Currency To"]}</TableRowItem>
              <TableRowItem>{item["Amount 2"]}</TableRowItem>
              <TableRowItem isExchanged={item["Type"]}>
                {item["Type"]}
              </TableRowItem>
            </TableRow>
          ))}
        </tbody>
      </TableWrapper>
    </>
  );
};

export default Table;

const TableWrapper = styled.table`
  max-width: 1095px;

  @media (max-width: 1125px) {
    margin-right: 40px;
  }
`;

const TableHeaderItem = styled.th`
  text-align: start;
  width: 200px;
  background-color: #eeeeee;
  padding: 8px 0 8px 9px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #eeeeee;
  }

  &:hover {
    border: 1px solid #000;
    border-radius: 2rem;
  }
`;

const TableRowItem = styled.td`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  padding: 19px 0 20px 9px;

  color: ${({ isExchanged }) =>
    isExchanged
      ? isExchanged === "Exchanged"
        ? "#6368DF"
        : "#5DBE7E"
      : "#000"};

  &:first-child {
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;
