import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Home extends React.Component {
    render() {
        return (
            <View><TouchableOpacity onPress={() => {
                this.props.navigation.navigate("Tracker")
            }}><Text>Live Tracker</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("Meteor")
            }}><Text>Meteor Update</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("Update")
            }}><Text>Update</Text></TouchableOpacity>
            </View>
        )
    }
}