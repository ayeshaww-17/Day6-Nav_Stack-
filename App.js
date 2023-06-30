import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useState } from 'react';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 2000)
  },
    []);
  return (
    <View>
      <Text style={styles.splash}>Splash Screen</Text>
      
    </View>
  )
}
const Home = () => {


  return (
    <View>
      <Text style={styles.splash}>Welcome to Home Screen</Text>
    </View>
  )
}
const Login = (props) => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  const handlename = (text) => {
    setName(text)
  }
  const handlepassword = (text) => {
    setPassword(text)
  }
  return (
    <ScrollView><SafeAreaView style={styles.background}>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>LogIn</Text>
        <TextInput
          onChangeText={handlename}
          placeholder='Name'
          style={styles.input_Field}
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={handlepassword}
          placeholder='Password'
          style={styles.input_Field}
        />
        <Text style={styles.forget}>Forget Password</Text>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
        >
          <Text style={styles.text_login}>LogIn</Text>


        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}
export default AppNavigator
const styles = StyleSheet.create({

  title: {
    marginTop: 100,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000',
  },
  input_Field: {
    padding: 10,
    borderWidth: 0.8,
    fontSize: 15,
    marginTop: 30,
    borderRadius: 20,
  },
  forget: {
    marginTop: 10,
    textAlign: 'right',
    color: 'blue',
    fontSize: 15,
  },

  text_login: {
    backgroundColor: '#000',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
    fontSize: 18,
  },
  splash:{
   textAlign:'center',
   fontSize:30,
   padding:100,
  },
  background: {
    //backgroundColor:"#F9ECEC"
  }
});
