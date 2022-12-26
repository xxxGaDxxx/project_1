import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Entypo} from '@expo/vector-icons'
import SafeAreaView from 'react-native-safe-area-view';

export const Header = () => {
    return (
        // <SafeAreaView forceInset={{top: 'always'}}>
            <View style={styles.container}>

                <View style={styles.containerHeader}>

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

                <View style={styles.containerHeader}>
                    <Image
                        style={styles.basket}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/287/287624.png',
                        }}
                    />


                    <SafeAreaView style={styles.basket}>
                        <TouchableOpacity>
                            <Entypo name="menu" size={40} color="black"/>
                        </TouchableOpacity>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={styles.text}>sssss</Text>
                        </View>
                    </SafeAreaView>
                </View>

            </View>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffeece',
    },
    containerHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyLogoBurger: {
        marginHorizontal: 10,
        width: 40,
        height: 40
    },
    containerPhone: {
        flexDirection: 'row',
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
        marginLeft: 10,
        width: 40,
        height: 40
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
    }


});
