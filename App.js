import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Foto from 'react-native-vector-icons/MaterialCommunityIcons';
Foto.loadFont()
import Sair from 'react-native-vector-icons/Octicons';
Sair.loadFont()
import Perfil from 'react-native-vector-icons/FontAwesome';
Perfil.loadFont()


export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {[styles.views, styles.caixa1]}>
        <Perfil name = "user" size = {30} color = "#000"> </Perfil>
        <Text>Perfil</Text></View>

      <View style = {[styles.views, styles.caixa2]}>
        <Foto name = "camera" size = {30} color = "#000"> </Foto>
        <Text>Câmera</Text></View>

      <View style = {[styles.views, styles.caixa3]}>
        <Sair name = "sign-out" size = {30} color = "#000"> </Sair>
        <Text>Sair</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views: {
    width: 300,
    height: 170,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },

  caixa1: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    paddingTop: 60,

  },
  caixa2: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    paddingTop: 60,
  },
  caixa3: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    paddingTop: 60,

  },
});
