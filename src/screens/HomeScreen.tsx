//Please add the library import below.
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

//Please add the Custom component/function import below.
import {doApiCall} from '@redux/actions/homeScreen';

//Please add the Custom constants import below.
// import {apiCall} from '@utils/api';
import {Tab} from '@static/icons';
import {buttonsTitle} from '@static/verbiages';

//Add the constant variables below.
interface props {
  navigation: any;
}

const HomeScreen = ({navigation}: props) => {
  //If using useState hook place them below
  // const isLoggedIn = useSelector((state) => state.homeScreen.homescreentest);
  const dispatch = useDispatch();

  //If using use effests place them below.
  useEffect(() => {
    dispatch(doApiCall());
  }, [dispatch]);

  //All the custom/business logic function below.

  const onButtonPress = async () => {
    const data = await dispatch(doApiCall());
    console.log('===>1', data);

    Alert.alert('Alert Title', 'Test', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const onNavigate = (screen: String) => {
    navigation.navigate(screen);
  };

  //Make sure to add UnderScore before every custom function you declare (Eg:-_functionName)
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Home</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={onButtonPress}
          style={[styles.button, {backgroundColor: '#4645'}]}>
          {buttonsTitle.generalAPICall}
        </Button>
        <Button onPress={() => onNavigate('Sample')} style={styles.button}>
          {buttonsTitle.generalNext}
        </Button>
        <Button onPress={() => onNavigate('BottomTabs')} style={styles.button}>
          <Tab name={'tab'} size={12} />
          {buttonsTitle.generalTabButton}
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  button: {backgroundColor: '#458', margin: 5, justifyContent: 'center'},
  container: {flex: 1},
  textContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  buttonContainer: {paddingBottom: 50, paddingHorizontal: 20},
});
