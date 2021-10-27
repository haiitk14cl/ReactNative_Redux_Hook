import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, Text, FlatList, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

import ProductListItem from './../components/ProductListItem';
import {actionGetProductRequest} from './../redux/_actions/productActions';
import { 
  actionInsertCartRequest, 
  actionGetCartRequest, 
  actionUpdateCartRequest 
} from './../redux/_actions/cartActions';

// import SP_1 from './../assets/sp_1.png';
// import SP_2 from './../assets/sp_2.png';
// import SP_3 from './../assets/sp_3.png';
// import SP_4 from './../assets/sp_4.png';

export default function CategoryPage(props) {
  //const [products, setProducts] = useState([]);
  // const navigation = useNavigation();
  // const route = useRoute();
  // let {categoryName} = route.params;
  //console.log(categoryName);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.data);
  const { isLoading } = useSelector((state) => state.productReducers);
  const carts = useSelector((state) => state.cartReducers.data)

  useEffect(() => {
    dispatch(actionGetProductRequest());
    dispatch(actionGetCartRequest());
  }, [dispatch]);

  const onPressBuy = (product) => {
    console.log("onPressBuy CARTS--------------");
    
    // var data = {};
    var newArray = carts.filter(function (el) {
      return el.id == product.id;
    });
    

    if (newArray.length === 0 ) {
      product.quatity = 1;
      dispatch(actionInsertCartRequest(product)); 
    }
    else {
      var cart = newArray[0];
      cart.quatity += 1;
      dispatch(actionUpdateCartRequest(product.id, cart ))
    }

    // if (cart.length > 0) {
    //   data = cart[0];
    //   data.quatity += 1;
    // }
    // dispatch(actionInsertCartRequest(data)); 
    dispatch(actionGetCartRequest());
  }

  

  return (
     
      <FlatList
        data={products}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <View style={styles.wrapper}>
            <ProductListItem
              product={item}
              onPress={() =>
                Alert.alert('Chi tiết sản phẩm')
              }
              onPressBuy = {onPressBuy}
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
    paddingTop: 8,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 4,
  },
});
