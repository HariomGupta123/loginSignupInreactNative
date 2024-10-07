import MyBotton from '@/components/MyBotton';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, View, TextInput, Text } from 'react-native';

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });


  const [error, setError] = useState('');

  const handleInputChange = (name: any, value: any) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const logedIn = () => {
    const { username, password } = formData;

    if (!username || !password) {
      setError('Both username and password are required');
      return;
    }

    setError('');

    console.log(formData);

    router.navigate('/signup');
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('@/assets/images/green.jpg')}
        style={{ width: "100%", height: 300, backgroundColor: "red" }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 20 }}>
        <TextInput
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }} placeholder="Username"
          value={formData.username}
          onChangeText={(value) => handleInputChange('username', value)}
        />

        <TextInput
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }} 
          placeholder="Password"
          secureTextEntry
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />

        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

        <MyBotton title={"Login"} onPress={logedIn} />
      </View>
    </View>
  );
};

export default Login;
