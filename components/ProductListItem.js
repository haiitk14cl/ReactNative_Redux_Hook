import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconTable from './../assets/tablet.png';

export default function ProductListItem(props) {
  let {product, onPress, onPressBuy} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.containerImage}>
          <Image
            // source={product.image}
            source={{
              uri: product.image,
            }}
            onError={e => console.log(e.nativeEvent.error)}
            style={styles.categoryImage}
          />
        </View>
        <View style={styles.productName}>
          <Text style={styles.productNameTitle}>{product.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.productBottom}>
        <View style={styles.productPrice}>
          <Text>{product.price}</Text>
        </View>
        <View style={styles.buttonBuy}>
          <Text style={styles.buttonBuyTitle} onPress={() => { onPressBuy(product) }}>+ MUA</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // padding: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    marginBottom: 8,
  },
  containerImage: {
    alignItems: 'center',
  },
  categoryImage: {
    alignItems: 'center',
    height: 150,
    width: '100%',
    resizeMode: 'stretch',
    margin: 5,
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700',
  },
  productBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  productName: {
    margin: 8,
  },
  productNameTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 15,
  },
  productPrice: {
    margin: 8,
  },
  buttonBuy: {
    margin: 8,
  },
  buttonBuyTitle: {
    color: '#2acaea',
  },
});
