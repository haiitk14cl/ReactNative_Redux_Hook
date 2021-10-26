import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryListItem from './../components/CategoryListItem';

export default function CategoriesPage(props) {
  useEffect(() => {
    //console.log("useEffect");
  });
  const navigation = useNavigation();
  const [categories, setCategories] = useState([
    {id: 1, name: 'Dụng cụ trượt tuyết'},
    {id: 2, name: 'Quần áo trược tuyết'},
    {id: 3, name: 'Kính mũ'},
    {id: 4, name: 'Xe cộ'},
    {id: 5, name: 'Sách'},
    {id: 6, name: 'Bảo hiểm'},
    {id: 7, name: 'Giới thiệu'},
    {id: 8, name: 'Bài viết'},
  ]);

  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <CategoryListItem category={item} 
          onPress={() => navigation.navigate('CategoryPage', { 
            categoryName: item.name
          })}
        >
        </CategoryListItem>
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}></FlatList>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE6F5',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
