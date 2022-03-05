import { Dimensions, Image, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Button } from "react-native-elements";
import { useAssets } from 'expo-asset';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
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

        
        
        <View style={{flex: 0.7, backgroundColor: '#0a191e' }}>
        <LottieView
                        source={require('../../activity-3/assets/lottie/50124-user-profile.json')}
                        autoPlay={true}
                        loop={true}
          />
        </View >

        <View style={{flex: 0.2, borderWidth: 0, alignItems: 'center', backgroundColor: '#0a191e'}}>
          <Text style={{
            fontSize: 35,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: '#fde2e4'
          }}>
          W E L C O M E !
          </Text>
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            paddingVertical: 10,
            color: '#fde2e4',
            fontFamily: 'poppins-bold'
          }}>
          This app was created by the BROgrammers Group.
          </Text>
          
        </View>

        <View style={{ 
          flex: 0, 
          borderRadius: 5, 
          marginVertical: 5, 
          padding: 10, 
          backgroundColor: '#0a191e' }}>
          <Text style={{
            fontSize: 20,
            color: '#fde2e4',
            fontFamily: 'poppins-bold'

          }}>u s e r n a m e</Text>
        <View style={{ 
          flex: 0, 
          borderRadius: 20, 
          marginVertical: 0, 
          padding: 20, 
          backgroundColor: "#FFF",
          borderWidth: 3,
           }}>
        </View>  
        </View>  

        <View style={{ 
          flex: 0, 
          borderRadius: 5, 
          marginVertical: 0, 
          padding: 10, 
          backgroundColor: '#0a191e',
           }}>
          <Text style={{
            fontSize: 20,
            color: '#fde2e4',
            fontFamily: 'poppins-bold',
            
          }}>p a s s w o r d</Text>
        <View style={{ 
          flex: 0, 
          borderRadius: 20, 
          marginVertical: 0, 
          padding: 20, 
          backgroundColor: "#FFF",
          borderWidth: 3
          }}>
            <View>
      <Image
        source={{uri : ('https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png')}}
        style={{ width: 20, height: 20, position: 'absolute', top: -9, bottom: 5, left: 240, right: 0, marginHorizontal: 0}}
      />
    </View>
        </View>  
        </View>

        <View style={{
          flex: 0.2, 
          width: '100%', 
          justifyContent: 'center', 
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor:'#0a191e'}}>

        <Button
                        title={'REGISTER'}
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
        <Button
                        title={'SIGN IN'}
                        buttonStyle={{
                        backgroundColor: '#7209b7',
                        borderRadius: 30,
                        padding: 20,
                        paddingHorizontal: 40
                    }}
                    titleStyle={{
                        color: '#ffff',
                        fontFamily: 'poppins-bold'
                    }}
          />
        </View >

        <View style={{flex: 0, borderWidth: 0, alignItems: 'center', backgroundColor: '#0a191e'}}>
          <Text style={{
            fontSize: 13,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: '#fde2e4',
            textDecorationLine: 'underline'
          }}>
          Forgot Password?
          </Text>
          </View>
        
        

      </View>
    </View>
  );
}
