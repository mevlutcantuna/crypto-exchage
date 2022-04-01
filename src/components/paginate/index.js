import ReactPaginate from "react-paginate";
import styled from "styled-components";

import { RightIcon } from "../../icons/RightIcon";
import { LeftIcon } from "../../icons/LeftIcon";

const Paginate = ({ handleChagePageCount, totalPageCount }) => {
  return (
    <ReactPaginateWrapper className="pagination">
      <StyledReactPaginate
        breakLabel="..."
        nextLabel={
          <>
            <StyledPaginateText>Next</StyledPaginateText>
            <RightIcon />
          </>
        }
        pageCount={totalPageCount}
        onPageChange={handleChagePageCount}
        pageRangeDisplayed={0}
        previousLabel={
          <>
            <LeftIcon />
            <StyledPaginateText>Previous</StyledPaginateText>
          </>
        }
        renderOnZeroPageCount={null}
      />
    </ReactPaginateWrapper>
  );
};

export default Paginate;

const ReactPaginateWrapper = styled.div`
  width: 100%;
  max-width: 1095px;
  margin: 37px auto;

  @media (max-width: 1125px) {
    margin-left: 20px;
  }

  @media (max-width: 960px) {
    margin: auto;
  }
`;

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;

  & .previous a,
  .next a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    color: #565d5f;
  }

  & .previous {
    width: 100px !important;

    & span {
      margin-left: 11px;
    }

    @media (max-width: 960px) {
      width: 40px !important;
    }
  }

  & .next {
    margin-left: 26px;

    & span {
      margin-right: 11px;
    }

    @media (max-width: 960px) {
      margin: 0;
    }
  }

  & li {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & a{
      color: #000000 ;
    }
  }

  & .selected {
    background-color: #000000;
    color: #ffffff;

    & a{
      color: white;
    }
  }

  & .disabled {
    display: none;
  }

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 380px;
    padding: 20px 20px;
  }
`;

const StyledPaginateText = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`;
