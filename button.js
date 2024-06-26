import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F26CA7',
    borderRadius: 25,
    paddingVertical: 22,
    paddingHorizontal: 34,
    marginBottom: 20,
	marginTop: 50,
  },
  buttonText: {
    fontSize: 20,
	fontWeight: 'bold',
    color: 'rgb(245, 235, 232)',
    textAlign: 'center',
  },
});

export default CustomButton;
