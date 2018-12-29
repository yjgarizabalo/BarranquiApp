'use strict'

import React from 'react'
import {StyleSheet ,Dimensions, View} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

const {width: WIDTH} = Dimensions.get('window')

function InfoInput() {
    return(
      <View style={styles.InputContainer}>
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
          underlineColorAndroid='transparent' 
          />
        </View>

      </View>
    )   
}

const styles = StyleSheet.create({
    InputContainer: {
       flexDirection: 'column',
       marginTop: 10,
      },

      InputTex: {
        
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

      inpuntIcon:{
        position: 'absolute',
        top: 7,
        left: 38
      },
    
});


export default InfoInput 