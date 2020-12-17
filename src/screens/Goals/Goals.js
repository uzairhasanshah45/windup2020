import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput, Dimensions, ScrollView } from 'react-native'
import { styles } from "./style";
// import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from '@react-native-community/async-storage'


const windowWidth = Dimensions.get('window').width 


export default function Goals(props) {

  const [modalView, setModalView] = useState(false)
  const [calanderVisible, setCalanderVisible] = useState(false)
  const [goalName, setGoalName] = useState('')
  const [goalDesc, setGoalDesc] = useState('')
  const [goalDate, setGoalDate] = useState('')
  const [goalInfo, setGoalInfo] = useState('')
  const [updated, setUpdated] = useState(0)


  useEffect(() => {
   getInfo()
  }, [updated])

  const handlePicker = (date) => {
    console.log('date -->', date)
    // setCalanderVisible(false)
  }

  
  const getInfo = async() =>{
    try {
      const user = await AsyncStorage.getItem('userInfo');
      if (user !== null) {
        let data = JSON.parse(user); 
        setGoalInfo(data)
        console.log('data --->', data[0].goalName)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const addInfo = async() =>{

      if((goalName && goalDesc ) == '')
            alert('Invalid Input') 

        try {
              const user = await AsyncStorage.getItem('userInfo');
              if (user !== null) {
                let data = JSON.parse(user); 
                data.push({
                  goalName,
                  goalDesc
                })
                await AsyncStorage.setItem('userInfo',JSON.stringify(data)); 
                setUpdated(updated+1)
                setModalView(false)
              }
              else{
                let obj = [{  
                  goalName,  
                  goalDesc,
                }]
                await AsyncStorage.setItem('userInfo',JSON.stringify(obj)); 
                setUpdated(updated+1)
                setModalView(false)
              }
        } catch (error) {
            alert(error.message)
        }
    } 


  return(
    <View style={styles.mainView}>
        <View style={{flexDirection: 'row', backgroundColor: '#4693FF', width: windowWidth, borderWidth: 1, borderColor: '#289283', position: 'absolute', top: 0, height: 50, justifyContent: 'space-between'}}>
            <TouchableOpacity style={{ marginTop: '2%', marginLeft: '3%'}} onPress={() => props.navigation.goBack()}>
                <BackIcon name="arrow-back" size={30} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: '2%', marginRight: '3%'}} onPress={() => setModalView(true)}>
                <Icon name="plus" size={30} color='white' />
            </TouchableOpacity>
        </View>

        <View>
          {
            goalInfo ? goalInfo.map((item, index) => {
              return(
                  <View key={index} style={{ width: 300, paddingBottom: 10, paddingTop: 10, alignContent: 'center'}}>
                     {/* <View style={{backgroundColor: '#4693FF', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#4693FF', padding: 15, borderRadius: 10}}> */}
                      <TouchableOpacity style={{backgroundColor: '#4693FF', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#4693FF', padding: 15, borderRadius: 10}}>
                        <Text style={{color: "white", fontSize: 22, textAlign: 'left'}}>{item.goalName}</Text>
                        <Text style={{color: "white", fontSize: 22, textAlign: 'right'}}>{item.goalDesc}</Text>
                      </TouchableOpacity>
                      {/* </View> */}
                  </View>
              )
            })
            :
            <Text style={{color: "white"}}>Sorry</Text>
          }
        </View>

        <View>
          <Modal 
          animationType="slide"
          transparent={true}
          visible={modalView}
          onRequestClose={() => setModalView(false)}>
          <View style={[styles.container, styles.modalBackgroundStyle]}>
              <View style={styles.modalView}>
                <View style={{flexDirection: "row", marginTop: '0%'}}>
                  <Text style={{color: 'black', borderBottomWidth: 1, borderBottomColor: 'grey', width: '80%', textAlign: "center", paddingBottom: 10}}>Add Goal</Text>
                </View>
                <View style={{flexDirection: "row", marginTop: '25%'}}>
                  <Text style={styles.elementText}>Name : </Text>
                  <TextInput style={styles.elements} onChangeText ={(text)=> setGoalName(text)}/>
                </View>
                <View style={styles.elementView}>
                  <Text style={styles.elementText}>Desc : </Text>
                  <TextInput style={styles.elements} onChangeText ={(text)=> setGoalDesc(text)}/>
                </View>
                <View style={styles.elementView}>
                  <Text style={styles.elementText}>Date : </Text>
                  <TouchableOpacity onPress={() => setCalanderVisible(true)} style={{marginTop: '5%'}}>
                    <Text style={styles.elements}>goal date</Text>
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={calanderVisible}
                  onConfirm={() => handlePicker()}
                  onCancel={() => setCalanderVisible(false)}
                  mode="date"
                  date={new Date()}
                />
                <TouchableOpacity
                  style={styles.openButton} onPress={() => addInfo()}>
                  <Text style={styles.textStyle}>Update</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
        </View>
    </View>
  )
}
