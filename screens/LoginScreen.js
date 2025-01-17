import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import React from 'react';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.whiteBg}>

      {/* app Logo */}
      <View style={styles.appLogo}>
        <Image source={require('../assets/LoginWindow/GitFolio-logo.png')} style={styles.GitFolioLogo} />
      </View>

      {/* Login Section */}
      <View style={styles.loginContainer}>
        <Text style={styles.label}>Username or email address</Text>
        <TextInput style={styles.input} placeholder="Enter your username" placeholderTextColor="#a6a6a6"/>

        <View style={styles.passworldLabel}>
          <Text style={styles.label}>Password</Text>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry placeholderTextColor="#a6a6a6"
        />

        <TouchableOpacity style={styles.signinButton}>
          <Text style={styles.signupText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.createAccountContainer}>
        <Text style={styles.label}>New to Github?</Text>
        <Text style={styles.createAccount}>Create an account</Text>
      </View>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  whiteBg: {
    flex: 1,
    backgroundColor: '#242b33',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  appLogo: {
    alignItems: 'center', 
    marginTop: 40,
  },
  GitFolioLogo: {
    width: 200, 
    height: 200, 
  },
  loginContainer: {
    width: '100%',
    padding: 25,
    borderRadius: 10,
    marginTop: -30,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#303546',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  passworldLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 8,
  }, 
  forgotPassword: {
    fontSize: 16,
    color: '#1e90ff', 
    textDecorationLine: 'underline', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#303546',
    color: '#fff',
  },
  signinButton: {
    backgroundColor: '#268637',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountContainer: {
    width: '100%',
    padding: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#303546',
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  createAccount: { 
    fontSize: 16,
    color: '#1e90ff', // Example: blue color for the "Forgot password" text
    textDecorationLine: 'underline', // Underline to indicate interactivity
    marginBottom: 8,
    marginLeft: 5,
  }, 
  
});
