/**
 * @format
 * @flow
 */

import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import getAccessibilityProps from '@utils/accessibility';

type Props = {
  onRetry: Function;
  content: string;
  buttonText: string;
  accessibiltyText: string;
};

const ErrorFallbackUI = ({
  onRetry,
  content,
  buttonText,
  accessibiltyText,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{content}</Text>
      <TouchableOpacity
        onPress={() => {
          onRetry();
        }}
        style={styles.button}
        {...getAccessibilityProps(
          accessibiltyText || 'btnRetry',
          true,
          accessibiltyText || 'Retry button on Error Boundary',
          'button',
        )}>
        <Text>{buttonText || 'Retry'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorFallbackUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
  },
});
