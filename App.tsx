import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from "./src/components/header/Header";
import {Content} from "./src/components/content/Content";
import {Coupons} from "./src/components/coupons/Сoupons";
import {Footer} from "./src/components/footer/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView style={styles.content}>
        <Coupons/>
        <Content/>
        <Footer/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#f0ede6'

  },
  container: {
    // backgroundColor: '#ffeece',
    // margin:10,
    // backgroundColor: '#ffe8cc',
    // color:'#fff'
  },
});
