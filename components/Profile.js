import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useIsFocused } from '@react-navigation/native';

const Profile = ({ navigation }) => {
    const isFocused = useIsFocused();

  const handlePasswordChange = () => {
    console.log('Change Password pressed');
  };

  const handleContactUs = () => {
    console.log('Contact Us pressed');
  };

  const handleHelpCenter = () => {
    console.log('Help Center pressed');
  };

  const handleLogout = () => {
    console.log('Logout pressed');
    navigation.navigate('welcome');
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Profilku</Text>
      </View>
      
      <View style={styles.isi}>
      <View style={styles.profileContainer}>
        <View style={styles.profilePic}>
          <Icon name="user" size={50} color="#BCC6D5" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Andin</Text>
          <Text style={styles.profileDetails}>222310079</Text>
          <Text style={styles.profileDetails}>Mahasiswa</Text>
        </View>
      </View>
        <View style={styles.buttons}>
      <TouchableOpacity style={styles.optionButton} onPress={handlePasswordChange}>
        <Icon name="lock" size={20} color="#BCC6D5" />
        <Text style={styles.optionText}>Ubah Kata Sandi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleContactUs}>
        <Icon name="phone" size={20} color="#BCC6D5" />
        <Text style={styles.optionText}>Hubungi Kami</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleHelpCenter}>
        <Icon name="question-circle" size={20} color="#BCC6D5" />
        <Text style={styles.optionText}>Pusat Bantuan</Text>
      </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Keluar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
         <TouchableOpacity onPress={handleHomePress}>
          <Icon name="home" size={30} color="#4A73C1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRiwayatPress}>
          <Icon name="clock-o" size={30} color="#4A73C1" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Icon name="cog" size={30} color={isFocused ? "#0E2A47" : "#4A73C1"} />
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
    padding: 20,
    backgroundColor: '#BCC6D5',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 32,
    color: '#0E2A47',
  },
  isi: {
    flex: 2,
    padding: 20
  },
  buttons:{
    flex: 3,
    padding: 30
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  profilePic: {
    backgroundColor: '#4A73C1',
    borderRadius: 50,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileName: {
    fontSize: 27,
    color: '#FFFFFF',
  },
  profileDetails: {
    fontSize: 18,
    color: '#BCC6D5',
    marginTop: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 5,
    backgroundColor: '#4A73C1',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  optionText: {
    color: '#BCC6D5',
    marginLeft: 10,
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: '#4A73C1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    margin: 20,
  },
  logoutButtonText: {
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

export default Profile;
