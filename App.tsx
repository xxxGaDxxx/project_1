import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from "./src/components/header/Header";
import {Content} from "./src/components/content/Content";
import {Coupons} from "./src/components/coupons/Сoupons";
import {Footer} from "./src/components/footer/Footer";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom','top']} style={{flex:1}}>
        <View style={{flex:1}}>
          <Header/>
          <ScrollView style={styles.content}>
            <Coupons/>
            <Content/>
            <Footer/>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#f0ede6',
    flex:1
    // marginBottom: 35
  },
});
