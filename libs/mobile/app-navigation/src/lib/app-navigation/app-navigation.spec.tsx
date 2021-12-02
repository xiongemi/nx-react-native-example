import React from 'react';
import { render } from '@testing-library/react-native';

import AppNavigation from './app-navigation';

describe('AppNavigation', () => {
  it('should render successfully', () => {
    const { container } = render(<AppNavigation />);
    expect(container).toBeTruthy();
  });
});
