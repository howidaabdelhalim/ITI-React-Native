import { StyleSheet } from "react-native";

export default StyleSheet.create({

container: {
    flex: 1,
    padding: 20,
},

input: {
    marginBottom: 10,
},

addButton: {
    marginBottom: 20,
},

taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
},

taskDone: {
    textDecorationLine: "line-through",
},

counter: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
},

});
