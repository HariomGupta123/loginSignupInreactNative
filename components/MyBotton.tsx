import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const MyBotton = ({title,onPress}) => {
  return (
    <View>
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={.7}
        style={{
            
            backgroundColor:"orange",
            paddingHorizontal:40,
            paddingVertical:10,
            borderRadius:8,
            alignItems:"center"
            
        }}
        >
            <Text style={{
                fontSize:16,
                color:"white",
                fontWeight:"bold"
            }}>
                 {title}
            </Text>
           
        </TouchableOpacity>
      
    </View>
  )
}

export default MyBotton
