import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { Header, SearchInput } from "../../components";
import styles from "./products.style";
import allProducts from "../../data/products";
import ProductItem from "./ProductItem/ProductItem";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = ({ navigation, route }) => {
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { title } = route.params;

  useEffect(() => {
    if (title) {
      const products = allProducts.filter(
        (product) => product.category === title
      );
      const productsFiltered = products.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    }
  }, [title, keyword]);

  return (
    <SafeAreaView style={styles.container}>
    {/* <View style={styles.container}> */}
      <Header title={title} navigation={navigation} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {/* <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {product: item})}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        /> */}
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <ProductItem product={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    {/* </View> */}
    </SafeAreaView>
  );
};

export default Products;
