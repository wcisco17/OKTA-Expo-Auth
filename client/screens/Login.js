import React, { Component } from 'react';
import {  ImageBackground, StyleSheet, Text, TouchableOpacity,View, ScrollView, Image } from 'react-native';
import { Button, Avatar } from 'react-native-elements'

export default class Login extends React.Component {
    render() {
      const  { onLogin } = this.props
     return (
       <React.Fragment>
         <ImageBackground
           style={styles.imageBackground}
           >
           <View style={{ paddingLeft: 119, paddingTop: 50 }} >
             <Image
                 source={require('../image/Logo_TV_2015.png')}
                 style={{
                   width: 150,
                   height: 150,
                 }}
                 />
             </View>
           <Text style={styles.loginText}>Sign In for admin access!</Text>
       <View style={{ paddingTop: 120 }} >
               <Button
               title="Log In"
               onPress={onLogin}
               buttonStyle={styles.button}
               />
                 </View>
         </ImageBackground>
       </React.Fragment>
 
     );
   }
 }
 

const styles = StyleSheet.create({
   imageBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: "#FFE4C4"
   },
    button: {
      backgroundColor: "rgba(111, 202, 186, 1)",
      width: 340,
      height: 55,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 13
    },
    loginText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      paddingTop: 60,
      color: 'black'
    }
})
