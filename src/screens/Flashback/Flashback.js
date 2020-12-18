import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from "./style";


export default function Flashback(props) {

    return (
      <ScrollView>
        <View style={styles.mainView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('View', { link : "https://www.theverge.com/2020/1/3/21048891/australia-wildfires-koalas-climate-change-bushfires-deaths-animals-damage"})}>
            <Image source={require('../../assets/images/australiabrushfires.jpg')} style={styles.article}/>
            <Text style={styles.txt}>Australian bushfires</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: '5%'}} onPress={() => props.navigation.navigate('View', { link: 'https://www.undp.org/content/undp/en/home/coronavirus.html'})}>
            <Image source={require('../../assets/images/covid.jpg')} style={styles.article}/>
            <Text style={styles.txt}>COVID-19 pandemic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: '5%'}} onPress={() => props.navigation.navigate('View', { link : 'https://www.bbc.com/news/world-middle-east-53668493'})}>
            <Image source={require('../../assets/images/beirut.jpg')} style={styles.article}/>
            <Text style={styles.txt}>Beirut explosion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: '5%'}} onPress={() => props.navigation.navigate('View', { link : 'https://www.latimes.com/california/story/2020-12-16/black-lives-matter-protests-george-floyd-coronavirus-covid-2020'})}>
            <Image source={require('../../assets/images/blackLives.jpg')} style={styles.article}/>
            <Text style={styles.txt}>Black Lives Matter protests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: '5%'}} onPress={() => props.navigation.navigate('View', { link : 'https://variety.com/2020/film/news/chadwick-boseman-dead-dies-black-panther-1234753232/'})}>
            <Image source={require('../../assets/images/boseman.jpg')} style={styles.article}/>
            <Text style={styles.txt}>Chadwick Boseman's death</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: '5%'}} onPress={() => props.navigation.navigate('View', { link : 'https://www.nbcnews.com/think/opinion/prince-harry-meghan-quit-royal-family-because-they-want-have-ncna1113651'})}>
            <Image source={require('../../assets/images/queenmeghanmarkleprine-harry.jpg')} style={styles.article}/>
            <Text style={styles.txt}>Prince Harry and Meghan Markle quit royal family</Text>
          </TouchableOpacity> 
        </View> 
     </ScrollView>
    );
}