import React, { Component } from 'react';
import { View, Text, Button,ScrollView, StyleSheet,} from 'react-native';

export default class Home extends React.Component {
    render() {
        const { onLogout } =  this.props
        return (
        <ScrollView>
            <View style={styles.container} >
            <Text style={{ textAlign: 'center' }} >Welcome! </Text>
                <Button
                onPress={onLogout}
                title="Logout"
                />
             </View>
        </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 150
    }
})