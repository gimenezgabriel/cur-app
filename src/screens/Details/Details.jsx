import { Text, View, Image } from "react-native";

import React from "react";
import { Header } from "../../components";
import styles from "./Details.style";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = ({ route, navigation }) => {
  const { product } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
      <Header title={"Detalle"} navigation={navigation} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={product.images[0]} />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>Matricula: {product.cardnumber}</Text>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Details;
