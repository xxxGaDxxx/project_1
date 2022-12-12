import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";

export const Footer = () => {
  return (
    <View style={styles.contentFooter}>
      <Text style={styles.text}>вступайте в наши сообщества и будьте в курсе всех новостей</Text>

      <View style={styles.linkImg}>
        <Image
          style={styles.imgTg}
          source={{
            uri: 'https://free-png.ru/wp-content/uploads/2021/01/telegram_cvet-d23c11fa-340x334.png',
          }}
        />
        <Image
          style={styles.imgTik}
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0133/3795/2320/products/tiktok_logo_icon_153030_512x.png?v=1652170403',
          }}
        />
        <Image
          style={styles.imgInst}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/2714/PNG/512/instagram_logo_thin_icon_171701.png',
          }}
        />
        <Image
          style={styles.imgWk}
          source={{
            uri: 'https://zdrav.expert/images/d/dd/%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5.png',
          }}
        />
        <Image
          style={styles.imgFe}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
          }}
        />
      </View>

      <Text style={styles.text}>подпишитесь и следите за всеми акциями и новинками бургер
        кинг </Text>

      <TouchableHighlight onPress={() => {
      }}>
        <View style={styles.button}>
          <Text style={styles.textBtn}>ваш e-mail</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.survey}>
        <Image
          style={styles.imgPencil}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4277/4277132.png',
          }}
        />
        <Text style={styles.text}>Пройдите опрос, помогите нам стать лучше!</Text>
        {/*<Text style={styles.textPencil}>Пройдите опрос,  помогите нам стать лучше!</Text>*/}
      </View>


      <Text style={styles.text}>подпишитесь и следите за всеми акциями и новинками
        бургер
        кинг </Text><Text style={styles.text}>подпишитесь и следите за всеми акциями и новинками
      бургер
      кинг </Text><Text style={styles.text}>подпишитесь и следите за всеми акциями и новинками
      бургер
      кинг </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFooter: {
    backgroundColor: '#673f35',
    marginTop: 80,
    // height:200,
    paddingVertical: 50,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: -0.7,
    marginVertical: 10
  },
  linkImg: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  imgTg: {
    padding: 10,
    width: 40,
    height: 40,
    backgroundColor: '#4088e1',
  },
  imgTik: {
    padding: 10,
    width: 40,
    height: 40,
    backgroundColor: '#22E5E0FF',
  },
  imgInst: {
    padding: 10,
    width: 40,
    height: 40,
    backgroundColor: '#F43F74FF',
  },
  imgWk: {
    padding: 10,
    width: 40,
    height: 40,
    backgroundColor: '#5080B7FF',
  },
  imgFe: {
    padding: 10,
    width: 40,
    height: 40,
    backgroundColor: '#1177F0FF',
  },
  button: {
    backgroundColor: '#3D221CFF',
    padding: 10,
    width: 150,
    marginVertical: 10,
  },
  textBtn: {
    textTransform: 'uppercase',
    letterSpacing: -0.7,
    color: '#e39342',
    fontWeight: '800',
  },
  survey: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  imgPencil: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textPencil: {
    width: 50
  }
});
