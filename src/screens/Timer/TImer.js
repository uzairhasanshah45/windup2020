import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import { styles } from "./style";
import LottieView from 'lottie-react-native';
import clock from '../../assets/animations/lf30_editor_fhy8nwtv.json';


export default function Timer(props) {

    // const [totalSeconds, setTotalSeconds] = useState(parseInt(0))
    const [days, setDays] = useState(0)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [count, setCount] = useState(1)
    // const [showTimer, setShowTimer] = useState(false)

    useEffect(() => {  
        if(count <=1){
            setCount(count+1)
            getInterval()
        }
        else{
            setInterval(() => {
                getInterval()
                console.log('run')
              }, 1000);
        }
        //   return () => clearTimeout(timer);
        // getInterval()
    }, [count])

    const getInterval = () =>{

        var newyr = new Date("January 1, 2021 00:00:00");
        var newyeartime= newyr.getTime();
        var currentTime = new Date();
        var todaytime = currentTime.getTime();
        var timeleft = newyeartime-todaytime;
        var leftdays = timeleft/86400000;
        var lefthr=23 - currentTime.getHours();
        var leftmin= 59 - currentTime.getMinutes();
        var leftsec= 59 - currentTime.getSeconds();

        // if (Math.floor(leftdays) <= -1) {
        //     document.getElementById('scg-nyc-msg').innerHTML="It's New Year Time, Friends!<br/>Happy New Year 2021";
        //     return;
        // } else {
            setDays(Math.floor(leftdays));
            setHour(lefthr);
            setMinute(leftmin);
            setSecond(leftsec);
        // }
        // setTimeout('startTimer()',999);
    }

    const backgroundAnimation = () => {
        return(
          <View style={styles.container}>
            <LottieView
              source={clock}
              autoPlay
              loop
              style={styles.loader}
            />
          </View>
        )
    }

    return(
        <View style={styles.mainView}>
            {backgroundAnimation()}
            <View style={styles.timerView}>
                <View style={styles.timer}>
                    <Text style={styles.digitText}>{days.toString().length == 2 ? days.toString()[0] : 0}</Text>
                    <Text style={styles.digitText}>{days.toString().length == 2 ? days.toString()[1] : days}</Text>
                </View>
                <View style={styles.timer}>
                    {/* HOURS */}
                    <Text style={styles.digitText}>{hour.toString().length == 2 ? hour.toString()[0] : 0}</Text>
                    <Text style={styles.digitText}>{hour.toString().length == 2 ? hour.toString()[1] : hour}</Text>
                </View>
                <View style={styles.timer}>
                    {/* MINUTE */}
                    <Text style={styles.digitText}>{minute.toString().length == 2 ? minute.toString()[0] : 0}</Text>
                    <Text style={styles.digitText}>{minute.toString().length == 2 ? minute.toString()[1] : minute}</Text>
                </View>
                <View style={styles.timer}>
                    {/* SECONDS */}
                    <Text style={styles.digitText}>{second.toString().length == 2 ? second.toString()[0] : 0 }</Text>
                    <Text style={styles.digitText}>{second.toString().length == 2 ? second.toString()[1] : second}</Text>
                </View>
            </View>


            <View style={styles.timerView1}>
                {/* DAYS */}
                <View style={styles.timer1}>
                    <Text style={styles.digitText1}>Days</Text>
                </View>
                <View style={styles.timer1}> 
                    {/* HOURS */}
                    <Text style={styles.digitText1}>Hours</Text>
                </View>
                <View style={styles.timer1}>
                    {/* MINUTE */}
                    <Text style={styles.digitText1}>Min</Text>
                </View>
                <View style={styles.timer1}>
                    {/* SECONDS */}
                    <Text style={styles.digitText1}>Sec</Text>
                </View>
            </View>
        </View>
    )
}




