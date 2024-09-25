import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../FirebaseConfiguration.mjs'; 

const AddUser = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddUser = async () => {
    if (!name || !email || !country || !phone) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      // Add user to Firestore with auto-generated ID
      const docRef = await addDoc(collection(database, 'users'), {
        name,
        email,
        country,
        phone,
      });

      console.log('User added with ID: ', docRef.id);

      setName('');
      setEmail('');
      setCountry('');
      setPhone('');

      navigation.navigate('Home');
    } catch (error) {
      console.error('Error adding user:', error);
      Alert.alert('Error', 'Failed to add user. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New User</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleAddUser}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f2f5', 
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 24,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400, 
    backgroundColor: '#ffffff', 
    padding: 24,
    borderRadius: 12, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    width: '100%',
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 10, 
    backgroundColor: '#f9f9f9', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 10, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddUser;








