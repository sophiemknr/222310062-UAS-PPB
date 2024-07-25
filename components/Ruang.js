import { useIsFocused } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Ruang = ({ navigation }) => {

  const isFocused = useIsFocused();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomPress = (room) => {
    setSelectedRoom(room);
    navigation.navigate('Details');
  };

  const handleBackPress = () => {
    navigation.navigate('Home');
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

  const renderRoomButton = (room) => (
    <TouchableOpacity
      key={room}
      style={[
        styles.roomButton,
        selectedRoom === room && styles.selectedRoomButton,
      ]}
      onPress={() => handleRoomPress(room)}
    >
      <Text style={styles.roomButtonText}>{room}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
         <Icon name="arrow-left" size={24} color="#0E2A47" />
        </TouchableOpacity>
        <Text style={styles.header}>Pilih Ruangan</Text>
      </View>

      <ScrollView style={styles.isi}>
        <View style={styles.roomContainer}>
          <Text style={styles.floorLabel}>Lantai 1</Text>
          <View style={styles.roomRow}>
            {['101', '102', '105', '106'].map(renderRoomButton)}
          </View>
          <View style={styles.roomRow}>
            {['107', '109','111'].map(renderRoomButton)}
          </View>
          <Text style={styles.floorLabel}>Lantai 2</Text>
          <View style={styles.roomRow}>
            {['201', '202', '203', '204'].map(renderRoomButton)}
          </View>
          <View style={styles.roomRow}>
            {['208', '209', '211'].map(renderRoomButton)}
          </View>
          <Text style={styles.floorLabel}>Lantai 3</Text>
          <View style={styles.roomRow}>
            {['304'].map(renderRoomButton)}
          </View>
          <Text style={styles.floorLabel}>Lantai 5</Text>
          <View style={styles.roomRow}>
            {['501', '503', '504', '505'].map(renderRoomButton)}
          </View>
          <Text style={styles.floorLabel}>Lantai 6</Text>
          <View style={styles.roomRow}>
            {['601', '603', '604', 'Aula'].map(renderRoomButton)}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.confirmButton} onPress={handleRoomPress}>
        <Text style={styles.confirmButtonText}>Konfirmasi</Text>
      </TouchableOpacity>

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
  roomContainer: {
    padding: 20,
  },
  floorLabel: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  roomRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  roomButton: {
    backgroundColor: '#BCC6D5',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  selectedRoomButton: {
    backgroundColor: '#4A73C1',
  },
  roomButtonText: {
    color: '#0E2A47',
  },
  confirmButton: {
    backgroundColor: '#4A73C1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  confirmButtonText: {
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

export default Ruang;
