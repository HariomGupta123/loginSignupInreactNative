import MyBotton from '@/components/MyBotton'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'

const signup = () => {
const [formData,setFormData]=useState({
  Name:"",
  Email:"",

  password:"",
  rePassword:""

})
  const router=useRouter()
  const [error,setError]=useState('');
  const handleInputChange = (name: any, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onRegister=()=>{
    const {Name,Email,password,rePassword}=formData
    if( password !== rePassword){
      setError('password and rePassword should be same');
      return ;

    }
    
    router.navigate('/login')
    console.log(formData)

  }
  return (
    <View>
      <Image
        source={require('@/assets/images/green.jpg')}
        style={{ width: "100%", height: 300, backgroundColor: "red" }}
        resizeMode="cover"
      />
      
        <View style={{ padding: 20, gap: 20 }}>
          <TextInput
            placeholder='Enter you Name'
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
            value={formData.Name}
          onChangeText={(value) => handleInputChange("Name", value)}
          />
          <TextInput
            placeholder='Enter you Email'
            style={{
              borderWidth: 1,
              height: 50,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          value={formData.Email}
          onChangeText={(value) => handleInputChange('Email', value)}
          />
        <TextInput
          placeholder='Enter you  Password'
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          
        />
        <TextInput
          placeholder=' Re Enter Your Password'
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          value={formData.rePassword}
                    onChangeText={(value) => handleInputChange('rePassword', value)}

        />
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
          <MyBotton title={"Register"} onPress={onRegister}/>
     
      </View>
    </View>
  )
}

export default signup
