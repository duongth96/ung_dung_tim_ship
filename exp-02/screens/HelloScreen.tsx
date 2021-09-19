import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Image  } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Text, View, sysLang} from '../components/Themed';
import { MeButton } from '../components/MeButton';

export default function HelloScreen() {
    const msgLang = sysLang.getMsg;
    const navigation = useNavigation();

    (()=>{
        
    })();

    return (
        <View style={styles.container}>
            <Image 
            source={require('../assets/images/banner-01.png')}
            style={{
                width:130,
                height:120
            }}/>
            <Text style={{
                paddingTop:20,
                paddingBottom:20
            }}>{msgLang('gioi_thieu')}</Text>
            <View style={{marginBottom:40}}></View>
            <Text style={[styles.title,{
                paddingTop:20,
                paddingBottom:20,
                fontSize:30,
                fontWeight:'normal'
            }]}>{msgLang('toi_la')}</Text>
            <View
                style={{
                    flexDirection:'row',
                    width:'100%'
                }}>
                <MeButton 
                    onPress={() => navigation.navigate('Modal')}
                    title={msgLang('shipper')}
                    style={{
                        backgroundColor:'orange',
                        height:60,
                        flex:1
                    }}/>
                <View style={{
                    padding:5
                }}></View>
                <MeButton
                    onPress={() => navigation.navigate('Modal')}
                    title={msgLang('tim_shipper')}
                    style={{
                        backgroundColor:'yellow',
                        height:60,
                        flex:1
                    }}/>
            </View>
            <Text style={{
                paddingTop:50,
                paddingBottom:20
            }}>{msgLang('moi_dang_ky')}</Text>

            <View
                style={{
                    flexDirection:'row',
                    width:'100%',
                }}>
                <MeButton
                    title={msgLang('facebook')}
                    style={{
                        backgroundColor:'rgb(36, 52, 183)',
                        flex:1
                    }}/>
                <View style={{
                    padding:5
                }}></View>
                <MeButton
                    title={msgLang('dang_ky')}
                    style={{
                        backgroundColor:'white',
                        flex:1
                    }}/>
            </View>


            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:16
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
