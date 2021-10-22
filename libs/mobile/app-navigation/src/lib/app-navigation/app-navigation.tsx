import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface AppNavigationProps {}

export function AppNavigation(props: AppNavigationProps) {
  return (
    <View testID="app-navigation">
      <Text>Welcome to AppNavigation!</Text>
    </View>
  );
}

export default AppNavigation;
