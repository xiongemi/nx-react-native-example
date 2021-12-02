import * as React from 'react';

import { render } from '@testing-library/react-native';

import App from './App';

test('renders correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});

test('renders AppNavigation correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('app-navigation')).toHaveTextContent('Welcome to AppNavigation!');
});
