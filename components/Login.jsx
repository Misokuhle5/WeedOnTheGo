import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

  const router=useRouter();
  return (
    <View>
      <Image source={require('./../assets/images/weedCover.jpg')}
      style={{
        width: '100%',
        height:520
      }}
      />

      <View style={styles.container}>
        <Text style={{
        fontSize:30,
        fontFamily:'outfit-bold',
        textAlign:'center',
        marginTop:10
        }}>Weed On The Go!</Text>

        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize:17,
          textAlign: 'center',
          color:Colors.GRAY,
          marginTop:20
        }}
        >Wherever you roam, weed's your home!</Text>

        <TouchableOpacity style={styles.button}
         onPress={()=>router.push('auth/sign-in')}
        >
          <Text style={{color:Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize:17
          }}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:Colors.WHITE,
    marginTop:-20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:'100%',
    padding:25
},
 button:{
 padding:15,
 backgroundColor:Colors.PRIMARY,
 borderRadius:99,
 marginTop: '20%'
 }
})