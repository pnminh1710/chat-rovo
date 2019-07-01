// @flow
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Time from '../Time';

export const LineWrapper = styled.div`
  align-self: ${props => (props.isSelf ? 'flex-end' : 'flex-start')};
  display: flex;
  align-items: center;
  max-width: 80%;
`;

export const SystemMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.3;
  padding: 8px 0px;
`;

export const SystemMessageTime = styled(Time)`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 16px;
`;

export const SystemMessageText = styled.span`
  font-size: 13px;
`;

export const MessageWrapper = styled.div`
  ${props =>
    !props.isSelf &&
    css`
      border: 1px solid #d5dbdf;
    `};

  background-color: ${props => (props.isSelf ? '#01c0be' : '#fff')};
  color: ${props => (props.isSelf ? '#fff' : '#6B7695')};
  padding: 8px;
  border-radius: 8px;
  margin: 4px 0px;
`;

export const Username = styled.div`
  font-weight: 500;
  color: #aebdc5;
  margin-bottom: 4px;
`;

export const MessageText = styled.span`
  margin-right: 16px;
`;

export const MessageTime = styled(Time)`
  float: right;
  font-size: 12px;
  opacity: 0.7;
  height: 18px;
  display: flex;
  align-items: center;
`;

export const PhotoWrapper = styled(MessageWrapper)`
  max-width: 600px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-self: flex-start;
  margin-right: 8px;
  margin-top: 4px;
`;
