import { StyleSheet } from 'react-native';

const contactStyles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
},
sectionHeader: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
    fontSize:10,
},
contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
},
avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
},
nameText: {
    fontSize: 20,
    marginLeft: 10,
},
phoneNumberText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
},
});

export default contactStyles;