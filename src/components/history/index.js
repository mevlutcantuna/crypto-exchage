import { useEffect, useState } from "react";
import styled from "styled-components";

import Table from "./Table";
import CurrencyCard from "./CurrencyCard";
import CurrencyModal from "./CurrencyModal";
import FilterBar from "./FilterBar";

import moment from "moment";
import { changePaginationPage } from "../../utils/changePaginationPage";
import { TypeList } from "../../utils/constants";

const History = ({ tableData, currentPage, PER_PAGE, setTotalPageCount }) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [type, setType] = useState(TypeList[0].name);
  const [filteredData, setFilteredData] = useState([...tableData]);
  const [currentData, setCurrentData] = useState();
  const [modalInfo, setModalInfo] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (item) => {
    setModalInfo(item);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangeFromDate = (date) => {
    setFromDate(date);
  };

  const handleChangeToDate = (date) => {
    setToDate(date);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  // get filtered data by type
  const filterByType = (data) => {
    const newData = data.filter((item) => {
      if (type === "All") return item;
      else return item["Type"] === type;
    });
    return newData;
  };

  console.log(moment(new Date().setDate(-20)).format("DD/MM/YYYY"))

  // get filtered data by data
  const filterByDate = (data) => {
    console.log(toDate, fromDate);
    const newData = data.filter(
      (item) =>
        moment(item["Date & Time"]).format("DD/MM/YYYY") >=
          moment(fromDate).format("DD/MM/YYYY") &&
        moment(item["Date & Time"]).format("DD/MM/YYYY") <=
          moment(toDate).format("DD/MM/YYYY")
    );
    return newData;
  };

  // set filtered data
  const onFilterClick = () => {
    changePaginationPage(1);
    const filteredByType = filterByType(tableData);
    const filteredByDate = filterByDate(filteredByType);
    setFilteredData(filteredByDate);
  };

  // when page initiliaze
  useEffect(() => {}, []);

  useEffect(() => {
    // when table data changes, update filtered data
    setFilteredData([...tableData]);
  }, [tableData]);

  useEffect(() => {
    // range of table >> it gives four items
    let indexOfFirstItem = currentPage * PER_PAGE;
    let indexOfLastItem = indexOfFirstItem + PER_PAGE;
    setCurrentData(filteredData.slice(indexOfFirstItem, indexOfLastItem));
    setTotalPageCount(Math.ceil(filteredData.length / PER_PAGE));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData, PER_PAGE, currentPage]);

  const FilterBarProps = {
    handleChangeToDate,
    handleChangeFromDate,
    handleChangeType,
    fromDate,
    toDate,
    type,
    onFilterClick,
  };

  return (
    <HistoryWrapper>
      <HistoryTitle>History</HistoryTitle>
      <FilterBar {...FilterBarProps} />
      <TableWrapper>
        <Table data={currentData} />
      </TableWrapper>

      <CardWrapper>
        {currentData?.map((item, index) => (
          <CurrencyCard
            onClick={() => showModal(item)}
            item={item}
            key={index}
          />
        ))}
      </CardWrapper>
      <CurrencyModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        modalInfo={modalInfo}
      />
    </HistoryWrapper>
  );
};

export default History;

const HistoryWrapper = styled.div`
  width: 100%;
  max-width: 1095px;
  padding-top: 52px;
  margin: auto;

  @media (max-width: 1175px) {
    margin: 0 20px 0 20px;
  }

  @media (max-width: 960px) {
    max-width: 380px;
    margin: auto;
    padding: 24px;
  }
`;

const HistoryTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;

const TableWrapper = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

const CardWrapper = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
