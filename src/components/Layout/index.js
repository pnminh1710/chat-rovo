// @flow
import styled from '@emotion/styled';

export const Screen = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 18px;
  color: #6b7695;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid #d5dbdf;
  border-top: 1px solid #d5dbdf;
  padding: 4px 16px;
  background-color: #fafafa;
  height: calc(100vh - 123px);
  overflow: auto;
`;

export const ChatField = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;
