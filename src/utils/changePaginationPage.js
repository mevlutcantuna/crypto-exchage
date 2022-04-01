export const changePaginationPage = (pageNumber) => {
  return document
    .getElementsByClassName("pagination")[0]
    .children[0].children[pageNumber].children[0].click();
};
