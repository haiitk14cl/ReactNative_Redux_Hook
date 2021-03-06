import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import IconTable from './../assets/tablet.png';

export default function CategoryListItem(props) {
  let {category, onPress} = props;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container} >
        <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage} source={IconTable}></Image>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    marginBottom: 16,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
});
