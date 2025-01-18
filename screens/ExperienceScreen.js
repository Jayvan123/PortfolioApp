import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Added the Ionicons import

const ExperienceScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Experiences Section */}
      <ScrollView style={styles.experienceSection}>
        <Text style={styles.sectionTitle}>Organization Experiences</Text>
        
        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former GDSC Member</Text>
            <Text style={styles.responsibilities}>
              Former GDSC Member 2022-2023
            </Text>
          </View>
        </View>

        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former Deparment Head</Text>
            <Text style={styles.responsibilities}>
              Former Deparment Head of Department of Publication at Univercity City Scholar - USTP
            </Text>
          </View>
        </View>

        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former Deparment Head</Text>
            <Text style={styles.responsibilities}>
              Former Deparment Head of Department of Creative Affairs at USTP Scholars Society - USTP
            </Text>
          </View>
        </View>

        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former Graphics Designer</Text>
            <Text style={styles.responsibilities}>
              Former Graphics designer at Univercity Student Government - USTP
            </Text>
          </View>
        </View>

        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former Graphics Designer</Text>
            <Text style={styles.responsibilities}>
              Former Graphics designer of Andam Higala - USTP
            </Text>
          </View>
        </View>

        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former Graphics Designer</Text>
            <Text style={styles.responsibilities}>
              Former Graphics designer of Andam Higala Inc. CDO
            </Text>
          </View>
        </View>

        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former Director, Creatives and Documentation</Text>
            <Text style={styles.responsibilities}>
              Former Dirctor, Creatives and Documentation at 4H CLub USTP CDO
            </Text>
          </View>
        </View>

        <View style={styles.experienceCard}>
          {/* Icon for Job */}
          <Icon name="briefcase" size={30} color="#fff" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Former third year Governer</Text>
            <Text style={styles.responsibilities}>
              Former third year Governer at Society of Information Technology Enthusiast at USTP CDO
            </Text>
          </View>
        </View>


      </ScrollView>
    </View>
  );
};

export default ExperienceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  experienceSection: {
    marginTop: 10,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  experienceCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#111',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  responsibilities: {
    fontSize: 12,
    color: '#ccc',
    marginBottom: 5,
  },
  achievements: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
});
