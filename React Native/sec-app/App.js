import React from 'react';
import { View } from 'react-native';
import UserList from './components/UserList';

const App = () => {
  const contacts = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", name: "Alia Mohamed", phoneNumber: "011234789", avatar: "https://th.bing.com/th/id/OIP.z9T6WAksNtEWZHbgoBlnpQHaHa?rs=1&pid=ImgDetMain" },
        { id: "1", name: "Ali Ahmed", phoneNumber: "011234789", avatar: "https://th.bing.com/th/id/OIP.MYmaxX8BpbtjPLVPQfRvaAAAAA?rs=1&pid=ImgDetMain" },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "2", name: "Basma Hashem", phoneNumber: "011234789", avatar: "https://th.bing.com/th/id/OIP.D1L_ovQsg29x4osqNYI0KAHaHa?w=706&h=706&rs=1&pid=ImgDetMain" },
        { id: "3", name: "Basel Mohamed", phoneNumber: "011234789", avatar: "https://png.pngtree.com/png-vector/20191103/ourmid/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg" },
      ],
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "4", name: "Charles Dickens", phoneNumber: "011234789", avatar: "https://static.vecteezy.com/system/resources/previews/014/366/174/non_2x/trendy-grandfather-concepts-vector.jpg" },
      ],
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "5", name: "Dina Ahmed", phoneNumber: "011234789", avatar: "https://th.bing.com/th/id/OIP.C00fEHQljPAh6ByfcGZV3QHaHa?w=512&h=512&rs=1&pid=ImgDetMain" },
      ],
    },
  ];

  return (
    <View>
      <UserList data={contacts} />
    </View>
  );
};

export default App;










// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { View, FlatList, Text } from 'react-native';
// import ColorBox from '../sec-app/components/ColorBox'; 
// import styles from './styles'; 

// const COLORS = [
//   { colorName: 'Base03', hexCode: '#002b36' },
//   { colorName: 'Base02', hexCode: '#073642' },
//   { colorName: 'Base01', hexCode: '#586e75' },
//   { colorName: 'Base00', hexCode: '#657b83' },
//   { colorName: 'Base0', hexCode: '#839496' },
//   { colorName: 'Base1', hexCode: '#93a1a1' },
//   { colorName: 'Base2', hexCode: '#eee8d5' },
//   { colorName: 'Base3', hexCode: '#fdf6e3' },
//   { colorName: 'Yellow', hexCode: '#FFEE00FF' },
//   { colorName: 'Orange', hexCode: '#EF5817FF' },
//   { colorName: 'Red', hexCode: '#dc322f' },
//   { colorName: 'Magenta', hexCode: '#d33682' },
//   { colorName: 'Fushia', hexCode: '#E21176' },
//   { colorName: 'Lavender', hexCode: '#8844DB' },
//   { colorName: 'Cyan', hexCode: '#2aa198' },
//   { colorName: 'Green', hexCode: '#149900FF' },
// ];

// const App = () => {
//   const renderHeader = () => (
//     <View style={styles.headerContainer}>
//       <Text style={styles.headerText}>Color List</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <FlatList
//         data={COLORS}
//         keyExtractor={(item) => item.hexCode}
//         renderItem={({ item }) => (
//           <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
//         )}
//         ListHeaderComponent={renderHeader}
//       />
//     </View>
//   );
// };

// export default App;
