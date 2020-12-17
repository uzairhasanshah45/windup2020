import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native';
import welcome from '../../assets/animations/40749-2020-2021.json';
import { styles } from "./style"; 
import {colors} from '../../config';
// import AsyncStorage from '@react-native-community/async-storage'


export default StartScreen = (props) => {

    const backgroundAnimation = () => {
        return(
          <View style={styles.container}>
            <LottieView
              source={welcome}
              autoPlay
              loop
              style={styles.loader}
            />
          </View>
        )
    }

    return (
        <View style={{ backgroundColor: colors.primary, flex: 1}} >
            {/* <Text style={[styles.heading]}>Santa2020</Text> */}
            {backgroundAnimation()}
            <TouchableOpacity style={styles.buttonView} onPress={ () => props.navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Let's start!</Text>
            </TouchableOpacity>
        </View>
    )
}