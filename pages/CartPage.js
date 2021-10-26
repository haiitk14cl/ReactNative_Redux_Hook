import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CartPage(props) {
  useEffect(() => {});

  return (
    <View>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{fontFamily: 'Arial', fontSize: 15}}>
          Login with Facebook
        </Text>
      </Icon.Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
