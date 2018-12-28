import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import bgImage from './assets/img/bg.jpg';
import bqlogo from './assets/img/logo.png';


//-----------------------------------------------------------------//
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const {width: WIDTH} = Dimensions.get('window')

export default class App extends React.Component {
  constructor() {
     super()
     this.state = {
       ShowPass: true,
       press: false
     }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.Container} behavior="padding">
      <ImageBackground source={bgImage} style={styles.Background} >

        <View style={styles.logoContainerView}>
          <Image source={bqlogo} style={styles.Logo}/>
          <Text style={styles.LogoText}>Historia, Cultura y Sociedad</Text>
        </View>

        <View style={styles.InputContainer}>
          <Ionicons name='ios-person' size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inpuntIcon}/>
          <TextInput 
          style={styles.Input} 
          placeholder={'Usuario o Email'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
          autoCorrect={false}
          autoFocus 
        />
        </View>

        <View style={styles.InputContainer}>
        <Ionicons name='ios-lock' size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inpuntIcon}/>
          <TextInput style={styles.Input} 
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent' />
        </View>

        <TouchableOpacity style={styles.btnIniciar}>
          <Text style={styles.Text}>Iniciar seccion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegistro}>
          <Text style={styles.Text}>Registrar</Text>
        </TouchableOpacity>
        
        </ImageBackground>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
    Container: {
    flex: 1,
  },

  Background: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoContainerView: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 50
  },

  Logo: {
    width: 150,
    height: 30,
  },

  LogoText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    marginTop: 5,
    opacity: 0.8,
  },

  InputContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },

  Input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 15,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },


  btnIniciar: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 15,
    backgroundColor: '#354962',
    justifyContent: 'center',
    marginTop: 20
  },

  btnRegistro: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 15,
    backgroundColor: '#354962',
    justifyContent: 'center',
    marginTop: 5
  },

  Text: {
    color:'rgba(255, 255, 255, 0.7)',
    fontSize: 15,
    fontWeight: '200',
    textAlign: 'center'
  },

  inpuntIcon:{
    position: 'absolute',
    top: 7,
    left: 38
  },


});

/* 


<Ionicons name='ios-person' size={28} color='rgba(255, 255, 255, 0.7)' style={styles.inputIcon} /> 

<TouchableOpacity style={stelys.btneyes}>
<Icon name={'ios-eye-outline'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
</TouchableOpacity>

  inpuntIcon:{
    position: 'absolute',
    top: 15,
    left: 40   
  },



btneyes {
  position: 'absolute',
  top: 8,
  left: 37 

}

*/