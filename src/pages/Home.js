import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet,Text,View,Button,TouchableOpacity,RNExitApp} from 'react-native';
import Foto from 'react-native-vector-icons/MaterialCommunityIcons';
Foto.loadFont()
import Sair from 'react-native-vector-icons/Octicons';
Sair.loadFont()
import Perfil from 'react-native-vector-icons/FontAwesome';
import {Video} from './Video';
Perfil.loadFont()

export function Home({navigation}) {
    return (
        <View style = {{ flex:1,alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity style = {styles.caixa1} 
              onPress = {() => navigation.navigate('Perfil')}>
                    <Perfil name = "user" size = {30} color = "#000"></Perfil>
                    <Text style = {{ fontSize:20,fontWeight:'bold'}}>Perfil </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.caixa1} 
                    onPress = {() => navigation.navigate('Video')}>
                    <Foto name = "camera" size = {30} color = "#000"></Foto>
                    <Text style = {{fontSize:20,fontWeight:'bold'}}>Câmera</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.caixa1} 
                    onPress = {() => {RNExitApp.exitApp()}}>
                    <Sair name = "sign-out" size = {30} color = "#000"></Sair>
                    <Text style = {{fontSize:20,fontWeight:'bold'}}>Sair</Text>
                    </TouchableOpacity>
                    </View>
    );
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
      shadowOpacity:0.5,
      shadowRadius:1.5,
      shadowOffset:{width:0,height:2},
      elevation:2,
      paddingTop:60,
      width:270,
      height:180,
      alignItems:"center"
    }
  });