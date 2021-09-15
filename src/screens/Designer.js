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

export default function Designer({navigation}) {
  useEffect(() => {}, []);
  const Designers = [
    {
      name: 'Obie Ankunding',
      image: require('../assets/2.jpg'),
      des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',

      rating: '3',
    },
    {
      name: 'Granville Ferry',
      des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',
      image: require('../assets/1.jpg'),
      rating: '4',
    },
    {
      name: 'Karine Wilfredo',
      des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',
      image: require('../assets/4.jpg'),
      rating: '2',
    },
  ];
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
        <View>
          <ScrollView horizontal={true}>
            {Designers
              ? Designers.map(item => {
                  return (
                    <View style={styles.cardBg} key={item.name}>
                      <ImageBackground
                        source={item.image}
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
                          <Text style={styles.titleDes}>{item.name}</Text>
                          <Text style={styles.titleDes2}>COLOMBO</Text>
                          <Text style={styles.titleDes2}>{item.des}</Text>
                          <View style={_styles.rowFlexAround}>
                            <Star
                              score={item.rating}
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
          <Text style={styles.des}>Sub Total{'\n'}LKR.1200.00</Text>
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
    fontSize: 15,
    width: '100%',
    fontWeight: 'bold',
    marginTop: 10,
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
