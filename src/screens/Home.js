/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import _styles from '../constants/styling';
import Button from '../components/Button';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={[_styles.rowFlexAround, styles.header]}>
          <Icon name="grain" size={40} color={COLORS.black} />
          <Text style={styles.headerText}>Fashion App</Text>
          <Icon name="camera-party-mode" size={40} color={COLORS.black} />
        </View>
        <View style={{marginLeft: 15, marginTop: 10}}>
          <Text style={styles.title2}>Find your {'\n'}match style!</Text>
        </View>
      </View>

      <View style={_styles.rowFlexAround}>
        <Button
          text="Designers"
          // onPress={() => setModalVisible(true)}
        />
        <Button
          text="Categories"
          // onPress={() => setModalVisible(true)}
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
  headerText: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    width: SIZES.width,
    height: SIZES.height * 0.8,
    justifyContent: 'flex-start',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
});
