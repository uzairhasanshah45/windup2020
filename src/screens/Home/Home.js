import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import { styles } from "./style";
import LottieView from 'lottie-react-native';
// import AsyncStorage from '@react-native-community/async-storage'


export default function Home(props) {

  const renderButtons = (name) => {

    return(
      <>
        <TouchableOpacity style={styles.buttonView} onPress={() => props.navigation.navigate(name)}>
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      </>
    )
  }

  return(
    <View style={styles.mainView}>
      {renderButtons('Timer')}
      {renderButtons('Goals')}
      {renderButtons('Flashback')}
      {renderButtons('Fireworks')}

    </View>
  )
}
