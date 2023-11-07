import { Text, View, TouchableOpacity, Image } from "react-native";

import React from "react";
import styles from "./Header.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { clearUser } from '../../features/auth/authslice'
import { deleteSession } from "../../db";

const Header = ({ name, title, navigation }) => {
  const dispatch = useDispatch()

const logout = () => {
  dispatch(clearUser())
  deleteSession()
}

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
        <AntDesign name="logout" size={24} color="white"onPress={logout} />
      </View>

    </View>
  );
};

export default Header;
