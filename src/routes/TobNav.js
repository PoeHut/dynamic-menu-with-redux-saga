import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {requestMenu} from 'reduxs/actions';
import {Spinner} from 'common/components';
import {COLORS} from 'common/constants';
import BottomNav from './BottomNav';
import {WishesPage, Chat, Notification, Profile, Help, ViewMore} from 'screens';

const TobTab = createMaterialTopTabNavigator();

const TobNav = () => {
  const {menus, loading, error} = useSelector(state => state.MenuReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMenu());
  }, []);

  if (loading) return <Spinner />;

  return (
    <TobTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.darkgray,
      }}>
      <TobTab.Screen
        name="BottomNav"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}>
        {props => <BottomNav {...props} menus={menus} />}
      </TobTab.Screen>

      {menus
        ?.filter(topMenu => topMenu.MenuType === 1)
        .map(menu => {
          switch (menu.Component) {
            case 'WishesPage':
              return (
                <TobTab.Screen
                  key={menu.MobileMenuId}
                  name={menu.MenuName}
                  component={WishesPage}
                  options={{
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons
                        name={menu.Icon}
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
              );

            case 'Chat':
              return (
                <TobTab.Screen
                  key={menu.MobileMenuId}
                  name={menu.MenuName}
                  component={Chat}
                  options={{
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons
                        name={menu.Icon}
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
              );

            case 'Help':
              return (
                <TobTab.Screen
                  key={menu.MobileMenuId}
                  name={menu.MenuName}
                  component={Help}
                  options={{
                    tabBarIcon: ({color}) => (
                      <AntDesign name={menu.Icon} color={color} size={24} />
                    ),
                  }}
                />
              );

            case 'Notification':
              return (
                <TobTab.Screen
                  key={menu.MobileMenuId}
                  name={menu.MenuName}
                  component={Notification}
                  options={{
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons
                        name={menu.Icon}
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
              );

            case 'Profile':
              return (
                <TobTab.Screen
                  key={menu.MobileMenuId}
                  name={menu.MenuName}
                  component={Profile}
                  options={{
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
              );

            default:
              return (
                <TobTab.Screen
                  key={menu.MobileMenuId}
                  name={menu.MenuName}
                  component={ViewMore}
                  options={{
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons
                        name={menu.Icon}
                        color={color}
                        size={24}
                      />
                    ),
                  }}
                />
              );
          }
        })}
    </TobTab.Navigator>
  );
};

export default TobNav;
