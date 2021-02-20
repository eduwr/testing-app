import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import WidgetContainer from '../../src/components/WidgetContainer';
import api from '../../src/services/api';

jest.mock('../../src/services/api');

describe('Widget Container', () => {
  it('loads widgets upon mount', async () => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ],
    });
    const {getByText} = render(<WidgetContainer />);

    await waitFor(() => {
      expect(getByText('Widget 1')).not.toBeNull();
    });

    await waitFor(() => {
      expect(getByText('Widget 2')).not.toBeNull();
    });
  });
});
