import React, {useState} from "react";
import { View, Text, Button, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity} from "react-native";
import { Avatar } from "react-native-elements";
import { NavigationContainer, navigate } from '@react-navigation/native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';


const add2no = ({navigation}) => {

  return (

    <View style={styles.container}>
    <Table borderStyle={{borderWidth: 1}}>
      <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
      <TableWrapper style={styles.wrapper}>
        <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
        <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
      </TableWrapper>
    </Table>
  </View>

  );	
};

export default add2no;