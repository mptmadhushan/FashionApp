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
export default function Home({navigation}) {
  useEffect(() => {}, []);

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
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
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
          <View style={_styles.rowFlexAround}>
            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Color Combination'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              renderDropdownIcon={() => {
                return <Icon name="grain" size={30} color={COLORS.black} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
            />
            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Dress Combination'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              renderDropdownIcon={() => {
                return <Icon name="grain" size={30} color={COLORS.black} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
            />
          </View>
          <View style={_styles.rowFlexAround}>
            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Location'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              renderDropdownIcon={() => {
                return <Icon name="grain" size={30} color={COLORS.black} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
            />
            <SelectDropdown
              data={countries}
              // defaultValueByIndex={1}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={'Designer Ratings'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown4BtnStyle}
              buttonTextStyle={styles.dropdown4BtnTxtStyle}
              renderDropdownIcon={() => {
                return <Icon name="grain" size={30} color={COLORS.black} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown4DropdownStyle}
              rowStyle={styles.dropdown4RowStyle}
              rowTextStyle={styles.dropdown4RowTxtStyle}
            />
          </View>
        </View>
        <View>
          <ScrollView vertical={true}>
            {MostIt
              ? MostIt.map(item => {
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
                          <Text style={styles.name}>
                            Designer : {item.name}
                          </Text>
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
          </ScrollView>
        </View>
      </View>
      <View style={{marginTop: 10}}></View>

      <View style={_styles.rowFlexAround}>
        <Text style={styles.detail}>Height: 6 inches</Text>
        <Text style={styles.detail}>Hip: 28 inches</Text>
        <Text style={styles.detail}>Skin: White</Text>
      </View>
      <View style={{marginTop: 10}}></View>

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
    height: SIZES.height * 0.85,
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
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown4BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown4DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown4RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown4RowTxtStyle: {color: '#444', textAlign: 'left'},
});
