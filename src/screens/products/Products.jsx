import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Header, SearchInput } from "../../components";
import styles from "./products.style";
import ProductItem from "./ProductItem/ProductItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../../services/shopApi";

const Products = ({ navigation}) => {
  const category = useSelector(state => state.shop.categorySelected)
  const [keyword, setKeyword] = useState("");
  const {data, isLoading} = useGetProductsByCategoryQuery(category.title)
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    if (!isLoading) {
      const dataArr = Object.values(data)
      setProducts(dataArr)
      const productsFiltered = dataArr.filter(product =>
        product.title.includes(keyword)
      )
      setProducts(productsFiltered);
    } 
  }, [isLoading, keyword]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={category.title} navigation={navigation} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
      {!isLoading && (
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductItem product={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Products;
