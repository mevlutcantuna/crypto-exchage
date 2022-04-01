import styled from "styled-components";

const Notification = () => {
  return <NotificationWrapper>Exchange submitted.</NotificationWrapper>;
};

export default Notification;

const NotificationWrapper = styled.div`
  color: white;
  background-color: #49cd5e;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
