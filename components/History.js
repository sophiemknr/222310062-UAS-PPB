import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';

const History = ({navigation}) => {
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
      
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.header}>Riwayat</Text>
      </View>
      <ScrollView style={styles.isi}>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.dateText}>Hari, tanggal</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Ruangan : </Text>
            <Text style={styles.detailsText}>jam : </Text>
            <Text style={styles.detailsText}>Status : </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
      <TouchableOpacity onPress={handleHomePress}>
          <Icon name="home" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRiwayatPress}>
          <Icon name="clock-o" size={30} color={isFocused ? "#0E2A47" : "#4A73C1"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Icon name="cog" size={30} color="#4A73C1" />
        </TouchableOpacity>
      </View>
    </View>
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
    paddingBottom: 20,
    },
  dateText: {
    fontSize: 25,
    color: 'white',
    padding: 10
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  detailsText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#BCC6D5',
  }
});

export default History;
