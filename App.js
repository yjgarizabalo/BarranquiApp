import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import bgImage from './assets/img/bg.jpg'
import bqlogo from './assets/img/logo.png'

//--------------------------------------------------------

import InfoInput from './src/componets/InfoInput'


const {width: WIDTH} = Dimensions.get('window')
export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.Container} behavior="padding">
      <ImageBackground source={bgImage} style={styles.Background} >

        <View style={styles.logoContainerView}>
          <Image source={bqlogo} style={styles.Logo}/>
          <Text style={styles.LogoText}>Historia, Cultura y Sociedad</Text>
        </View>

        <InfoInput/>
        <TouchableOpacity style={styles.btnIniciar}>
          <Text style={styles.Text}>Iniciar sesión</Text>
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

constructor() {
  super()
  this.state = {
    ShowPass: true,
    press: false
  }
 }

*/