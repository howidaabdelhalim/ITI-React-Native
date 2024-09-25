import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { database } from "../FirebaseConfiguration.mjs";
import Icon from "react-native-vector-icons/MaterialIcons";

const Details = ({ route, navigation }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = doc(database, "users", userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          console.warn("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    } else {
      console.warn("No userId provided");
      setLoading(false);
    }
  }, [userId]);

  const handleEdit = () => {
    navigation.navigate("EditUser", { userId });
  };

  const handleDelete = async () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this user?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              const userRef = doc(database, "users", userId);
              await deleteDoc(userRef);
              Alert.alert("Success", "User deleted.");
              navigation.navigate("Home");
            } catch (error) {
              console.error("Error deleting user:", error);
              Alert.alert("Error", "Failed to delete user.");
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" />;
  }

  if (!user) {
    return <Text>No user data found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {user.name}</Text>
      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Country: {user.country}</Text>
      <Text style={styles.info}>Phone: {user.phone}</Text>
      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Icon name="edit" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.editButtonText}>Edit Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Icon name="delete" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.deleteButtonText}>Delete User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#192026FF",
    marginBottom: 12,
  },
  info: {
    fontSize: 22,
    color: "#2E353BFF",
    marginBottom: 8,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: "#0B6AD0FF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  deleteButton: {
    marginTop: 12,
    backgroundColor: "#C11123FF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default Details;
