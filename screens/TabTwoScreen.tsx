import { Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button } from "react-native-elements";
import { useAssets } from 'expo-asset';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import ViewWithLoading from  "../../activity-3/components/ViewWithLoading"

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  const [visible, setVisible] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);
  const[email, setEmail]=useState<string>("");
  const[password, setPassword]=useState<string>("");

  setTimeout (() => {
    setLoading(false);
  },3000);

  return (

    <ViewWithLoading
      loading={loading}
    >
    <View style={styles.container}>
  
      <View style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#0a191e',
        borderRadius: 10,
        borderColor: '#0a191e',
        overflow: 'hidden',
        padding: 10,
        borderWidth: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'column'
      }}>

        
        
        <View style={styles.lottieContainer}>
        <LottieView
                        source={require('../../activity-3/assets/lottie/83255-connect.json')}
                        autoPlay={true}
                        loop={true}
          />
        </View >

        <View style={styles.titleContainer}>
          <Text style={styles.titletextContainer}>
          Log In.
          </Text>
          <Text style={styles.subtitleContainer}>
          Log in or Register to create an account in Crossroads.
          </Text>
        </View>

        <View style={styles.textboxContainer}>
        <TextInput
        label="Email"
        mode={'outlined'}
        value={email}
        autoComplete={false}
        right={<TextInput.Icon name="email" color={"purple"}/>}
        style={{marginBottom: 1}}
        onChangeText={(text: string) => {
          setEmail(text);
        }}
        />
        <TextInput
        label="Password"
        mode={'outlined'}
        value={password}
        autoComplete={false}
        secureTextEntry={!visible}
        style={{marginBottom: 20}}
        right={
        <TextInput.Icon 
        name={visible ? "eye" : "eye-off"}
        onPress={() => {
            setVisible(!visible);
        }}
          color={"purple"}
        />
        }
        onChangeText={(text: string) => {
          setPassword(text);
        }}
        />
        </View>

        <View style={styles.buttonContainer}>

        <Button
          title={'Log In'}
          buttonStyle={{
          backgroundColor: '#b5179e',
          borderRadius: 20,
          padding: 20,
          paddingHorizontal: 40,
          marginRight: 20
        }}
          titleStyle={styles.buttontitleContainer}
          />
        <Button
          title={'Register'}
          buttonStyle={{
          backgroundColor: '#7209b7',
          borderRadius: 20,
          padding: 20,
          paddingHorizontal: 40
        }}
          titleStyle={styles.buttontitleContainer}
          />
        </View >

        <View style={styles.forgotpwContainer}>
          <Text style={styles.forgotpwtextContainer}>
          Forgot Password?
          </Text>
          </View>
      </View>
    </View>
    </ViewWithLoading>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottieContainer:{
    flex: 0.4, 
    backgroundColor: '#0a191e',
    marginTop: 50
  },
  titleContainer:{
    flex: 0.2, 
    borderWidth: 0, 
    marginLeft: 25, 
    backgroundColor: '#0a191e'
  },
  titletextContainer:{
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 0,
    color: '#fde2e4'
  },
  subtitleContainer:{
    fontSize: 17,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#e0aaff',
    fontFamily: 'poppins-bold',
  },
  textboxContainer:{
    flex: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#0a191e'
  },
  buttonContainer:{
    flex: 0.2, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#0a191e',
  },
  buttontitleContainer:{
    color: '#ffff',
    fontFamily: 'poppins-bold',
  },
  forgotpwContainer:{
    flex: 0, 
    borderWidth: 0, 
    alignItems: 'center', 
    backgroundColor: '#0a191e'
  },
  forgotpwtextContainer:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingVertical: 0,
    color: 'skyblue',
    textDecorationLine: 'underline'
  }
})