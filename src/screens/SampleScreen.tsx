//Please add the library import below.
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';

//Please add the Custom component import below.

//Please add the Custom constants import below.

//Add the constant variables below.

interface props {
  navigation: any;
}

const SampleScreen = ({navigation}: props) => {
  //If using useState hook place them below
  //If using use effests place them below.

  const onButtonPress = () => {
    navigation.navigate('HomeScreen');
  };

  //All the custom/business logic function below.

  //Make sure to add UnderScore before every custom function you declare (Eg:-_functionName)
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Sample Screen</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onButtonPress} style={styles.button}>
          Navigate Back to Home Screen
        </Button>
      </View>
    </View>
  );
};

export default SampleScreen;

const styles = StyleSheet.create({
  button: {backgroundColor: '#458'},
  container: {flex: 1},
  textContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonContainer: {paddingBottom: 50, paddingHorizontal: 20},
});
