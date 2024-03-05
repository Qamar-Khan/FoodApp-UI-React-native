import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../../consts/colors";
import { SecondaryButton } from "../components/Button";

const DetailsScreen=({navigation,route})=>{
    const item = route.params;
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white}}>
            <View style={styles.header}>
                <Icon name = 'arrow-back-ios' size ={28} color={COLORS.dark} onPress={navigation.goBack} />
                <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.dark}} >Details</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{justifyContent:'center',alignItems:'center',height:280,}}>
                    <Image source={item.image} style={{height:220,width:220}} />
                </View>
                <View style={styles.details}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{fontSize:25,fontWeight:'bold',color:COLORS.white}}>{item.name}</Text>
                        <View style={styles.iconContainer} >
                            <Icon name='favorite-border' color={COLORS.primary} size={25}/>
                        </View>
                    </View>
                    <Text style={styles.detailsText}>
                    By injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    </Text>
                    <View style={{marginTop:40,marginBottom:40}}>
                        <SecondaryButton onPress={()=>navigation.navigate('Cart')} title={'Add To Cart'} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const styles= StyleSheet.create({
    header:{
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
    },
    details:{
        paddingHorizontal:20,
        paddingTop:40,
        paddingBottom:60,
        backgroundColor:COLORS.primary,
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
    iconContainer:{
        backgroundColor:COLORS.white,
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
    },
    detailsText:{
        marginTop:10,
        lineHeight:22,
        fontSize:16,
        color:COLORS.white,
    }
})
export default DetailsScreen;