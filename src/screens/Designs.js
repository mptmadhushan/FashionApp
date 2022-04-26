/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Star from 'react-native-star-view';
import _styles from '../constants/styling';
import Button from '../components/Button';
import SelectDropdown from 'react-native-select-dropdown';
const Designers = require('../constants/designer.json');
import axios from 'axios';
import * as ImagePicker from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({navigation}) {
  useEffect(() => {
    getUserToken();
  }, []);

  const [userData, setUser] = useState();

  let result = Designers.map(a => a.location);
  const getUserToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData');
      if (value !== null) {
        console.log('tag', value);
        // const newVal = JSON.stringify(value);
        setUser(value);
        console.log('sate', userData);
        // After restoring token, we may need to validate it
        return value;
      }
    } catch (e) {
      console.log('Error!!!!! (Handle me properly) -> ', e);
    }
  };
  let unique = [...new Set(result)];
  const [imageBase, setImage] = useState('');
  const [resImage, setResImage] = useState('');
  const [Designs, setDesigns] = useState('');
  const event = ['interview', 'work', 'general', 'wedding', 'party'];
  const dress_type = ['casual', 'work', 'normal', 'kandyan', 'party', 'casual'];
  const article_type = [
    'full dress',
    'shirt',
    'trouser',
    'shorts',
    'saree',
    'frock',
    'blouse',
  ];
  const MostIt = [
    {
      name: 'Obie Ankunding',
      des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',
      image: require('../assets/3.jpg'),
      rating: '3219.20',
    },
    {
      name: 'Granville Ferry',
      des: 'Labore occaecat ex ex eu laborum.',
      image: require('../assets/6.jpg'),
      rating: '4000.21',
    },
    {
      name: 'Karine Wilfredo',
      des: 'Fugiat ex in eiusmod sunt.',
      image: require('../assets/5.jpg'),
      rating: '2403.00',
    },
  ];
  const handleSubmit = () => {
    const reqData = {
      gender: 'male',
      event: 'work',
      dress_type: 'formal',
      article_type: 'full dress',
      height: 160,
      hip_size: 90,
      img_url: 'data:image/jpeg;base64,' + imageBase,
    };
    // console.log('🚀 ~ f reqData', reqData);
    axios
      .post('https://fsrc1.herokuapp.com/v1/getSimilarDesigns', reqData)
      .then(res => {
        console.log('hhe 🚀', res.data);
        setResImage(res.data.payload);
        setDesigns(MostIt);
      });
  };
  // const launchImageLibrary = () => {
  //   let options = {
  //     maxHeight: 250,
  //     maxWidth: 350,
  //     includeBase64: true, //add this in the option to include base64 value in the response
  //   };
  //   ImagePicker.showImagePicker(options, response => {
  //     const base64Value = response.data;
  //     console.log('base64Value', base64Value);
  //   });
  // };
  const captureTradeLicenseImage = () => {
    let options = {
      maxHeight: 250,
      maxWidth: 350,
      includeBase64: true, //add this in the option to include base64 value in the response
    };
    ImagePicker.launchImageLibrary(options, response => {
      setImage(response.assets[0].base64);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
    });
  };
  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        includeBase64: true, //add this in the option to include base64 value in the response
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response.assets[0].uri);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log('response-->', response);

        // let formData = new FormData();
        // formData.append('listFile', {
        //   uri: response.assets[0].uri,
        //   type: 'image/jpg',
        //   name: 'image.jpg',
        // });
        // fetch(`{BASE_URL}`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        //   body: formData,
        // })
        //   .then(response => response.json())
        //   .then(response => {
        //     console.log('response 🔥', response.flag);
        //     console.log(response);
        //     // storeData(response);
        //   })
        //   .catch(err => console.error(err));
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={[_styles.rowFlexAround, styles.header]}>
          <Icon name="grain" size={40} color={COLORS.black} />
          <Text style={styles.headerText}>Fashion App</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Measurements')}>
            <Icon name="camera-party-mode" size={40} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        <View style={_styles.centeredView}>
          <Button text="Designs" onPress={() => handleSubmit()} />
        </View>

        <View style={_styles.centeredView}>
          <View style={_styles.rowFlexAround}>
            <SelectDropdown
              data={event}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Events'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              renderDropdownIcon={() => {
                return (
                  <Icon
                    name="arrow-down-drop-circle"
                    size={30}
                    color={COLORS.primary}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
            />
            <SelectDropdown
              data={dress_type}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Dress Type'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              renderDropdownIcon={() => {
                return (
                  <Icon
                    name="arrow-down-drop-circle"
                    size={30}
                    color={COLORS.primary}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
            />
          </View>
          <View style={_styles.rowFlexAround}>
            <Button
              style={styles.dropdown4BtnStyle}
              text="selectimage"
              onPress={() => captureTradeLicenseImage()}
            />
            <SelectDropdown
              data={article_type}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Article Type'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              renderDropdownIcon={() => {
                return (
                  <Icon
                    name="arrow-down-drop-circle"
                    size={20}
                    color={COLORS.primary}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
            />
          </View>
        </View>
        <View>
          <View style={_styles.centeredView}>
            {resImage ? (
              <FastImage
                style={{
                  width: SIZES.width * 0.9,
                  height: SIZES.height * 0.5,
                  marginTop: 20,
                }}
                source={{
                  uri: resImage[0],
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            ) : null}
            {Designs
              ? Designs.map(item => {
                  return (
                    <View style={_styles.centeredView}>
                      <TouchableOpacity
                        style={styles.cardBg}
                        key={item.name}
                        onPress={() => navigation.navigate('Register')}>
                        <Image
                          source={item.image}
                          resizeMode="cover"
                          style={{
                            width: SIZES.width * 0.2,
                            height: SIZES.width * 0.2,
                            borderRadius: 20,
                          }}
                        />
                        <View style={{width: SIZES.width * 0.6}}>
                          <Text style={styles.name}>{item.name}</Text>
                          <Text style={styles.des}>Rating : {item.rating}</Text>
                          <Text style={styles.des} numberOfLines={2}>
                            {item.des}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}} />

      {userData ? (
        <View style={_styles.rowFlexAround}>
          <Text style={styles.detail}>Height:{userData.userHeight} inches</Text>
          <Text style={styles.detail}>Hip: {userData.userHip} inches</Text>
          <Text style={styles.detail}>Skin: {userData.userSkin}</Text>
        </View>
      ) : null}
      <View style={{marginTop: 10}} />

      <View style={_styles.rowFlexAround}>
        <Text style={styles.detail}>
          Updated on: Sat Sep 19 2020 13:41:14 GMT+0530
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'flex-start',
  },
  starStyle: {
    width: 50,
    height: 10,
    marginBottom: 20,
  },
  cardBg: {
    display: 'flex',
    height: SIZES.height * 0.18,
    margin: 10,
    width: SIZES.width * 0.9,
    justifyContent: 'space-between',
    alignContent: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    // alignItems: 'flex-start',
    borderRadius: 30,
    padding: 20,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 15,
  },
  banner: {
    height: SIZES.height * 0.25,
    margin: 10,
    width: SIZES.width * 0.85,
    justifyContent: 'center',
    borderRadius: 60,
    alignContent: 'center',
    backgroundColor: COLORS.black,
    alignItems: 'center',
  },
  search: {
    height: 40,
    margin: 10,
    width: SIZES.width * 0.85,
    justifyContent: 'center',
    borderRadius: 20,
    alignContent: 'flex-start',
    backgroundColor: '#E8EAE2',
    alignItems: 'flex-start',
    paddingLeft: 35,
  },
  header: {
    height: 40,
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    // width: '100%',
    marginLeft: 50,
  },
  dis: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
    // width: '100%',
    marginLeft: 50,
  },
  title3: {
    color: COLORS.black,
    fontWeight: 'bold',
    padding: 5,
    paddingTop: 20,
    fontSize: 20,
    textAlign: 'left',
  },
  des: {
    color: COLORS.darkgray,
    fontSize: 15,
    marginLeft: 50,
    textAlign: 'left',
  },
  detail: {
    color: COLORS.primary,
    fontSize: 15,
    // width: '100%',
    textAlign: 'left',
  },
  name: {
    color: COLORS.black,
    fontSize: 15,
    marginLeft: 50,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  price: {
    color: COLORS.darkgray,
    fontSize: 15,
    marginLeft: 10,
    width: '100%',
    textAlign: 'left',
  },
  headerText: {
    fontSize: 20,
    width: SIZES.width * 0.6,
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    width: SIZES.width,
    height: SIZES.height * 0.86,
    justifyContent: 'flex-start',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header3: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#000'},
  viewContainer: {flex: 1, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
  },

  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {backgroundColor: '#444'},
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: '40%',
    margin: 10,
    height: 40,
    backgroundColor: COLORS.black,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 15,
  },
  dropdown4BtnTxtStyle: {color: '#fff', textAlign: 'left', fontSize: 14},
  dropdown4DropdownStyle: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 15,
  },
  dropdown4RowStyle: {
    backgroundColor: '#EFEFEF',
    // borderBottomColor: '#f4a',
  },
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
});
