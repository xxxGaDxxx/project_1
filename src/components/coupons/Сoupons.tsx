import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const Coupons = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>КУПОНЫ</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        }}
      >
        <Text style={styles.btnText}>Все</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        }}

      >
        <Text style={styles.btnText}>Личные купоны</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        }}
      >
        <Text style={styles.btnText}>Добавить купон</Text>
      </TouchableOpacity>


    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ff8d0a'
  },
  button: {
    width: 200,
    margin: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#673f35",
    borderColor: '#673f35',

    padding: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
