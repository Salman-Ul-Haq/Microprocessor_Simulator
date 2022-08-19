import * as React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
const Item = ({name}) => {
return(
<View style={styles.item}>
<Text style={{color: 'black'}}>{name}</Text>
</View>
);
}
export default function App() {
const countries = [
{
id: '1',
name: 'ADD TWO NUMBERS',
},
{
id: '2',
name: 'SUBTRACT TWO NUMBERS',
},
{
id: '3',
name: 'MULTIPLY TWO NUMBERS',
},
{
id: '4',
name: 'DIVIDE TWO NUMBERS',
},
{
id: '5',
name: 'ADD THREE NUMBERS',
},
{
id: '6',
name: 'SUBTRACT THREE NUMBERS',
},
{
  id: '7',
  name: 'MULTIPLY THREE NUMBERS',
  },
  {
  id: '8',
  name: 'DIVIDE THREE NUMBERS',
  },
  {
  id: '9',
  name: 'MOVE VALUE',
  },
  {
  id: '10',
  name: 'STORE VALUE',
  },
];
const renderItem = ({item})=>(
<Item name={item.name}/>
);
return (
<View style={styles.container}>
<FlatList
data={countries}
renderItem={renderItem}
keyExtractor={(item) => item.id}
/>
</View>
);
}
const styles = StyleSheet.create({
container: {
marginTop:30,
padding:2,
},
item: {
backgroundColor: 'orange',
padding: 20,
marginVertical: 2,
marginHorizontal: 16,
borderRadius: 8,
shadowColor: '#000',
shadowOffset: { width: 3, height: 3 },
shadowOpacity: 0.3,
shadowRadius: 8,
},
})