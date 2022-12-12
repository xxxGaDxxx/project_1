import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";


type ItemType = {
  id: number
  description: string
  discount: number
  orderNumber: number
  img: string
  newPrices: number
  pastPrices: number
}

export const Content = () => {

  const descriptions = [
    'Воппер - 2 шт., Напиток 0,5 л - 2 шт., Кинг Фри M - 2 шт.',
    'Чикуе Тар Тар, Напиток 0,3л, Кинг Фри М',
    'Вопер Ролл, Напиток 0,4л, Кинг Фри М',
    'Луковые колечки 6 шт - 2 шт., Кинг Фри M - 2 шт., СОУС - 2 шт., Кинг Наггетс 9 шт - 2 шт.',
    'Сырные медальоны 9 шт.',
  ]

  const discount = [20, 18, 17, 25, 20]

  const orderNumber = [4201, 4203, 4205, 4444, 4222]

  const img = [
    'https://burger-king.by/upload/resize_cache/webp/iblock/8a7/8a7695fdd8d403563d520aaab7435422.webp',
    'https://tastyandpoint.com/wp-content/uploads/2022/09/4dc4c4537bf4bcd8f4ec8983421a4a3e.webp',
    'https://cdn.carte.by/assets/2021/03/01/b481b6e9792fd0756daebd9757b4b7---png_710x_83b40_convert.png',
    'https://burger-king.by/upload/resize_cache/webp/upload/iblock/71b/vy7cpm7ivsq92ict29iz86hgz53nm3hn.webp',
    'https://burger-king.by/upload/resize_cache/webp/upload/iblock/13e/ccca6l26l6qyuo8ywb7flyidw6aklws7.webp',
  ]

  const newPrices = [28, 14.90, 19.30, 6.30, 27.30]

  const pastPrices = [30, 16, 50, 7.50, 24, 50, 30, 30]

  const data: ItemType[] = [...Array(20)].map((_, index) => ({
    id: index + 1,
    description: descriptions[index % descriptions.length],
    newPrices: newPrices[index % newPrices.length],
    pastPrices: pastPrices[index % pastPrices.length],
    img: img[index % img.length],
    orderNumber: orderNumber[index % orderNumber.length],
    discount: discount[index % discount.length],
  }))

  // const render: ListRenderItem<ItemType> = ({item}) => {
  //   return (
  //     <View style={styles.items}>
  //
  //       <View style={styles.boxDiscount}>
  //         <Text style={styles.discount}>{item.discount} %</Text>
  //         <Text style={styles.title}>САМОВЫВОЗ</Text>
  //       </View>
  //
  //       <View style={styles.boxContent}>
  //         <Image
  //           style={styles.img}
  //           source={{
  //             uri: item.img,
  //           }}
  //         />
  //         <View style={styles.hrDasher}/>
  //
  //         <Text style={styles.newPrices}>{item.newPrices} руб.</Text>
  //         <Text style={styles.pastPrices}>{item.pastPrices} руб.</Text>
  //
  //         <Text style={styles.description}>{item.description}</Text>
  //
  //         <Text style={styles.orderNumber}>№ {item.orderNumber}</Text>
  //       </View>
  //     </View>
  //   )
  // }

  return (
    <View>
      {data.map(item => {
        return (
          <View style={styles.items} key={item.id}>

            <View style={styles.boxDiscount}>
              <Text style={styles.discount}>{item.discount} %</Text>
              <Text style={styles.title}>САМОВЫВОЗ</Text>
            </View>

            <View style={styles.boxContent}>
              <Image
                style={styles.img}
                source={{
                  uri: item.img,
                }}
              />
              <View style={styles.hrDasher}/>

              <Text style={styles.newPrices}>{item.newPrices} руб.</Text>
              <Text style={styles.pastPrices}>{item.pastPrices} руб.</Text>

              <Text style={styles.description}>{item.description}</Text>

              <Text style={styles.orderNumber}>№ {item.orderNumber}</Text>
            </View>
          </View>
        )
      })}
    </View>

    // <FlatList
    //   renderItem={render}
    //   data={data}
    //
    //   ListEmptyComponent={() => {
    //     return <View><Text>Пустой массив</Text></View>
    //   }}
    //
    //   ListFooterComponent={() => {
    //     return <View><Text>Футер</Text></View>
    //   }}
    // />
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    marginHorizontal: 40,
    marginVertical: 15,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  boxDiscount: {
    width: 100,
    flex: 1,
    position: 'relative',
  },
  discount: {
    fontSize: 32,
    color: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    fontWeight: '700',
    backgroundColor: '#1f8f3d',
    marginBottom: 0.5,
    textAlign: "center",
  },
  title: {
    color: '#fff',
    paddingHorizontal: 2,
    paddingVertical: 3,
    borderRadius: 10,
    fontWeight: '700',
    backgroundColor: '#1f8f3d',
    textAlign: "center",
  },
  img: {
    alignContent: "center",
    marginTop: -80,
    width: 260,
    height: 260
  },
  hrDasher: {
    marginBottom: 20,
    width: 260,
    height: 1,
    border: 'none',
    borderBottomColor: '#e8e1d1',
    borderBottomWidth: 2,
    borderStyle: 'dashed',
  },
  newPrices: {
    fontSize: 32,
    color: '#1f8f3d',
    fontWeight: '700',
    marginBottom: 10,
  },
  pastPrices: {
    fontSize: 24,
    color: '#673f35',
    fontWeight: '700',
    marginBottom: 10,
    textDecorationLine: 'line-through',

  },
  description: {
    fontSize: 16,
    fontWeight: '700',
    color: '#673f35',
    textAlign: "center",
    width: 200,
  },
  orderNumber: {
    fontSize: 24,
    borderColor: '#1f8f3d',
    borderWidth: 2,
    borderStyle: 'dashed',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    color: '#1f8f3d',
    fontWeight: '700',
    marginTop: 10,
  },
  boxContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

});
