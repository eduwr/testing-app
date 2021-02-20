import React from 'react';

import {render} from '@testing-library/react-native';
import Hello from '../../src/components/Hello';

describe('Hello', () => {
  it('displays the passed-in name', () => {
    const {queryByText} = render(<Hello name="Eduardo" />);

    expect(queryByText('Hello, Eduardo!')).not.toBeNull();
  });
});
