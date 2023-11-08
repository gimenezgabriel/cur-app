import { Text, View, Image, Pressable } from "react-native";

import React from "react";
import { Header } from "../../components";
import styles from "./Details.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

const Details = ({ route, navigation }) => {
  const counter = useSelector(state => state.counter.value)
  const { product } = route.params;
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }))
  }
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.containerCard}>
      <Header title={"Detalle"} navigation={navigation} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} src={product.images} />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Matricula: {product.cardnumber}</Text>
      {/* <Text style={{fontSize: 50}}>{counter}</Text>
      <Pressable onPress={handleAddToCart}>
        <Text>Add to cart</Text>
      </Pressable> */}
    </View>
    </SafeAreaView>
  );
};

export default Details;
