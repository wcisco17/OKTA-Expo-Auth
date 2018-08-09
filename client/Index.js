import React, { Component } from 'react'
import { View } from 'react-native'
import tokenClient from './api/TokenClient'
import { Button, Text, } from 'react-native-elements';
import Login from './screens/Login'
import Home from './screens/Home'


export default class Index extends Component {
      state = {
        authentication: false,
      }

      checkAuthentication = async() => {
        const { authentication } = this.state;
        const authenticated = await tokenClient.isAuthenticated()
        if (authenticated !== authentication) {
          this.setState({ authentication: authenticated })
        }
      }


  async componentDidMount() {
   await this.checkAuthentication()
  }


  logIn = async() => {
    await tokenClient.signInWithRedirect()
    .then((res) => {
      console.log("Success", res)
    })
    .catch((err) => {
      console.log("Error", err)
    })

    this.checkAuthentication()
  }

  logOut = async() => {
    await tokenClient.signOut()
    this.checkAuthentication()
  }

  render() {
    const { authentication } = this.state;
    return (
      <React.Fragment>
        {authentication ?
          <Home 
          onLogout={async () => {this.logOut()}}
          />
         :
         <Login
         onLogin={async () => {this.logIn()}}
         />
         }
      </React.Fragment>
    )
  }
}
