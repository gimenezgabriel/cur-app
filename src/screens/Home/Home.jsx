import { FlatList } from "react-native";
// import { Header } from '../../components'
import { CategoryItem } from "./Components";
import React from "react";
import styles from "./Home.style";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetCategoriesQuery } from "../../services/shopApi";
import Logo from "../../components/Logo/Logo";
import Banner from "../../components/Banner/Banner";

const Home = ({ navigation, route }) => {
  const { data, isLoading } = useGetCategoriesQuery();
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header title={'Categorias'} navigation={navigation} name={route.name}/> */}
      <Logo />
      <Banner />
      {!isLoading && (
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(category) => category.title}
          renderItem={({ item }) => (
            <CategoryItem category={item} navigation={navigation} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
