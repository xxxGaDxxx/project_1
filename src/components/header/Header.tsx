import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";


export const Header = () => {
  return (
    <View style={styles.container}>

      <View style={styles.containerBurger}>

        <Image
          style={styles.tinyLogoBurger}
          source={{
            uri: 'https://pngimg.com/uploads/burger_king/burger_king_PNG6.png',
          }}
        />

        <View style={styles.containerPhone}>
          <Image
            style={styles.tinyLogoPhone}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5103/5103372.png',
            }}
          />
          <Text style={styles.phoneText}>7566</Text>
        </View>
      </View>

      <View>
        <Image
          style={styles.basket}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/287/287624.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffeece',
  },
  containerBurger: {
    flexDirection: 'row',
  },
  tinyLogoBurger: {
    margin: 10,
    width: 40,
    height: 40
  },
  containerPhone: {
    flexDirection: 'row',
    marginTop: 15,
  },
  tinyLogoPhone: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  phoneText: {
    fontSize: 24,
    fontWeight: '700',
    color: "#f30000",
  },
  basket: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: 40,
    height: 40
  }


});
