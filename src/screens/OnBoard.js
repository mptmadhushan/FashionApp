/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Circle,
  Text as SvgText,
  TextPath,
  TSpan,
  G,
  Svg,
} from 'react-native-svg';
export default function OnBoard({navigation}) {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/photo-1597175848600-5ef8d4d15c30.jpeg')}>
      <View style={styles.overlayBg}></View>

      <View style={styles.overlay}>
        <View style={styles.rowFlex2}>
          <Text style={styles.title2}>
            Find the best Fashion {'\n'}style for you
          </Text>
          <Text style={styles.title}>
            Labore ad qui eu elit. Laboris laborum irure aliqua irure.
          </Text>
          <View style={styles.howItView}>
            <TouchableOpacity
              // style={styles.buttonStyle2}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Register')}
              style={styles.iconBack}>
              <Icon
                name="arrow-forward-outline"
                size={40}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  iconBack: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlex2: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: SIZES.width,
  },
  howItView: {
    // marginTop: SIZES.height * 0.1,
  },
  container: {
    height: SIZES.height,
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    marginTop: SIZES.height * 0.46,
    backgroundColor: '#fff',
    height: SIZES.height * 0.4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  overlayBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 0.4,
  },
  btn: {
    backgroundColor: COLORS.primary,
    height: 50,
    width: 120,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
    marginTop: SIZES.height * 0.04,
  },
  btn2: {
    height: 50,
    width: 120,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FFAA44',
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.99,
    shadowRadius: 16.0,
    elevation: 34,
    marginTop: SIZES.height * 0.04,
  },
  btnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  title: {
    color: '#ACAFB9',
    fontSize: 20,
    textAlign: 'center',
    marginTop: SIZES.height * 0.02,
    paddingHorizontal: 20,
  },
  title2: {
    marginTop: SIZES.height * 0.07,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginLeft: SIZES.width * 0.1,
  },
});
