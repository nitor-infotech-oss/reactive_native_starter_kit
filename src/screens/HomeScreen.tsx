//Please add the library import below.
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';

//Please add the Custom component import below.

//Please add the Custom constants import below.
import {apiCall} from '@utils/api';
import {Tab} from '@static/icons';
import {buttonsTitle} from '@static/verbiages';

//Add the constant variables below.
interface props {
  navigation: any;
}

const HomeScreen = ({navigation}: props) => {
  //If using useState hook place them below
  const [responseData, setResponseData] = useState({});
  //If using use effests place them below.
  useEffect(() => {
    doApiCall();
  }, []);

  //All the custom/business logic function below.

  const doApiCall = async () => {
    try {
      const res = await apiCall({
        apiPath: 'https://reqres.in/api/users',
        params: null,
        headers: null,
        method: 'GET',
      });

      setResponseData(res);
      console.log('res', res);
    } catch (error) {
      console.log('has error', error);
    }
  };

  const onButtonPress = () => {
    if (!responseData) {
      doApiCall();
      responseData && alert(JSON.stringify(responseData));
    } else {
      alert(JSON.stringify(responseData));
    }
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
