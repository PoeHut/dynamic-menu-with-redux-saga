import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from 'common/constants';
import {HomeScreen, EmployeeDirectoryStack} from 'screens';

const Tab = createBottomTabNavigator();

const BottomNav = ({menus}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.darkgray,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="md-home-outline" color={color} size={24} />
          ),
        }}
      />

      {menus
        ?.filter(bottomMenu => bottomMenu.MenuType === 0)
        .map(menu => {
          switch (menu.Component) {
            case 'employeeDirectoryStack':
              return (
                <Tab.Screen
                  key={menu.MobileMenuId}
                  name={menu.MenuName}
                  component={EmployeeDirectoryStack}
                  options={{
                    tabBarLabel: 'Employee',
                    tabBarIcon: ({color}) => (
                      <Ionicons name={menu.Icon} color={color} size={24} />
                    ),
                  }}
                />
              );

            default:
              return;
          }
        })}
    </Tab.Navigator>
  );
};

export default BottomNav;
