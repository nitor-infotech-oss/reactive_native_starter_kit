//Please add the library import below.
import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {apiCall} from '@utils/api';

//Please add the Custom component import below.

//Please add the Custom constants import below.

//Add the constant variables below.

interface props {}

const HomeScreen = (props: props) => {
  //If using useState hook place them below

  //If using use effests place them below.
  useEffect(() => {
    (async () => {
     const res = await apiCall({
        apiPath: 'https://reqres.in/api/users',
        params: null,
        headers: null,
        method: 'GET',
      });

      console.log("res", res)
    })();
  }, []);

  //All the custom/business logic function below.

  //Make sure to add UnderScore before every custom function you declare (Eg:-_functionName)
  return (
    <View>
      <Text>Test</Text>

      <Button onPress={() => alert('pressed')}>Press me</Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
