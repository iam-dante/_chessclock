import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {FontStyle, Font} from '../assets/fonts';
import {CancelIcon, QueeenIcon} from '../assets/icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {WheelPicker} from 'react-native-wheel-picker-android';
import CheckBox from '@react-native-community/checkbox';

export default function SetTime({navigation}: {navigation: any}) {
  function genList(n: number) {
    const number = [...Array(n).keys()];
    return number.map(x => x.toString());
}
const [modalVisible, setModalVisible] = React.useState({
  player1: false,
  player2: false,
});

const [name, onChangeName] = React.useState("")
const [select, setSelect] = React.useState({
  player1: {hour: 0, minutes: 0, seconds: 0},
  player2: {hour: 0, minutes: 0, seconds: 0},
});
const [isSelected, setSelection] = React.useState(false);

  const storeData = async (value: object) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`${name}`, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
//   const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem(`${name}`);
//       if (value !== null) {
//         console.log(value)
//       }
//     } catch (e) {
//       // error reading value
//     }
//   };

//   getData()


  var _player = () => {
    if (isSelected) {
      return select.player1;
    } else {
      return select.player2;
    }
  };
  var ply = _player();

  

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        position: 'relative',
      }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible.player1}
        onRequestClose={() => {
          setModalVisible(pv => ({...pv, player1: false}));
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}>
          <View
            style={{
              width: '95%',
              height: 300,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}>
              <Text
                style={{
                  color: 'black',
                  ...FontStyle.meduim,
                  letterSpacing: 2,
                }}>
                HOURS
              </Text>
              <Text
                style={{
                  color: 'black',
                  ...FontStyle.meduim,

                  letterSpacing: 2,
                }}>
                MINUTES
              </Text>
              <Text
                style={{
                  color: 'black',
                  ...FontStyle.meduim,
                  letterSpacing: 2,
                }}>
                SECONDS
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 35,
              }}>
              <WheelPicker
                isCyclic
                selectedItem={14}
                selectedItemTextSize={18}
                itemTextFontFamily="DMSans-Regular"
                selectedItemTextFontFamily="DMSans-Bold"
                indicatorWidth={4}
                style={{width: 100}}
                data={genList(24)}
                onItemSelected={selectedItem =>
                  setSelect(pv => ({
                    ...pv,
                    player1: {...pv.player1, hour: selectedItem},
                  }))
                }
              />

              <WheelPicker
                isCyclic
                selectedItemTextSize={18}
                selectedItem={select.player1.minutes}
                indicatorWidth={4}
                itemTextFontFamily="DMSans-Regular"
                onItemSelected={selectedItem =>
                  setSelect(pv => ({
                    ...pv,
                    player1: {...pv.player1, minutes: selectedItem},
                  }))
                }
                selectedItemTextFontFamily="DMSans-Bold"
                style={{width: 100}}
                data={genList(60)}
              />

              <WheelPicker
                isCyclic
                selectedItemTextSize={18}
                selectedItem={select.player1.seconds}
                indicatorWidth={4}
                onItemSelected={selectedItem =>
                  setSelect(pv => ({
                    ...pv,
                    player1: {...pv.player1, seconds: selectedItem},
                  }))
                }
                itemTextFontFamily="DMSans-Regular"
                selectedItemTextFontFamily="DMSans-Bold"
                style={{width: 100}}
                data={genList(60)}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  width: 120,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    setModalVisible(pv => ({...pv, player1: false}))
                  }>
                  <Text
                    style={{
                      color: 'blue',
                      ...FontStyle.bold,
                      letterSpacing: 2,
                    }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible.player2}
        onRequestClose={() => {
          setModalVisible(pv => ({...pv, player2: false}));
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}>
          <View
            style={{
              width: '95%',
              height: 300,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}>
              <Text
                style={{
                  color: 'black',
                  ...FontStyle.meduim,
                  letterSpacing: 2,
                }}>
                HOURS
              </Text>
              <Text
                style={{
                  color: 'black',
                  ...FontStyle.meduim,

                  letterSpacing: 2,
                }}>
                MINUTES
              </Text>
              <Text
                style={{
                  color: 'black',
                  ...FontStyle.meduim,
                  letterSpacing: 2,
                }}>
                SECONDS
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 35,
              }}>
              <WheelPicker
                isCyclic
                selectedItemTextSize={18}
                itemTextFontFamily="DMSans-Regular"
                selectedItemTextFontFamily="DMSans-Bold"
                // indicatorColor="yellow"
                indicatorWidth={4}
                style={{width: 100}}
                data={genList(24)}
                onItemSelected={selectedItem =>
                  setSelect(pv => ({
                    ...pv,
                    player2: {...pv.player2, hour: selectedItem},
                  }))
                }
              />
              <WheelPicker
                isCyclic
                selectedItemTextSize={18}
                indicatorWidth={4}
                itemTextFontFamily="DMSans-Regular"
                onItemSelected={selectedItem =>
                  setSelect(pv => ({
                    ...pv,
                    player2: {...pv.player2, minutes: selectedItem},
                  }))
                }
                selectedItemTextFontFamily="DMSans-Bold"
                style={{width: 100}}
                data={genList(60)}
              />
              <WheelPicker
                isCyclic
                selectedItemTextSize={18}
                indicatorWidth={4}
                onItemSelected={selectedItem =>
                  setSelect(pv => ({
                    ...pv,
                    player2: {...pv.player2, seconds: selectedItem},
                  }))
                }
                itemTextFontFamily="DMSans-Regular"
                selectedItemTextFontFamily="DMSans-Bold"
                style={{width: 100}}
                data={genList(60)}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingHorizontal: 20,
              }}>
              <View
                style={{
                  width: 120,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    setModalVisible(pv => ({...pv, player2: false}))
                  }>
                  <Text
                    style={{
                      color: 'black',
                      ...FontStyle.bold,
                      letterSpacing: 2,
                    }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <CancelIcon
        style={{position: 'absolute', right: 28, top: 28}}
        onPress={() => navigation.goBack()}
      />
      <View style={{marginTop: '60%'}}>
        <Text
          style={{
            fontSize: 30,
            ...FontStyle.regular,
            letterSpacing: 2,
            color: 'black',
          }}>
          NAME
        </Text>
        <TextInput
          onChangeText={onChangeName}
          placeholder="Game Name"
          value={name}
          style={{
            borderColor: '#CFCDCD',
            height: 62,
            borderRadius: 4,
            borderWidth: 1,
            marginTop: 10,
            color:"black",
            paddingHorizontal: 12,
            fontSize: 22,
            ...FontStyle.regular,
          }}
        />
      </View>

      <View style={{marginTop: '15%'}}>
        <Text
          style={{
            fontSize: 30,
            ...FontStyle.regular,
            letterSpacing: 2,
            color: 'black',
          }}>
          TIME
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            //   paddingHorizontal: 5,
            marginTop: 12,
          }}>
          <Text style={{...Font.displayStyle, letterSpacing: 2}}>
            1ST PLAYER
          </Text>
          <Text style={{...Font.displayStyle, letterSpacing: 2}}>
            2ND PLAYER
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            position: 'relative',
            marginTop: 12,
          }}>
          <TouchableOpacity
            style={{
              height: 80,
              width: '40%',
              backgroundColor: '#F5F5F5',
              justifyContent: 'center',
              borderRadius: 4,
              alignItems: 'center',
            }}
            onPress={() => {
              // setSelect(pv => ({
              //   ...pv,
              //   // player1: {hour: 0, minutes: 0, seconds: 0},
              // }));
              setModalVisible(pv => ({...pv, player1: true}));
            }}>
            <Text style={{fontSize: 28, ...FontStyle.regular, color: 'black'}}>
              {Number(select.player1.hour) * 60 + select.player1.minutes < 10
                ? '0' +
                  (Number(select.player1.hour) * 60 + select.player1.minutes)
                : Number(select.player1.hour) * 60 + select.player1.minutes}
              :
              {Number(select.player1.seconds) < 10
                ? '0' + select.player1.seconds
                : select.player1.seconds}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              position: 'relative',
              height: 80,
              // backgroundColor: 'yellow',
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                color: 'black',
                bottom: 0,
                position: 'absolute',
              }}>
              VS
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 80,
              width: '40%',
              borderRadius: 4,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setModalVisible(pv => ({...pv, player2: true}))}>
            <Text
              style={{fontSize: 28, color: '#FFFFFF', ...FontStyle.regular}}>
              {Number(ply.hour) * 60 + ply.minutes < 10
                ? '0' + (Number(ply.hour) * 60 + ply.minutes)
                : Number(ply.hour) * 60 + ply.minutes}
              :{Number(ply.seconds) < 10 ? '0' + ply.seconds : ply.seconds}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <Text
            style={{
              fontSize: 18,
              ...FontStyle.regular,
              letterSpacing: 4,
              color: 'black',
            }}>
            SAME TIME FOR PLAYER 2
          </Text>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={{
              height: 20,
              width: 20,
              borderRadius: 2,

              marginLeft: '12%',
            }}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          height: 70,
          width: '100%',
          backgroundColor: 'black',
          marginTop: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          flexDirection: 'row',
        }}
        onPress={()=> {
            storeData({
              name: name,
              players: select,
            });
            navigation.goBack();
        }}
        >
        <QueeenIcon style={{marginRight: 12}} />
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            ...FontStyle.regular,
            letterSpacing: 2,
          }}>
          SAVE
        </Text>
      </TouchableOpacity>
    </View>
  );
}
