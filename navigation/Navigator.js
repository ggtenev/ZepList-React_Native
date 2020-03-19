import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewList from '../screens/NewList'
import List from '../screens/List'
import Home from '../screens/Home'

const defaultOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: 'red'
  },
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  List: {
    screen: List,
  },
}, {
  defaultNavigationOptions: defaultOptions
}
);
const ListNav = createStackNavigator({
  List: NewList
}, {
  defaultNavigationOptions: defaultOptions
})
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="md-home" size={32} color={tabInfo.tintColor} />
      }
    }
  },
  Add: {
    screen: ListNav,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="md-add" size={32} color={tabInfo.tintColor} />
      }
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: 'red',
  }
}
);

export default createAppContainer(TabNavigator);