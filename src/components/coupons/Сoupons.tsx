import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const Coupons = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>КУПОНЫ</Text>

      <TouchableOpacity
          style={styles.button}
          onPress={()=>{}}
      >
          <Text>Все</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>{}}

      >
        <Text>Личные купоны</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>{}}
      >
        <Text>Добавить купон</Text>
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
  button:{
    width:200,
    margin:10,
    fontSize:18,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#673f35",
    borderColor:'#673f35',
    color:'#fff',
    padding: 10
  },
});
