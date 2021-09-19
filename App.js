import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Flatlist } from "react-native";
import Header from "./Components/header";

const App = () => {
  const [items, setItems] = useState([
    { id: 2344, text: "Eggs" },
    { id: 2345, text: "Juice" },
    { id: 2346, text: "Milk" },
    { id: 2347, text: "Bread" },
    { id: 2348, text: "Yogurt" },
  ]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image
        source={{ uri: "https://randomuser.me/api/portraits/women/5.jpg" }}
        style={styles.img}
      ></Image> */}
      <Header title="Shopping List"></Header>
      <Flatlist
        data={items}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      ></Flatlist>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },

  // text: {
  //   color: "darkslateblue",
  //   fontSize: 30,
  // },

  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100 / 2,
  // },
});

export default App;
