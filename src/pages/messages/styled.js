// @flow
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputField = styled.input`
  border: none;
  line-height: 18px;
  font-size: 16px;
  padding: 8px;
  flex: 1;
  :focus {
    outline: none;
  }
`;

export const TextInput = styled.div`
  border-radius: 8px;
  border: 1px solid #d5dbdf;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  flex: 1;
  margin-right: 16px;
`;

export const Icon = styled(FontAwesomeIcon)`
  opacity: 0.4;
  font-size: 24px;
  margin: 0px 8px;
`;
