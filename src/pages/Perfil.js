import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

export function Perfil() {
    return (
        <View style = {styles.container}>

            <Image
                style = {{width:150,height:150,borderRadius:400/2,alignItems:'center',}}
                source = {require('../../assets/minhafoto.png')}>
            </Image>
            <Text style = {{fontSize:20,fontWeight:'bold'}}>Luiz Gustavo Mazzucco Amboni</Text>
            <Text style = {{fontSize:20,fontWeight:'bold'}}>18 Anos</Text>
            <Text style = {{fontSize:20,fontWeight:'bold'}}>4° Fase Curso Técnico em Informática {"\n"} </Text>

            <View style = {[styles.views,styles.caixa1]}>
            <Text style = {{fontSize:20,fontWeight:'bold'}}>Flamengo | CRF </Text>
            <Text style = {{fontSize:15}}> Sonho sempre foi ser jogador de futebol  </Text>
            <Text style = {{fontSize:20,fontWeight:'bold'}}>FaZe Clan </Text>
            <Text style = {{fontSize:20,fontWeight:'bold'}}> {"\n"} Eu gostaria de trabalhar com: </Text>
            <Text style = {{fontSize:15}}> Arquitetura de Software,Manutenção de Computadores e Contrução de Computadores </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#DEDEDE',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:"column",
      paddingTop:40,
    },
    views:{
      width:300,
      height:170,
      margin:15,
      borderRadius:6,
      alignItems:"center",
    },
    caixa1:{
      backgroundColor:'#FAFAFA',
      shadowColor:'#DEDEDE',
      shadowOpacity:0.2,
      shadowRadius:1.5,
      shadowOffset:{width: 0, height: 2},
      elevation:2,
      paddingTop:60,
      width:300,
      height:250
    }, 
    });