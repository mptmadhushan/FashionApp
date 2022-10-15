/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
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
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
const Designers = require('../constants/designer.json');
import axios from 'axios';
import RNLocation from 'react-native-location';
import AsyncStorage from '@react-native-community/async-storage';

export default function Designer({navigation}) {
  useEffect(() => {
    getDesigners();
    getUserToken();
  }, []);
  const [userData, setUser] = useState();

  const [newDesigners, setDesigners] = useState();
  const [location, setLocation] = useState();
  // const Designers2 = [
  //   {
  //     name: 'Obie Ankunding',
  //     image: require('../assets/2.jpg'),
  //     des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',

  //     rating: '3',
  //   },
  //   {
  //     name: 'Granville Ferry',
  //     des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',
  //     image: require('../assets/1.jpg'),
  //     rating: '4',
  //   },
  //   {
  //     name: 'Karine Wilfredo',
  //     des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',
  //     image: require('../assets/4.jpg'),
  //     rating: '2',
  //   },
  // ];
  // RNLocation.configure({
  //   distanceFilter: 5.0,
  // });

  // RNLocation.requestPermission({
  //   ios: 'whenInUse',
  //   android: {
  //     detail: 'coarse',
  //   },
  // }).then(granted => {
  //   if (granted) {
  //     this.locationSubscription = RNLocation.subscribeToLocationUpdates(
  //       locations => {
  //         setLocation(locations);
  //         /* Example location returned
  //         {
  //           speed: -1,
  //           longitude: -0.1337,
  //           latitude: 51.50998,
  //           accuracy: 5,
  //           heading: -1,
  //           altitude: 0,
  //           altitudeAccuracy: -1
  //           floor: 0
  //           timestamp: 1446007304457.029,
  //           fromMockProvider: false
  //         }
  //         */
  //       },
  //     );
  //   }
  // });
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
  const getDesigners = () => {
    const reqData = {
      gender: 'female',
      event: 'wedding',
      dress_type: '',
      lat: 5.946,
      lng: 80.534,
    };
    // console.log('🚀 ~ f reqData', reqData);
    axios
      .post('https://fsrc1.herokuapp.com/v1/getSimilarDesigners', reqData)
      .then(res => {
        console.log('hhe 🚀', res.data);
        setDesigners(res.data);
      });
  };
  return (
    <View style={styles.container}>
      <Modal isVisible={false}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <LinearGradient
            // start={{x: 0.5, y: 0}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[COLORS.black, COLORS.primary]}
            style={styles.modalBg}>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <Icon name="grain" size={40} color={COLORS.white} />
            </View>
            <Text style={styles.modalHeader}>Appointment</Text>
            <View style={_styles.rowFlexBetween}>
              <View>
                <Text style={styles.modalText}>Designer Name</Text>
                <Text style={styles.modalText}>Name </Text>
                <Text style={styles.modalText}>Phone Number</Text>
                <Text style={styles.modalText}>Email</Text>
              </View>
              <View>
                <Text style={styles.modalText2}>: Obie Ankunding</Text>
                <Text style={styles.modalText2}>: Kiera</Text>
                <Text style={styles.modalText2}>: 714 906 4459</Text>
                <Text style={styles.modalText2}>: obieankunding@gmail.com</Text>
              </View>
            </View>
            <Button
              text="Submit"
              // onPress={() => setModalVisible(true)}
            />
          </LinearGradient>
        </View>
      </Modal>
      <View style={styles.mainContainer}>
        <View style={[_styles.rowFlexAround, styles.header]}>
          <Icon name="grain" size={40} color={COLORS.black} />
          <Text style={styles.headerText}>Fashion App</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Measurements')}>
            <Icon name="camera-party-mode" size={30} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal={true}>
            {Designers
              ? Designers.map(item => {
                  return (
                    <View style={styles.cardBg} key={item.name}>
                      <ImageBackground
                        source={require('../assets/4.jpg')}
                        resizeMode="cover"
                        style={{
                          width: SIZES.width,
                          height: SIZES.height * 0.8,
                          borderBottomRightRadius: 50,
                          borderBottomLeftRadius: 50,
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            width: SIZES.width,
                          }}>
                          <Text style={styles.titleDes}>{item.tag}</Text>
                          <Text style={styles.titleDes2}>{item.location}</Text>
                          <Text style={styles.titleDes2}>{item.des}</Text>
                          <View style={_styles.rowFlexAround}>
                            <Star
                              score={item.popularity}
                              style={styles.starStyle}
                            />
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>

      <View style={_styles.rowFlexAround}>
        <View>
          {/* <Text style={styles.des}>{'\n'}LKR.1200.00</Text> */}
        </View>
        <Button
          text="Make an Appointment"
          onPress={() => navigation.navigate('Category')}
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
    width: 100,
    height: 20,
    marginBottom: 20,
  },
  cardBg: {
    overflow: 'hidden',
    height: SIZES.height * 0.8,
    width: SIZES.width,
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
  titleDes: {
    color: COLORS.white,
    fontWeight: 'bold',
    paddingLeft: 15,
    fontSize: 20,
    textAlign: 'left',
  },
  titleDes2: {
    color: COLORS.white,
    paddingLeft: 15,
    fontSize: 15,
    textAlign: 'left',
  },
  des: {
    color: COLORS.white,
    fontSize: 12,
    width: '100%',
    fontWeight: 'bold',
    marginTop: 20,
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
  modalBg: {
    width: SIZES.width * 0.9,
    // height: SIZES.height * 0.2,
    padding: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    color: COLORS.white,
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  modalText2: {
    color: COLORS.white,
    fontSize: 15,
    marginLeft: 15,
  },
});
