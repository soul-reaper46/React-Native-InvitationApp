import React, { Component } from 'react';
import { Text, View ,StyleSheet, StatusBar, Image } from 'react-native';


export default class App extends React.Component {
   render() {
     return (
       <View style={styles.parent}>
         <StatusBar barStyle='light-content' backgroundColor = 'black'/>
       <View style={styles.child1}>
         <Text style={styles.headingtext}>✨ Invitation ✨</Text>
       </View>
       
       <View style={styles.child2}>
        <View>
          <Text> </Text>
          <Image style={{height:110,width:100}}
            source= {require('./App/Source/logonew.png')}/>
        </View>
       <Text style={[styles.bodytext,{color:'black',fontWeight:"bold",fontSize:22}]}>Bapuji Institute of Engineering </Text>
       <Text style={[styles.bodytext,{color:'black',fontWeight:"bold",fontSize:22}]}> and Technology</Text>
       <Text style={[styles.bodytext,{color:'black',fontWeight:"bold",fontSize:26,paddingVertical:27}]}>App Development Workshop</Text>
       <Image style={{height:190,width:500}}
          source= {require('./App/Source/android.jpg')}/>
          <Text> </Text>
          <Text style={[styles.bodytext,{padding:0,fontStyle:'italic',}]}>" We  cordinally  invite  you to Attend the workshop</Text> 
          <Text style={[styles.bodytext,{padding:0,fontStyle:'italic',}]}> on App Development organised under Insync in</Text>
          <Text style={[styles.bodytext,{padding:0,fontStyle:'italic',}]}> colaboration with Decibles on 22 to 25 Feb " </Text>

          <Text style={[styles.bodytext,{fontSize:20,fontWeight:'bold',color:'green',padding:30}]}> VENUE: Auditorium</Text>
          <Text style={[styles.bodytext,{fontWeight:'bold',fontSize:21}]}> For Registration Visit <Text style={[styles.bodytext,{textTransform:'lowercase',color:'orange'}]}> " http://ADWregister.com"</Text></Text>
          <Text style={[styles.bodytext,{fontWeight:'bold',fontSize:21,padding:20}]}> For more Info Contact: 9535413826 </Text>
          <Text style={[styles.bodytext,{fontSize:20,padding:20,textTransform:'lowercase'}]}> See you soon!</Text>
       </View>
       <View style={styles.child3}>
         <Text style={styles.footertext}> Organised by IS&E Department ❤ </Text>
       </View>
       </View>
      );
    }
  }

 
  const styles = StyleSheet.create({
    parent:{
      flex:1,
      flexDirection:'column',
      alignItems:'stretch',
      margin:2,
      justifyContent:'center'
    },

    child1:{
      flex:1.25,
      alignItems:'center',
      margin:3,
      borderRadius:25,
      borderWidth:3,
      borderColor:'black',
      justifyContent: 'center'
    },

    child2:{
      flex:13,
      alignItems:'center',
      borderRadius:25,
      margin:3,
      borderWidth:3,
      borderColor:'black',
    },

    child3:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },

    headingtext:{
      fontSize: 40,
      color : 'black',
      fontWeight:"bold",
      textTransform:'uppercase'
    },
  
    bodytext: {
      fontSize:17,
      color: 'black',
      alignItems: "center",
      justifyContent:'center',
      textTransform:'uppercase',
      
    },

    footertext: {
      fontSize:25,
      color: 'black',
      fontWeight:'bold',
      padding:15,
      fontStyle: 'italic',
      alignItems:'center',
      justifyContent:'center'
    }

  })