import React from 'react';
import {View, Text} from 'react-native';
import {AddIcon, BackIcon, ClockIcon, ColorWatch} from '../assets/icons';
import {Font, FontStyle} from '../assets/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings({navigation}: {navigation: any}) {

    const [games, setGames] = React.useState([])

    const fetchAllItems = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);

       console.log(items[0])
        // return items;
      } catch (error) {
        console.log(error, 'problemo');
      }
    };

    fetchAllItems()

  return (
    <View style={{position: 'relative', flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          position: 'relative',
          height: 80,
          paddingHorizontal: 18,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <BackIcon onPress={() => navigation.goBack()} />
          <Text
            style={{
              marginLeft: 12,
              ...Font.displayStyle,
            }}>
            SETTINGS
          </Text>
        </View>
        <ColorWatch style={{position: 'absolute', right: 18}} />
      </View>
      <View style={{flex: 1, paddingHorizontal: 18, paddingTop: 16}}>
        <View
          style={{
            height: 100,
            backgroundColor: '#F5F5F5',
            borderRadius: 6,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 22,
            elevation: 1,
          }}>
          <ClockIcon />
          <View
            style={{
              marginLeft: 18,
              height: 70,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{...Font.displayStyle}}>NAME TOURNAMENT</Text>
            <Text style={{...Font.baseStyle}}>10MS Vs 10MS</Text>
          </View>
        </View>
      </View>

      <AddIcon
        style={{position: 'absolute', bottom: 20, right: 18}}
        onPress={() => navigation.navigate('settime')}
      />
    </View>
  );
}
