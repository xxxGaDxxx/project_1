import {ScrollView, StyleSheet, View} from 'react-native';
import {Header} from "./src/components/header/Header";
import {Content} from "./src/components/content/Content";
import {Coupons} from "./src/components/coupons/Сoupons";
import {Footer} from "./src/components/footer/Footer";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaProvider>
            <View>
                <Header/>
                <ScrollView style={styles.content}>
                    <Coupons/>
                    <Content/>
                    <Footer/>
                </ScrollView>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#f0ede6',
        marginBottom: 35

    },
});
