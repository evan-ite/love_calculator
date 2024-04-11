import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BackButton = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F26CA7',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
	marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
	fontWeight: 'bold',
    color: 'rgb(245, 235, 232)',
    textAlign: 'center',
  },
});

export default BackButton;
