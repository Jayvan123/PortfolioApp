import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const ExperienceScreen = () => {
  const experiences = [
    {
      section: "Job Experiences",
      items: [
        {
          title: "UI/UX Designer",
          responsibilities: "Designed user-friendly interfaces, conducted user research, created wireframes and prototypes.",
        },
        {
          title: "Beta Tester",
          responsibilities: "Provided detailed and constructive feedback to improve system functionality and user experience.",
        },
      ],
    },
    {
      section: "Organizational Experiences",
      items: [
        {
          title: "Former GDSC Member",
          responsibilities: "Former GDSC Member 2022-2023.",
        },
        {
          title: "Former Department Head - Publication",
          responsibilities: "Department Head of Publication at University City Scholar - USTP.",
        },
        {
          title: "Former Department Head",
          responsibilities: "Head of the Department of Creative Affairs at USTP Scholars Society.",
        },
        {
          title: "Former Graphics Designer",
          responsibilities: "Graphics designer for University Student Government - USTP.",
        },
        {
          title: "Former Graphics Designer",
          responsibilities: "Graphics Designer at Andam Higala Inc. CDO",
        },
        {
          title: "Former Graphics Designer",
          responsibilities: "Graphics Designer at Andam Higala - USTP.",
        },
        {
          title: "Former Director, Creatives and Documentation",
          responsibilities: "Director of Creatives and Documentation at 4H Club - USTP CDO..",
        },
        {
          title: "Former Third Year Governor",
          responsibilities: "Governor of the Society of Information Technology Enthusiasts at USTP CDO.",
        },
      
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {experiences.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.section}</Text>
          {section.items.map((item, idx) => (
            <View key={idx} style={styles.experienceCard}>
              <Icon
                name={section.section === "Job Experiences" ? "briefcase" : "people"}
                size={30}
                color="#fff"
                style={styles.icon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.responsibilities}>{item.responsibilities}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default ExperienceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  sectionContainer: {
    // marginBottom: 10,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#444',
    paddingBottom: 5,
  },
  experienceCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#fff',
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
    fontSize: 14,
    color: '#ccc',
  },
});
