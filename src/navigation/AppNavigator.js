import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import LogIn from '../screens/LogIn';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Measurements from '../screens/Measurements';
import Category from '../screens/Category';
import SubCategory from '../screens/SubCategory';
import Designs from '../screens/Designs';
import Designer from '../screens/Designer';
import {TapGestureHandler} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Designer"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="LogIn"
          options={{headerShown: false}}
          component={LogIn}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          name="Measurements"
          options={{headerShown: false}}
          component={Measurements}
        />
        <Stack.Screen
          name="Category"
          options={{headerShown: false}}
          component={Category}
        />
        <Stack.Screen
          name="SubCategory"
          options={{headerShown: false}}
          component={SubCategory}
        />
        <Stack.Screen
          name="DesignerList"
          options={{headerShown: false}}
          component={Designs}
        />
        <Stack.Screen
          name="Designer"
          options={{headerShown: false}}
          component={Designer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
