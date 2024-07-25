import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';

const Details = ({ navigation }) => {
  const isFocused = useIsFocused();

  const handleHomePress = () => {
    console.log('Home pressed');
    navigation.navigate('Home');
  };

  const handleRiwayatPress = () => {
    console.log('Clock pressed');
    navigation.navigate('History'); 
  };

  const handleSettingsPress = () => {
    console.log('Settings pressed');
    navigation.navigate('Profile');
  };
  const handleBackPress = () => {
    navigation.navigate('Ruang');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}>
      
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Icon name="arrow-left" size={24} color="#0E2A47" />
            </TouchableOpacity>
        <Text style={styles.header}>Detail Ruangan</Text>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.isi}>
        <View style={styles.formGroup}>
        <Text style={styles.label}>Kegiatan</Text>
        <Text style={styles.input}></Text> 
         </View>
      
        <View style={styles.formGroup}>
        <Text style={styles.label}>Tanggal</Text>
        <Text style={styles.input}></Text>
        </View>
      
        <View style={styles.formGroup}>
        <Text style={styles.label}>Waktu</Text>
        <Text style={styles.input}></Text>
        </View>
      
        <View style={styles.formGroup}>
        <Text style={styles.label}>Ruangan</Text>
        <Text style={styles.input}></Text>
        </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleHomePress}>
          <Icon name="home" size={30} color={isFocused ? "#0E2A47" : "#4A73C1"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRiwayatPress}>
          <Icon name="clock-o" size={30} color="#4A73C1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Icon name="cog" size={30} color="#4A73C1" />
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#0E2A47',
    },

    headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#BCC6D5',
    paddingTop: 50,
      },

    backButton: {
        marginRight: 10,
      },
    backButtonText: {
        fontSize: 24,
        color: '#0E2A47',
      },
    header: {
        fontSize: 32,
        color: '#0E2A47',
      },
  isi: {
    flex: 2,
    padding: 20,
    marginTop:30
  },
  ket: {
    fontSize: 25,
    color: 'white',
    marginBottom: 5,
  },
  formGroup: {
    marginBottom: 50,
  },
  label: {
    color: '#ecf0f1',
    marginBottom: 5,
    fontSize: 20
  },
  input: {
    backgroundColor: '#ecf0f1',
    padding: 20,
    borderRadius: 10,
    color: '#2c3e50',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#BCC6D5',
  },
});

export default Details;