import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../config/AppText';

export class NutritionScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Nutrition screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});