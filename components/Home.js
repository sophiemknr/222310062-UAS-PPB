import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const isFocused = useIsFocused();

  const handleketersediaan = () => {
    console.log('tersedia pressed');
    navigation.navigate('Ruang');
  };

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

  return (
    <KeyboardAvoidingView
      style={styles.container}>
      
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>PinjamRuang</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.greeting}>Halo, Andin!!</Text>

        <View style={styles.isi}>
          <Text style={styles.ket}>Kegiatan</Text>
          <TextInput
            style={styles.input}
            placeholder="Kegiatan"
            placeholderTextColor="#0E2A47"
          />

          <Text style={styles.ket}>Tanggal</Text>
          <TextInput
            style={styles.input}
            placeholder="Tanggal"
            placeholderTextColor="#0E2A47"
          />

          <Text style={styles.ket}>Waktu</Text>
          <TextInput
            style={styles.input}
            placeholder="Waktu"
            placeholderTextColor="#0E2A47"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleketersediaan}>
          <Text style={styles.buttonText}>Cek Ketersediaan Ruangan</Text>
        </TouchableOpacity>
      

      <Text style={styles.subHeader}>Status Peminjaman Hari Ini</Text>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>📍 201</Text>
          <Text style={styles.statusText}>10.15 - 12.45</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>📍 307</Text>
          <Text style={styles.statusText}>13.30 - 15.30</Text>
        </View>
      </ScrollView>
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
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#BCC6D5',
    paddingTop: 50,
  },
  header: {
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    color: '#0E2A47',
    textAlign: 'center',
  },
  greeting: {
    marginTop: 20,
    fontSize: 40,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'left',
    padding: 20,
  },
  isi: {
    flex: 2,
    padding: 20,
  },
  ket: {
    fontSize: 25,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#BCC6D5',
    borderRadius: 10,
    padding: 20,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 30,
    textDecorationLine:'underline',
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
  },
  scrollContainer: {
    width: '100%',
    padding: 20
  },
  statusContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4A73C1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#BCC6D5',
  },
});

export default Home;
