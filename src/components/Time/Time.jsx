// @flow
import React from 'react';

import formatDate from '../../utils/dateTimeUtils';

const options = {
  sendTime: {
    hour: 'numeric',
    minute: 'numeric'
  },
  weekDay: {
    weekday: 'short',
    month: 'short',
    day: '2-digit'
  }
};

type Props = {
  time: string,
  format: string
};

const Time = ({ time, format = 'sendTime', ...props }: Props) => {
  return <span {...props}>{formatDate(time, options[format])}</span>;
};

export default Time;
