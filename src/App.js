import { useState } from "react";
import styled from "styled-components";
import Exchange from "./components/exchange";
import History from "./components/history";
import Paginate from "./components/paginate";
import Notification from "./components/notification";

import data from "./data.json";

function App() {
  const [tableData, setTableData] = useState([...data]);

  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const changeTableData = (newData) => {
    setTableData((prev) => [newData, ...prev]);
  };

  const handleChageCurrentCount = (e) => {
    setCurrentPage(e.selected);
  };

  const HistoryProps = {
    tableData,
    currentPage,
    PER_PAGE,
    setTotalPageCount,
    setCurrentPage,
  };

  return (
    <AppWrapper>
      <AppContainer>
        <AppNotificationWrapper show={showNotification}>
          <Notification />
        </AppNotificationWrapper>
        <AppExchangeWrapper>
          <Exchange
            setShowNotification={setShowNotification}
            changeTableData={changeTableData}
          />
        </AppExchangeWrapper>
        <History {...HistoryProps} />
        <Paginate
          handleChagePageCount={handleChageCurrentCount}
          totalPageCount={totalPageCount}
        />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AppContainer = styled.div`
  width: 100%;
`;

const AppNotificationWrapper = styled.div`
  display: ${({ show }) => (show ? "" : "none")};
`;

const AppExchangeWrapper = styled.div`
  box-shadow: 0px 8px 16px 0px #1111110f;
`;
