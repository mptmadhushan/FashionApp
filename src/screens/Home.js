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
const Designer = require('../constants/designer.json');
import * as ImagePicker from 'react-native-image-picker';

export default function Home({navigation}) {
  useEffect(() => {}, []);
  const Designers = [
    {
      name: 'FD08',
      image: require('../assets/2.jpg'),
      rating: '3',
    },
    {
      name: 'FD54',
      image: require('../assets/1.jpg'),
      rating: '4',
    },
    {
      name: 'FD79',
      image: require('../assets/4.jpg'),
      rating: '2',
    },
  ];
  const MostIt = [
    {
      name: 'Obie Ankunding',
      des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',
      image: {
        uri: 'https://storage.googleapis.com/fashion-recommendation-cade6.appspot.com/images_dir/228.jpg?Expires=1651870870&GoogleAccessId=firebase-adminsdk-mnij5%40fashion-recommendation-cade6.iam.gserviceaccount.com&Signature=ey8Afoy3mFrHi%2F7jpVnVcmx7sRZefZ8ePxISYKjUJcOhGvVlHkpyuNVSlxsmNOOQgDhvcsXTOOF0X084rXwjkp4pe4VS3t26QsD3gyjrglff4Rk9nI1Ce3xtXyXhSygmTF%2FhG%2BOwJZZsAB%2B6aw91rQW270Pkd%2BFOe9eY54hFAsfpv%2FEw%2F7EAE5sjdW18An3BRc%2F17leQ44WhS%2FugxvbduposCK3csN8dTIu1lQru0Li4c9iK%2F%2Bd%2BbNFgVq%2Bc4uem70DFENzVm%2FNrGr%2FmUmKQwthro5976TJ1khgBTb3iedcY4L33HQNE%2FT4XD63kkO%2FyZOtWAGFKpQ1u9mDwsKlvbQ%3D%3D',
      },
      rating: '3219.20',
    },
    {
      name: 'Karine Wilfredo',
      des: 'Fugiat ex in eiusmod sunt.',
      image: {
        uri: 'https://storage.googleapis.com/fashion-recommendation-cade6.appspot.com/images_dir/359.jpg?Expires=1651871062&GoogleAccessId=firebase-adminsdk-mnij5%40fashion-recommendation-cade6.iam.gserviceaccount.com&Signature=H85u%2BqHi6hxXqeRqnngSL55VxHgdr7W11Vko%2FqCgMnnCXkl3ydjZay1WYpCGLcIu6S7tRoQI8YGtMfW5yqhaMTRA3kVtHBwhI1ozEjydUQiAh2U5vKhfyGAakpfv1NlNgTnJeW6nemDEtzwqtBQGr0w3h0QNwoD08KTN3DxrYzsRK4RgmuKDTYICfI9cVepBE9AYn24ZEaVEYmNWWNpsrGeV3Cxv3%2FOGOJsdBMZUe92Tyrtw2qFvJ9cEHeg7RKaSqmgV8i5i80kOtfPDvDGy5IKU97k5rM%2BZwq252HMd04BsOhwDXVaXqitFmAK0%2Bh3xZp4w2Mk9tJ8%2Fs37v9QSkLw%3D%3D',
      },
      rating: '2403.00',
    },
    {
      name: 'Granville Ferry',
      des: 'Labore occaecat ex ex eu laborum.',
      image: {
        uri: 'https://storage.googleapis.com/fashion-recommendation-cade6.appspot.com/images_dir/471.jpg?Expires=1651870871&GoogleAccessId=firebase-adminsdk-mnij5%40fashion-recommendation-cade6.iam.gserviceaccount.com&Signature=LYPJJ%2Bbn8JI0%2FcyUfX6vAp6jImUWe16Ch1lofs4w4ytL6qLn8JwifqMD07F2iVsDZdb7maP6RVwC10eaKfJGhNq4GqEEna%2F3I2dU76AiyZhn8VrvG9GyfSB4OlHAKEgAqjH9TShk%2BONVjDA7HDRKnPe0iuoKqTHQ5kHcW8%2Ba1s5U6QwvhfLCRgiTclfL2njZcrIBajRTNyx5asHBjy3JJK7qxJ1wvSy0CkAkIajkPG4NGpd7cchQcHNkDL%2BRISYcA03acIwDPLoRbcBAqQEP9uRLpnBAYtejHT2XmFwvxaEC2dfVHFCkEIkki6pfvevCgB4QsT%2F34o%2FIX92s%2FDh0Cg%3D%3D',
      },
      rating: '4000.21',
    },
  ];
  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
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
        let formData = new FormData();
        formData.append('listFile', {
          uri: response.assets[0].uri,
          type: 'image/jpg',
          name: 'image.jpg',
        });
        fetch(`{BASE_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        })
          .then(response => response.json())
          .then(response => {
            console.log('response 🔥', response.flag);
            console.log(response);
            // storeData(response);
          })
          .catch(err => console.error(err));
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
            <Icon name="camera-party-mode" size={30} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        {/* <View style={{marginLeft: 15, marginTop: 10}}>
          <Text style={styles.title2}>Find your {'\n'}match style!</Text>
        </View> */}
        <View>
          <Text style={styles.title3}>Top Rated Designers</Text>
          <ScrollView horizontal={true}>
            {Designers
              ? Designers.map(item => {
                  return (
                    <View style={styles.cardBg} key={item.name}>
                      <Image
                        source={item.image}
                        resizeMode="contain"
                        style={{
                          width: SIZES.width * 0.5,
                          height: SIZES.width * 0.4,
                          borderBottomRightRadius: 50,
                          borderBottomLeftRadius: 50,
                        }}
                      />
                      <Text>{item.name}</Text>
                      <View style={_styles.rowFlexAround}>
                        <Star score={item.rating} style={styles.starStyle} />
                      </View>
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
        <View>
          <Text style={styles.title3}>Most Viewed Items</Text>
          <ScrollView horizontal={true}>
            {MostIt
              ? MostIt.map(item => {
                  return (
                    <View style={styles.cardBg} key={item.name}>
                      <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                          width: SIZES.width * 0.3,
                          height: SIZES.width * 0.3,
                          // borderBottomRightRadius: 10,
                          // borderBottomLeftRadius: 10,
                          borderRadius: 20,
                          padding: SIZES.width * 0.1,
                        }}
                      />
                      <Text
                        style={styles.des}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {item.des}
                      </Text>
                      <Text style={styles.name}>{item.name}</Text>
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>

      <View style={_styles.rowFlexAround}>
        <Button
          text="Designers"
          onPress={() => navigation.navigate('Designer')}
        />
        <Button
          text="Designs"
          onPress={() => navigation.navigate('DesignerList')}
        />
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
    height: SIZES.height * 0.3,
    margin: 10,
    width: SIZES.width * 0.3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 40,
  },
  title2: {
    color: COLORS.black,
    fontWeight: 'bold',
    width: SIZES.width * 0.5,
    fontSize: 20,
    textAlign: 'left',
  },
  title3: {
    color: COLORS.black,
    fontWeight: 'bold',
    padding: 5,
    paddingTop: 20,
    fontSize: 15,
    textAlign: 'left',
  },
  des: {
    color: COLORS.black,
    fontSize: 15,
    width: '100%',
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'left',
  },
  name: {
    color: COLORS.darkgray,
    fontSize: 15,
    marginLeft: 10,
    width: '100%',
    textAlign: 'left',
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
});
