// @flow
import React from 'react';

import {
  LineWrapper,
  SystemMessageWrapper,
  SystemMessageTime,
  SystemMessageText,
  MessageWrapper,
  PhotoWrapper,
  MessageText,
  Username,
  MessageTime,
  Avatar,
  Img
} from './styled';

type ContainerProps = {
  type: string,
  updatedAt: string,
  createdAt: string,
  content: {
    text: string,
    url: string
  },
  sender: ?Object,
  senderId: ?number
};

type SystemProps = {
  createdAt: string,
  content: {
    text: string
  }
};

type MessageProps = {
  updatedAt: string,
  content: {
    text: string
  },
  senderId: ?number,
  sender: {
    firstName: string,
    picture: string
  }
};

type PhotoProps = {
  updatedAt: string,
  content: {
    text: string,
    url: string
  },
  senderId: ?number,
  sender: {
    firstName: string,
    picture: string
  }
};

const DEFAULT_SENDER_ID = 2;

const TextMessage = ({
  updatedAt,
  content: { text },
  sender: { picture, firstName },
  senderId
}: MessageProps) => {
  const isSelf = DEFAULT_SENDER_ID === senderId;
  return (
    <LineWrapper isSelf={isSelf}>
      {!isSelf && <Avatar src={picture} alt={firstName} />}
      <MessageWrapper isSelf={isSelf}>
        {!isSelf && <Username>{firstName}</Username>}
        <MessageText>{text}</MessageText>
        <MessageTime time={updatedAt} />
      </MessageWrapper>
    </LineWrapper>
  );
};

const PhotoMessage = ({
  updatedAt,
  content: { url, text },
  senderId,
  sender: { picture, firstName }
}: PhotoProps) => {
  const isSelf = DEFAULT_SENDER_ID === senderId;
  return (
    <LineWrapper isSelf={isSelf}>
      {!isSelf && <Avatar src={picture} alt={firstName} />}
      <PhotoWrapper isSelf={isSelf}>
        <Img src={url} alt={text} />
        <MessageTime time={updatedAt} />
      </PhotoWrapper>
    </LineWrapper>
  );
};

const SystemMessage = ({ createdAt, content: { text } }: SystemProps) => {
  return (
    <SystemMessageWrapper>
      <SystemMessageTime time={createdAt} format="weekDay" />
      <SystemMessageText>{text}</SystemMessageText>
    </SystemMessageWrapper>
  );
};

function MessageContainer({ type, ...props }: ContainerProps) {
  switch (type) {
    case 'TEXT':
      return (
        <TextMessage sender={props.sender ? props.sender : {}} {...props} />
      );
    case 'PHOTO':
      return (
        <PhotoMessage sender={props.sender ? props.sender : {}} {...props} />
      );
    case 'SYSTEM':
      return <SystemMessage {...props} />;
    default:
      return null;
  }
}

export default MessageContainer;
