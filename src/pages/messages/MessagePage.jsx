// @flow
import React from 'react';

import { faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { Screen, Header, Body, ChatField } from '../../components/Layout';
import Message from '../../components/Message';

import { TextInput, InputField, Icon } from './styled';

import data from '../../chats.json';

const MessagePage = () => {
  const firstMessage = data.messages.find(message => message.position === 0);
  const {
    content: {
      i18n: {
        parameters: { groupName }
      }
    }
  } = firstMessage;
  return (
    <Screen>
      <Header>{groupName}</Header>
      <Body>
        {data.messages.map(message => (
          <Message key={message.id} {...message} />
        ))}
      </Body>
      <ChatField>
        <TextInput>
          <Icon icon={faCamera} />
          <InputField type="text" placeholder="Type message" />
        </TextInput>
        <Icon icon={faPaperPlane} />
      </ChatField>
    </Screen>
  );
};

export default MessagePage;
