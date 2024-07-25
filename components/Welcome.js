
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Welcome = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PinjamRuang</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E2A47', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4A73C1', 
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Welcome;