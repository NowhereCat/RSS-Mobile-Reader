import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>

          <Button 
            title="Raspiberry PI"
            onPress={() => {
              navigation.navigate('Raspiberry',{
                content1: 'Hey',
                content2: 'Hello!'
              });
            }}
          />

          <Button 
            title="Linux Ubuntu"
            onPress={() => {
              navigation.navigate('Ubuntu');
            }}
          />

          <Button 
            title="Blender"
            onPress={() => {
              navigation.navigate('Blender');
            }}
          />

        </View>
      )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})