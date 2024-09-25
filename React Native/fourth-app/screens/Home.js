import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../FirebaseConfiguration.mjs";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  const [users, setUsers] = React.useState([]);
  const navigation = useNavigation();

  
  useFocusEffect(
    React.useCallback(() => {
      const fetchUsers = async () => {
        try {
          const querySnapshot = await getDocs(collection(database, "users"));
          const userList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUsers(userList);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    }, [])
  );

  const handleViewDetails = (userId) => {
    navigation.navigate("Details", { userId });
  };

  const handleAddUser = () => {
    navigation.navigate("AddUser");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Users List Screen</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.userCard}
            onPress={() => handleViewDetails(item.id)}
          >
            <Text style={styles.userName}>{item.name}</Text>
            <Icon name="eye" size={24} color="#0B5CB2FF" />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
        <Text style={styles.addButtonText}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#0B6AD0FF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  userCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    color: "#05274DFF",
    fontWeight: "bold",
  },
});

export default Home;
