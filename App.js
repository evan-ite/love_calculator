import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, Alert} from 'react-native';
import axios from 'axios';
import styles from './styles';
import CustomButton from './button';
import BackButton from './backbutton';
import fetchGif from './gif';

export default function App() {
	const [name1, setName1] = useState('');
	const [name2, setName2] = useState('');
	const [matchResult, setMatchResult] = useState(null);
	const [gif, setGif] = useState(null);

const inputRef2 = useRef(null);

const handleLoveMatch = async () => {
	if (!name1 || !name2) {
	Alert.alert('Error', 'Please enter both names');
	return;
	}
	try {
	const response = await axios.get(
		'https://love-calculator.p.rapidapi.com/getPercentage',
		{
		params: {
			fname: name1,
			sname: name2,
		},
		headers: {
			'X-RapidAPI-Key': '0fd87e703bmsh75422011067d9eep12be63jsn1a9b43714a8a',
			'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
		},
		}
	);
	const matchData = response.data;
	setMatchResult(matchData);

	console.log("PERCENTAGE", matchData.percentage);
	const gifUrl = await fetchGif(matchData);
	setGif(gifUrl);

	} catch (error) {
		console.error('Error fetching love match:', error);
		Alert.alert('Error', 'Failed to fetch love match percentage');
	}
};

	return (
	<View style={styles.container}>
	{!matchResult ? (
		<>
		<View style={styles.titleContainer}>
			<Image
			source={require('./gif/fluffy_heart.png')}
			style={styles.heart}
			></Image>
			<Text style={styles.title}>Match Calculator</Text>
		</View>
		<TextInput
			style={styles.input}
			placeholder="Enter your name :p"
			value={name1}
			onChangeText={setName1}
			onSubmitEditing={() => inputRef2.current.focus()}
		/>
		<TextInput
			ref={inputRef2}
			style={styles.input}
			placeholder="Enter your crushes name ;)"
			value={name2}
			onChangeText={setName2}
		/>
		<CustomButton title="Test Now <3" onPress={handleLoveMatch} />
		<View style={styles.emptyContainer}>
		</View>
		</>
	) : (
		<View style={styles.container}>
			<View style={styles.resultContainer}>
				<Text style={styles.result}>
					{matchResult.fname} and {matchResult.sname}...
				</Text>
			</View>
			<View style={styles.gifContainer}>
				<Image source={{ uri: gif }} style={styles.gif} ></Image>
				<Text style={styles.percentage}>
					{matchResult.percentage}%
				</Text>
			</View>
			<View style={styles.resultContainer}>
				<Text style={styles.resultQuote}>
					{matchResult.result}
				</Text>
			</View>
			<View style={styles.resultContainer}>
				<BackButton
					title="Test Again"
					onPress={() => {
						setMatchResult(null);
						setGif(null);
						setName1('');
						setName2('');
				}}/>
			</View>
      </View>
    )}
  </View>
);

}
