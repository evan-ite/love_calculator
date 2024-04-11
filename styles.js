import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	padding: 20,
	backgroundColor: 'rgb(161, 37, 161)',
},
resultContainer: {
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: '7%',
},
titleContainer: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
},
gifContainer: {
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F26CA7',
	padding: 30,
	borderRadius: 15,
},
emptyContainer: {
	height: '20%',
},
empty: {
	flex: 1,
	height: '40%',
},
title: {
	textAlign: 'center',
	fontSize: 44,
	color: 'rgb(245, 235, 232)',
	fontWeight: '900',
	position: 'absolute',
	top: '38%',
},
heart: {
	width: 300,
	height: 300,
	position: 'absolute',
	bottom: '5%',
},
input: {
	width: '100%',
	height: 60,
	color: 'rgb(161, 37, 161)',
	fontWeight: '700',
	backgroundColor: 'rgb(245, 235, 232)',
	marginBottom: 20,
	padding: 20,
	borderRadius: 15,
},
percentage: {
	fontSize: 90,
	color: 'rgb(245, 235, 232)',
	fontWeight: '900',
	marginTop: 10,
},
result: {
	marginTop: '30%',
	fontSize: 30,
	color: 'rgb(245, 235, 232)',
	fontWeight: '900',
},
resultQuote: {
	fontSize: 35,
	color: 'rgb(245, 235, 232)',
	fontWeight: '900',
	marginTop: '10%',
},
gif: {
	width: 300,
	height: 250,
	borderRadius: 15,
},
});

export default styles;
