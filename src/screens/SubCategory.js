/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Star from 'react-native-star-view';
import _styles from '../constants/styling';
import Button from '../components/Button';

export default function Home({ navigation }) {
	useEffect(() => {}, []);

	const MostIt = [
		{
			name: 'Kandian',
			des: 'Aute sunt consequat esse minim proident reprehenderit mollit.',
			image: require('../assets/4.jpg'),
			rating: '3219.20'
		},
		{
			name: 'Western',
			des: 'Labore occaecat ex ex eu laborum.',
			image: require('../assets/1.jpg'),
			rating: '4000.21'
		},
		{
			name: 'Indian',
			des: 'Fugiat ex in eiusmod sunt.',
			image: require('../assets/7.jpg'),
			rating: '2403.00'
		}
	];
	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<View style={[ _styles.rowFlexAround, styles.header ]}>
					<Icon name="grain" size={40} color={COLORS.black} />
					<Text style={styles.headerText}>Fashion App</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Measurements')}>
						<Icon name="camera-party-mode" size={40} color={COLORS.black} />
					</TouchableOpacity>
				</View>
				<View style={_styles.centeredView}>
					<View style={styles.search}>
						<View style={_styles.rowFlexAround}>
							<Icon name="magnify" size={30} color={COLORS.darkgray} />
							<Text
								style={{
									color: COLORS.darkgray,
									fontSize: 15,
									// fontWeight: 'bold',
									marginLeft: 20
								}}
							>
								Search Dress Types
							</Text>
						</View>
					</View>
				</View>
				<View style={_styles.centeredView}>
					<View style={styles.banner}>
						<View style={_styles.rowFlexAround}>
							<View>
								<Text style={styles.title2}>Last Discount</Text>
								<Text style={styles.dis}>Up to 70%</Text>
								<Text style={styles.des}>Shop now & Get Free {'\n'}shipping to your house</Text>
							</View>
							<Image
								source={images.discount2}
								resizeMode="contain"
								style={{
									width: SIZES.width * 0.4,
									height: SIZES.width * 0.4
								}}
							/>
						</View>
					</View>
				</View>
				<View>
					<Text style={styles.title3}>Dress Type</Text>

					<ScrollView horizontal={true}>
						{MostIt ? (
							MostIt.map((item) => {
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
												padding: SIZES.width * 0.1
											}}
										/>
										<Text style={styles.name}>{item.name}</Text>
									</View>
								);
							})
						) : null}
					</ScrollView>
				</View>
			</View>
			<View style={{ marginTop: 10 }} />

			<View style={_styles.rowFlexAround}>
				<Text style={styles.detail}>Height: 6 inches</Text>
				<Text style={styles.detail}>Hip: 28 inches</Text>
				<Text style={styles.detail}>Skin: White</Text>
			</View>
			<View style={{ marginTop: 10 }} />

			<View style={_styles.rowFlexAround}>
				<Text style={styles.detail}>Updated on: Thu May 05 2022 02:15:14 GMT+0530</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.black,
		justifyContent: 'flex-start'
	},
	starStyle: {
		width: 50,
		height: 10,
		marginBottom: 20
	},
	cardBg: {
		height: SIZES.height * 0.3,
		margin: 10,
		width: SIZES.width * 0.3,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	banner: {
		height: SIZES.height * 0.25,
		margin: 10,
		width: SIZES.width * 0.85,
		justifyContent: 'center',
		borderRadius: 60,
		alignContent: 'center',
		backgroundColor: COLORS.black,
		alignItems: 'center'
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
		paddingLeft: 35
	},
	header: {
		height: 40
	},
	title2: {
		color: COLORS.white,
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'left',
		// width: '100%',
		marginLeft: 50
	},
	dis: {
		color: COLORS.primary,
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'left',
		// width: '100%',
		marginLeft: 50
	},
	title3: {
		color: COLORS.black,
		fontWeight: 'bold',
		padding: 5,
		paddingTop: 20,
		fontSize: 20,
		textAlign: 'left'
	},
	des: {
		color: COLORS.darkgray,
		fontSize: 15,
		// width: '100%',
		marginLeft: 50,
		textAlign: 'left'
	},
	detail: {
		color: COLORS.primary,
		fontSize: 15,
		// width: '100%',
		textAlign: 'left'
	},
	name: {
		color: COLORS.black,
		fontSize: 15,
		marginLeft: 10,
		width: '100%',
		paddingTop: 10,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	price: {
		color: COLORS.darkgray,
		fontSize: 15,
		marginLeft: 10,
		width: '100%',
		textAlign: 'left'
	},
	headerText: {
		fontSize: 20,
		width: SIZES.width * 0.6,
		color: COLORS.black,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	mainContainer: {
		backgroundColor: COLORS.white,
		width: SIZES.width,
		height: SIZES.height * 0.85,
		justifyContent: 'flex-start',
		borderBottomRightRadius: 30,
		borderBottomLeftRadius: 30,
		overflow: 'hidden'
	}
});
