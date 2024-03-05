import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";



const OnBoardScreen=({navigation})=>{
    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.white} }>
            <View style={{height:400}}>
                <Image style={styles.image} source={require('../../assets/onboardImage.png')} />   
            </View>
            <View style={styles.textContainer}>
                    <Text style={styles.title}>Delicious Food</Text>
                    <Text style={styles.text}>We Help you to find best and delicious food</Text>
            
            <View style={styles.indicatorContainer}>
                <View style={styles.currentIndicator}/>
                <View style={styles.indicator}/>
                <View style={styles.indicator}/>
            </View>
            <PrimaryButton onPress={()=>navigation.navigate('Home')} title={'Get Started'} />
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    image:{
        width: '100%',
        resizeMode:"contain",
        top:-150
    },
    textContainer:{
        flex:1,
        paddingHorizontal:50,
        paddingBottom:40,
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color:COLORS.dark
    },
    text:{
        marginTop:20,
        fontSize:18,
        textAlign:'center',
        color:COLORS.grey
    },
    indicatorContainer:{
        height:50,
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    currentIndicator:{
        height:12,
        width:30,
        borderRadius:10,
        backgroundColor:COLORS.primary,
        marginHorizontal:5,
    },
    indicator:{
        height:12,
        width:12,
        borderRadius:6,
        backgroundColor:COLORS.grey,
        marginHorizontal:5,
    },
})
export default OnBoardScreen;