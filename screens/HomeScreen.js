import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Added the Ionicons import

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.background}>

      {/* Search container */}
      <View style={styles.searchContainer}>
        <Image source={require('../assets/HomeScreen/search-icon.png')} style={styles.searchIcon}/>
        <TextInput style={styles.searchInput} placeholder="Search user" placeholderTextColor="#a6a6a6"/>
      </View>
      
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.circle}>
          <Image source={require('../assets/HomeScreen/user-profile.png')} style={styles.profileImage}/>
        </View>
        <View style={styles.labels}>
          <Text style={styles.labelName}>Jovan O. Labitad</Text>
          <Text style={styles.labelUsername}>Jayvan123</Text>
          <Text style={styles.labelBio}>
            Lifelong learner. Mobile Developer. Tech explorer.
          </Text>
        </View>
      </View>

      {/* Edit Section */}
      <View style={styles.editContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <View style={styles.followingFollowers}>
          <View style={styles.followersContainer}>
            <Image
              source={require('../assets/HomeScreen/following-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.followText}>2 Followers</Text>
          </View>
          <View style={styles.followersContainer}>
            <Image
              source={require('../assets/HomeScreen/following-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.followText}>2 Following</Text>
          </View>
        </View>
      </View>

      {/* About Me Section */}
      <View style={styles.aboutMeInformation}>
        <Text style={styles.otherInfoTitle}>About me</Text>
        <View>
          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for the school */}
            <Icon name="school" size={30} color="#fff" style={styles.schoolIcon}/>
            <Text style={styles.labelTextDescription}>Studies Bachelor of Science and Information Technologo at USTP-CDO</Text>
          </View>

          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for house */}
            <Icon name="home" size={30} color="#fff" style={styles.houseIcon}/>
            <Text style={styles.labelTextDescription}>Lives in Zone-12 Hilltop, Upper Carmen CDO</Text>
          </View>

          <View style={styles.otherContainer}>
            {/* Using an Ionicons icon for birthday */}
            <Icon name="gift" size={30} color="#fff" style={styles.birthdayIcon}/>
            <Text style={styles.labelTextDescription}>November 21, 2003</Text>
          </View>
          
        </View>
      </View>

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
    width: '100%',
  },
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#000',
    marginBottom: 20,
  },
  searchIcon: {
    height: 30, 
    width: 30, 
    marginLeft: 10,
  }, 
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#000',  
    color: '#fff', 
    borderRadius: 5,
    fontSize: 16,
    alignItems: 'center',
    marginLeft: 5,
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#111',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 15,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  labels: {
    flex: 1,
    justifyContent: 'center',
  },
  labelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  labelUsername: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  labelBio: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  editContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#111',
  },
  editButton: {
    height: 40,
    width: 250,
    backgroundColor: '#555',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  followingFollowers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  followersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  followText: {
    color: '#fff',
    fontSize: 14,
  },
  aboutMeInformation: {
    width: '100%',
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
  },
  otherInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  otherContainer: {
    flexDirection: 'row', 
    width: '100%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#111',
    alignItems: 'center', 
    flexWrap: 'wrap', 
  },
  labelTextDescription: {
    fontSize: 14,
    color: '#ccc',
    flex: 1,
  },
  schoolIcon: {
    marginRight: 10,
  },
  houseIcon: {
    marginRight: 10,
  },
  birthdayIcon: {
    marginRight: 10,
  },
});
