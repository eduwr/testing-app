import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import NewMessageForm from '../../src/components/NewMessageForm';

describe('NewMessageForm', () => {
  describe('sending message', () => {
    const messageText = 'Hello Test';
    let sendHandler;
    let getByTestId;

    beforeEach(() => {
      sendHandler = jest.fn();
      ({getByTestId} = render(<NewMessageForm onSend={sendHandler} />));

      fireEvent.changeText(getByTestId('messageText'), 'Hello Test');
    });

    it('changes input value', () => {
      expect(getByTestId('messageText').props.value).toEqual(messageText);
    });

    it('clears the message field', () => {
      fireEvent.press(getByTestId('sendButton'));
      expect(getByTestId('messageText').props.value).toEqual('');
    });

    it('calls the send handler', () => {
      fireEvent.press(getByTestId('sendButton'));
      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
