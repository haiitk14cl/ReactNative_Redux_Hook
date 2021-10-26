import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import SettingPage from './pages/SettingPage';

const CategoriesStack = createNativeStackNavigator();
function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator>
      <CategoriesStack.Screen
        name="CategoriesPage"
        component={CategoriesPage}
        options={{
          title: 'Danh mục sản phẩm',
        }}
      />
      {/* <Stack.Screen name="Categories" options={{title: 'Categories'}}>
          {props => <Categories {...props} extraData={100}></Categories>}
        </Stack.Screen> */}
      <CategoriesStack.Screen
        name="CategoryPage"
        component={CategoryPage}
        options={({route}) => ({title: route.params.categoryName})}
      />
    </CategoriesStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="CartPage"
        component={CartPage}
        options={{title: 'Giỏ hàng'}}
      />
    </CartStack.Navigator>
  );
}

const OrderStack = createNativeStackNavigator();
function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="OrderPage"
        component={OrderPage}
        options={{title: 'Đơn hàng'}}
      />
    </OrderStack.Navigator>
  );
}

const SettingStack = createNativeStackNavigator();
function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="SettingPage"
        component={SettingPage}
        options={{title: 'Setting'}}
      />
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNav(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          showLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Categories') {
              iconName = 'layers';
              color = focused ? '#3d95e5' : '#9C9C9C';
            } else if (route.name === 'Cart') {
              iconName = 'cart';
              color = focused ? '#3d95e5' : '#9C9C9C';
            } else if (route.name === 'Order') {
              iconName = 'browsers';
              color = focused ? '#3d95e5' : '#9C9C9C';
            } else if (route.name === 'Setting') {
              iconName = 'options';
              color = focused ? '#3d95e5' : '#9C9C9C';
            }
            // You can return any component that you like here!
            return (
              <Ionicons name={`${iconName}`} size={30} color={`${color}`} />
            );

            //return <Ionicons name="logo-buffer" color="#4F8EF7" size={30} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen
          name="Categories"
          component={CategoriesStackScreen}
          options={{
            tabBarLabel: 'Shopping',
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStackScreen}
          options={{
            tabBarBadge: 5,
            tabBarLabel: 'Giỏ hàng',
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderStackScreen}
          options={{
            tabBarLabel: 'Đơn hàng',
          }}
        />
        <Tab.Screen name="Setting" component={SettingStackScreen} options={{
          tabBarLabel: 'Setting'
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
