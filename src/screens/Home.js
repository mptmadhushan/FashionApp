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
import LinearGradient from 'react-native-linear-gradient';
import Star from 'react-native-star-view';
import _styles from '../constants/styling';
import Button from '../components/Button';

export default function Home({navigation}) {
  useEffect(() => {}, []);
  const Designers = [
    {
      name: 'Obie Ankunding',
      image: require('../assets/2.jpg'),
      rating: '3',
    },
    {
      name: 'Granville Ferry',
      image: require('../assets/1.jpg'),
      rating: '4',
    },
    {
      name: 'Karine Wilfredo',
      image: require('../assets/4.jpg'),
      rating: '2',
    },
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
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={[_styles.rowFlexAround, styles.header]}>
          <Icon name="grain" size={40} color={COLORS.black} />
          <Text style={styles.headerText}>Fashion App</Text>
          <Icon name="camera-party-mode" size={40} color={COLORS.black} />
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
                      <Text style={styles.price}>LKR.{item.rating}</Text>
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
    color: COLORS.black,
    fontWeight: 'bold',
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    width: SIZES.width,
    height: SIZES.height * 0.85,
    justifyContent: 'flex-start',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
  },
});
