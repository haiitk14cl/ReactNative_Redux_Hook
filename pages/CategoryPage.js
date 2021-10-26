import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, FlatList, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

import ProductListItem from './../components/ProductListItem';
// import SP_1 from './../assets/sp_1.png';
// import SP_2 from './../assets/sp_2.png';
// import SP_3 from './../assets/sp_3.png';
// import SP_4 from './../assets/sp_4.png';

export default function CategoryPage(props) {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  let {categoryName} = route.params;
  //console.log(categoryName);
  useEffect(() => {
    getProducts();
  }, []);
  
  const getProducts = () => {
    axios.get(`https://e5bd-14-226-224-177.ngrok.io/products`)
    .then(res => {
      setProducts(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <FlatList
      data={products}
      contentContainerStyle={styles.container}
      renderItem={({item}) => (
        <View style={styles.wrapper}>
        <ProductListItem product={item} 
          onPress={() => 
            Alert.alert('Chi tiết sản phẩm')
          }
        >
        </ProductListItem>
        </View>
      )}
      numColumns={2}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}></FlatList>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 8
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 4
  }
});
