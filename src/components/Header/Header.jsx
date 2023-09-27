import { Text, View, TouchableOpacity, Image } from "react-native";

import React from "react";
import styles from "./Header.style";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ name, title, navigation }) => {
  return (
    <View style={styles.container}>
      {name !== "Home" && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >

          <Ionicons name="chevron-back-outline" size={30} color="#ffffff" />
        </TouchableOpacity>
      )}
      <View style={styles.headerContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
