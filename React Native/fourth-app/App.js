//Users CRUD using FireBase
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../fourth-app/screens/Home";
import Details from "../fourth-app/screens/Details";
import AddUser from "../fourth-app/screens/AddUser";
import EditUser from "../fourth-app/screens/EditUser";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: "User Details" }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUser}
          options={{ title: "Add New User" }}
        />
        <Stack.Screen
          name="EditUser"
          component={EditUser}
          options={{ title: "Edit User" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
