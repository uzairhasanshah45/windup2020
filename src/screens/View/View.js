import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import { WebView } from 'react-native-webview';


export default function Views(props) {

    const { link } = props.route.params
    
    return(
        <View style={{flex: 1}}>
            <WebView source={{ uri: link}} />
        </View>
    )
}




