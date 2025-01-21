import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SkillsScreen = ({ navigation }) => {
  const experiences = [
    {
      section: "Technical Skills",
      icon: "code-outline",
      items: [
        {
          title: "UI/UX Design",
          responsibilities: "Expertise in designing intuitive interfaces, conducting user research, and creating wireframes and high-fidelity prototypes. Proficient in tools like Figma and Adobe XD.",
        },
        {
          title: "Programming Languages",
          responsibilities: "Proficient in Python, JavaScript, and TypeScript for building scalable and efficient solutions.",
        },
        {
          title: "Frameworks and Libraries",
          responsibilities: "Skilled in React Native for mobile apps, as well as React.js for web development.",
        },
        {
          title: "Databases",
          responsibilities: "Experienced in NoSQL databases such as MongoDB and Apache Cassandra for handling large datasets efficiently.",
        },
      ],
    },
    {
      section: "Professional Skills",
      icon: "briefcase-outline",
      items: [
        {
          title: "Project Management",
          responsibilities: "Experienced in leading projects from initiation to delivery, managing timelines, resources, and cross-functional teams.",
        },
        {
          title: "Communication",
          responsibilities: "Adept at delivering clear and concise presentations, collaborating with diverse teams, and conveying complex ideas effectively.",
        },
        {
          title: "Leadership",
          responsibilities: "Strong ability to inspire and guide teams toward achieving common goals while fostering a positive work environment.",
        },
      ],
    },
    {
      section: "Soft Skills",
      icon: "people-outline",
      items: [
        {
          title: "Teamwork",
          responsibilities: "Thrives in collaborative environments, contributing effectively to team objectives and fostering positive dynamics.",
        },
        {
          title: "Adaptability",
          responsibilities: "Quickly adjusts to changing project requirements and learns new tools or methodologies to meet evolving challenges.",
        },
        {
          title: "Creativity",
          responsibilities: "Consistently develops innovative solutions to problems and introduces fresh perspectives to projects.",
        },
      ],
    },
    {
      section: "Certifications and Training",
      icon: "ribbon-outline",
      items: [
        {
          title: "Certified Graphics Designer",
          responsibilities: "Earned certification through active participation in design projects and initiatives within college organizations, honing both technical and creative skills.",
        },
        {
          title: "Courses and Training",
          responsibilities: "Attended webinars and training sessions on emerging technologies, including events hosted by Google Developers Club USTP and CDO Tech Hub.",
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {experiences.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Icon name={section.icon} size={24} color="#fff" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>{section.section}</Text>
          </View>
          {section.items.map((item, idx) => (
            <View key={idx} style={styles.experienceCard}>
              <Icon name="ellipse-outline" size={18} color="#fff" style={styles.icon} />
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

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
