import { Dimensions, Image, StyleSheet } from 'react-native';
//import LottieView from 'lottie-react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button } from "react-native-elements";
import { useAssets } from 'expo-asset';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import ViewWithLoading from  "../../activity-3/components/ViewWithLoading"

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [loading, setLoading] = useState<boolean>(true);
  const[email, setEmail]=useState<string>("");
  const[password, setPassword]=useState<string>("");
  const[retypepw, setReTypePW]=useState<string>("");
  const[firstname, setFirstName]=useState<string>("");
  const[lastname, setLastName]=useState<string>("");
  const[address, setAddress]=useState<string>("");
  const[birthday, setBirthday]=useState<string>("");
  const[mobilenumber, setMobileNumber]=useState<string>("");

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

        <View style={styles.titleContainer}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: '#fde2e4',
          }}>
          Create an Account
          </Text>
        </View>

        <View style={{
          flex: 0,
          justifyContent: 'center',
          paddingHorizontal: 20,
          backgroundColor: '#0a191e',
        }}>

        <TextInput
        label="First Name"
        value={firstname}
        autoComplete={false}
        style={{marginBottom: 5, marginTop: 10}}
        onChangeText={(text: string) => {
          setFirstName(text);
        }}
        />

        <TextInput
        label="Last Name"
        value={lastname}
        autoComplete={false}
        style={{marginBottom: 5}}
        onChangeText={(text: string) => {
          setLastName(text);
        }}
        />
        <TextInput
        label="Birthday"
        value={birthday}
        autoComplete={false}
        style={{marginBottom: 5}}
        onChangeText={(text: string) => {
          setBirthday(text);
        }}
        />
        <TextInput
        label="Address"
        value={address}
        autoComplete={false}
        style={{marginBottom: 5}}
        onChangeText={(text: string) => {
          setAddress(text);
        }}
        />
        <TextInput
        label="Mobile Number"
        value={mobilenumber}
        autoComplete={false}
        style={{marginBottom: 5}}
        onChangeText={(text: string) => {
          setMobileNumber(text);
        }}
        />
        <TextInput
        label="E-mail Address"
        value={email}
        autoComplete={false}
        style={{marginBottom: 5}}
        onChangeText={(text: string) => {
          setEmail(text);
        }}
        />
        <TextInput
        label="Password"
        value={password}
        autoComplete={false}
        secureTextEntry={true}
        style={{marginBottom: 5}}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
        />
        <TextInput
        label="Re-type Password"
        value={retypepw}
        autoComplete={false}
        secureTextEntry={true}
        style={{marginBottom: 5}}
        onChangeText={(text: string) => {
          setReTypePW(text);
        }}
        />

        </View>

        <View style={styles.PrivacyPolicyContainer}>
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: '#fde2e4',
            marginBottom: 5,
            textDecorationLine: 'underline'
          }}>
          By signing up, you agree to the Terms of Use and Privacy Policy.
          </Text>
          </View>

          <View style={styles.buttonContainer}>

        <Button
                        title={'SUBMIT'}
                        buttonStyle={{
                        backgroundColor: '#b5179e',
                        borderRadius: 30,
                        padding: 20,
                        paddingHorizontal: 40
                    }}
                    titleStyle={{
                        color: '#ffff',
                        fontFamily: 'poppins-bold',
                    }}
          />
        </View >
        

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
  titleContainer:{
    flex: 0.5, 
    borderWidth: 0, 
    alignItems: 'center', 
    backgroundColor: '#0a191e',
    marginTop: 20,
  },
  buttonContainer:{
    flex: 0, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:'#0a191e',
  },
  PrivacyPolicyContainer:{
    flex: 0, 
    borderWidth: 0, 
    alignItems: 'center', 
    backgroundColor: '#0a191e'
  }
})