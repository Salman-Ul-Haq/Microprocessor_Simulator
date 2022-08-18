import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity} from "react-native";
import { Avatar } from "react-native-elements";
import { NavigationContainer, navigate } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';


const Run = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("8 BIT");

  return (

    <View
      style={{
        flexDirection: "column",
        height:'100%',
        flex:1
      }}>
            <View style={{ backgroundColor: "#FCBF49", flex: 0.7 }} >
                <Text style={styles.mptext}>
                  MICROPROCESSOR
                </Text>

            </View>
            
            <View style={{ backgroundColor: "#EAE2B7", flex: 0.9 }} >
            
            <View>
      <Picker
        selectedValue={selectedValue}
        style={{marginLeft:90,
        marginTop:10,
        borderWidth: 10,
        width: 180,
        backgroundColor:'yellow',

        
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label="8 BIT" value="8b" />
        <Picker.Item label="16 BIT" value="16b" />
        <Picker.Item label="32 BIT" value="32b" />
        <Picker.Item label="64 BIT" value="64b" />
      </Picker>
    </View>
            </View>

            <View style={{ backgroundColor: "#EAE2B7", flex: 1.2 }} >
            <View style={styles.addprobtn}>
            <Button title="SELECT PROGRAM " color='#1A659E' onPress={()=>navigation.navigate('Sp')}></Button>
            </View>
            </View>

            <View style={{ backgroundColor: "#EAE2B7", flex: 1.2 }} >
            <View style={styles.addafbtn}>           
            
            <Button title="ADD ASSEMBLY FILE" color='#1A659E'    onPress={() => {
    alert('Yahan sy file add hoggi!');
  }}>
  
         </Button>
            </View>

            </View>
            
            <View style={{ backgroundColor: "#EAE2B7", flex: 2 }} >
            <View style={styles.runbtn }> 
            
          <TouchableOpacity 
           onPress={()=>{
        navigation.navigate('FDE')}}
        style={styles.runbtn}
        >
        <Text style={{fontFamily: 'MalayalamSangamMN-Bold', fontWeight: 'bold'}}>RUN</Text>
         </TouchableOpacity>
         
            </View>
            </View>
    </View>

  );	
};
const styles = StyleSheet.create({
	mptext: {
	  fontFamily: "Cochin",
	  fontSize:34,
	  color:'black',
	  fontWeight: 'bold',
	  textAlign:'center',
	  marginTop:25,
	  

	},
  container:{

    borderColor:"red",
    borderRadius:10
  },
	cbtn: {
		width: 95,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		backgroundColor: 'orange',
		marginRight:100,
		padding: 1,
		marginLeft: 136,
    marginTop: 5,
    fontWeight: 'bold',

	},
	ctxt:
	{
		fontSize:15,
		color:'black',
		fontWeight: 'bold',
		textAlign:'center',
    fontWeight: 'bold',
	},
  size:
	{
    width:75,
    height: 30,
		color:'black',
    borderColor: 'orange',
    borderRadius:1,
    fontWeight: 'bold',
    marginLeft:136,
    marginTop: 25




	},
  addprobtn: {
    height:110,
    width:90,
    marginRight:0,
    marginLeft:130,
    marginTop: 50,
    fontWeight: 'bold',



  },
  addafbtn: {
    height:110,
    width:90,
    marginRight:0,
        marginLeft:130,

 
  },
  runbtn:{
    marginVertical:20,
    height:120,
    width: 120,
    marginHorizontal:100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:100,
    borderRadius:99,
    marginLeft:100,
    backgroundColor:'#007C00'
  },



  });
export default Run;