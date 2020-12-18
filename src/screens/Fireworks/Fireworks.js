import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

export default Fireworks = () => {

    const videoPlayer = useRef(null);
    const [IsLoading, setIsLoading] = useState(false)
  
    return (
      <View style={{flex: 1}}>

              {/* <Video source={require('../../assets/Dubai New Year Fireworks - Burj Khalifa 2016 - TinyJuke.com.mp4')} // Can be a URL or a local file.
                ref={videoPlayer}                                      // Store reference
                onBuffer={() => setIsLoading(true)}  
                onReadyForDisplay={() => setIsLoading(false)}              // Callback when remote video is buffering
                onProgress={() => setIsLoading(false)}
                // onError={(error) => {}}               // Callback when video cannot be loaded
                style={styles.mediaPlayer}
                fullscreen={true} 
                controls={true}
                resizeMode={"contain"}
                useTextureView={true}
            /> */}

        <WebView
          // style={ {  marginTop: (Platform.OS == 'ios') ? 20 : 0,} }
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: 'https://youtu.be/rdJZzBS7zQE' }}
        />
      </View>
    );
  };
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    toolbar: {
      marginTop: 30,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },
    mediaPlayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'black',
      justifyContent: 'center',
    },
  });

