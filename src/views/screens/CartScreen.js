import React from "react";
import {  Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../../consts/colors";
import { FlatList } from "react-native-gesture-handler";
import foods from "../../consts/foods";
import { PrimaryButton } from "../components/Button";


const CartScreen=({navigation})=>{
    const CartCard =({item})=>{
        return(
            <View style={styles.cartCard}>
                <Image source={item.image} style={{height:80,width:80,}}/>
                <View style={{height:100,marginLeft:10,paddingVertical:20,flex:1,}}>
                    <Text style={{fontWeight:'bold',fontSize:16,color:COLORS.dark}}>{item.name}</Text>
                    <Text style={{fontSize:13,color:COLORS.grey}}>{item.ingredients}</Text>
                    <Text style={{fontSize:17,fontWeight:'bold',color:COLORS.dark}}>${item.price}</Text>
                </View>
                <View style={{marginRight:20,alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:COLORS.dark}}>3</Text>
                    <View style={styles.actionBtn}>
                        <Icon name = 'remove' size={25} color={COLORS.white} />
                        <Icon name = 'add' size={25} color={COLORS.white} />
                    </View>
                </View>
            </View>
        )};
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
            <View style={styles.header}>
                <Icon name='arrow-back-ios' size={28} color={COLORS.dark} onPress={navigation.gorBack} />
                <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.dark}}>Cart</Text>
            </View>
            <FlatList showsVerticalScrollIndicator={false}
             contentContainerStyle={{paddingBottom:80}}
             data={foods}
             renderItem={({item}) => <CartCard item={item}/>}
             
             ListFooterComponent={()=>(
                <View style={{paddingHorizontal:20,marginTop:20}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15,}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:COLORS.dark}}>Total Price</Text>
                        <Text style={{fontSize:18,fontWeight:'bold',color:COLORS.dark}}>$50</Text>
                    </View>
                    <View style={{marginHorizontal:30}}>
                        <PrimaryButton title={'CHECKOUT'}/>
                    </View>
                </View>
             )}
             />
        </SafeAreaView>
    )
};
const styles=StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
    },
    cartCard:{
        height:100,
        elevation:15,
        borderRadius:10,
        backgroundColor:COLORS.white,
        marginVertical:10,
        marginHorizontal:20,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
    },
    actionBtn:{
        width:80,
        height:30,
        backgroundColor:COLORS.primary,
        borderRadius:30,
        paddingHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
});
export default CartScreen;