/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import crashlytics from '@react-native-firebase/crashlytics';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import ErrorFallbackUI from '@component/ErrorFallBackUI';
import ErrorBoundary from '@component/ErrorBoundary';

import HomeScreen from 'screens/HomeScreen';
import SampleScreen from '@screens/SampleScreen';
import TabScreen from '@screens/TabScreen';

import configureStore from 'redux/store/storeConfig';

import {crashesErrors} from '@static/errorMessages';
import {ErrorInterface} from '@utils/interface';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const {store, persistor} = configureStore();

const App = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    // ADVANCED use case:
    const exceptionhandler = (error: ErrorInterface, isFatal: Boolean) => {
      if (error && isFatal) {
        setHasError(true);
      }
      if (error) {
        console.log('===>1 Exception handler');
        crashlytics().log('Application crashed :- Exception Handler');
        crashlytics().recordError(
          new Error(
            `${isFatal ? 'Fatal' : 'Non-Fatal : Error Name'}:- ${
              error.name
            } & Error Message :- ${error.message}`,
            // [{...error}],
          ),
        );
      }
    };
    setJSExceptionHandler(exceptionhandler, true);
  }, []);

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Tab" component={TabScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tab" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Sample" component={SampleScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="page" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    );
  }

  function DrawerScreens() {
    return (
      <Drawer.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    );
  }

  const _onRetry = () => {
    setHasError(false);
  };

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate
          loading={
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <ActivityIndicator />
            </View>
          }
          persistor={persistor}>
          {hasError === true ? (
            <ErrorFallbackUI
              onRetry={_onRetry}
              content={crashesErrors.applicationCrash}
              buttonText="Retry"
              accessibiltyText="btnRetryEH"
            />
          ) : (
            <ErrorBoundary>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{title: 'Home'}}
                  />
                  <Stack.Screen
                    name="Sample"
                    component={SampleScreen}
                    options={{title: 'Sample'}}
                  />
                  <Stack.Screen
                    name="BottomTabs"
                    component={DrawerScreens}
                    options={{headerShown: false}}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </ErrorBoundary>
          )}
        </PersistGate>
      </Provider>
    </View>
  );
};

export default App;
