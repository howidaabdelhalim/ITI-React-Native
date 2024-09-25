import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { database } from "../FirebaseConfiguration.mjs";

const EditUser = ({ route, navigation }) => {
  const { userId } = route.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = doc(database, "users", userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setName(userData.name);
          setEmail(userData.email);
          setCountry(userData.country || "");
          setPhone(userData.phone || "");
        } else {
          Alert.alert("Error", "User not found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        Alert.alert("Error", "Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleUpdateUser = async () => {
    if (!name || !email || !country || !phone) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      const userRef = doc(database, "users", userId);
      await updateDoc(userRef, {
        name,
        email,
        country,
        phone,
      });

      Alert.alert("Success", "User information updated.");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error updating user:", error);
      Alert.alert("Error", "Failed to update user information.");
    }
  };

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit User Information</Text>
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
        <TouchableOpacity style={styles.submitButton} onPress={handleUpdateUser}>
          <Text style={styles.submitButtonText}>Update</Text>
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
loadingText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
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

export default EditUser;
