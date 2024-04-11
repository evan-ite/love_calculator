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
	flex: 1,
	justifyContent: 'space-around',
	alignItems: 'center',
	marginBottom: 100,
	marginTop: 100,
	backgroundColor: 'rgb(161, 37, 161)',
},
inResultContainer: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	marginHorizontal: 25,
	margin: 10,
	backgroundColor: 'rgb(161, 37, 161)',
},
title: {
	fontSize: 44,
	marginBottom: 50,
	color: 'rgb(245, 235, 232)',
	fontWeight: '900',
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
	fontSize: 100,
	color: 'rgb(245, 235, 232)',
	fontWeight: '900',
},
result: {
	fontSize: 35,
	color: 'rgb(245, 235, 232)',
	fontWeight: '900',
	marginBottom: 20,
},
gif: {
	margin: 30,
	width: 300,
	height: 200,
}
});

export default styles;
