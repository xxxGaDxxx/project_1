import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";

export const Footer = () => {

  const socialNetwork = [
    {
      id: 10,
      img: 'https://free-png.ru/wp-content/uploads/2021/01/telegram_cvet-d23c11fa-340x334.png',
      style: styles.imgTg
    },
    {
      id: 20,
      img: 'https://cdn.shopify.com/s/files/1/0133/3795/2320/products/tiktok_logo_icon_153030_512x.png?v=1652170403',
      style: styles.imgTik
    },
    {
      id: 30,
      img: 'https://cdn.icon-icons.com/icons2/2714/PNG/512/instagram_logo_thin_icon_171701.png',
      style: styles.imgInst
    },
    {
      id: 40,
      img: 'https://zdrav.expert/images/d/dd/%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5.png',
      style: styles.imgWk
    },
    {
      id: 50,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
      style: styles.imgFe
    },
  ]

  return (
    <View style={styles.contentFooter}>
      <Text style={styles.text}>вступайте в наши сообщества и будьте в курсе всех новостей</Text>

      <View style={styles.linkImg}>
        {socialNetwork.map(item => (<Image
          key={item.id}
          style={item.style}
          source={{
            uri: item.img,
          }}
        />))}
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
        <Text style={styles.text}>{`Пройдите опрос,\nпомогите нам стать лучше!`}</Text>
      </View>


      <Image
        style={styles.imgCads}
        source={{
          uri: 'https://homsair.by/upload/cards.png',
        }}
      />

      <View style={styles.boxLinkFooter}>
        <TouchableOpacity
          onPress={() => {
          }}
        >
          <Text style={styles.btnLinkFooter}>оплата</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
          }}
        >
          <Text style={styles.btnLinkFooter}>доставка</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
          }}
        >
          <Text style={styles.btnLinkFooter}>карта сайта</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerFooter}>
        <Text style={styles.textFooter}>© ООО «БУРГЕР БК», 2017, УНП 192415615, свидетельство о гос.
          регистрации выдано Минским горисполкомом 29 января 2015 года. Республика Беларусь, 220125,
          г. Минск, пр-т Независимости, д.179, пом.13.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFooter: {
    backgroundColor: '#563128',
    marginTop: 80,
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
    marginTop: 10,
  },
  imgCads: {
    marginVertical: 10,
    height: 35,
    width: '100%',
  },
  boxLinkFooter: {
    flexDirection: 'row',
    marginBottom: 60,
  },
  btnLinkFooter: {
    fontSize: 18,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: -0.7,
    color: '#ed7c36',
    marginRight: 10,
    marginVertical: 10
  },
  containerFooter: {
    backgroundColor: '#663f35',
    padding: 20,
    margin: -10,
    borderBottomColor: '#92746d',
    borderBottomWidth: 2
  },
  textFooter: {
    color: '#92746d',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  textPencil: {
    // width: 50
  }
});
