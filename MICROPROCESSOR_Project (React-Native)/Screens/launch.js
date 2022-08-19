import React from 'react'
import {Text, View} from 'react-native'
import { FlatList } from 'react-native'
import { Table } from 'react-native-table-component'

const mem = [
  {Address:1, data:'LOAD 4'}
]

const table = ({navigation}) =>{
  return(
    <View>
      <Table data={mem}
      renderItem={item}
      keyExtractor={(item,index)=>index.toSting()}
      >
      </Table>
    </View>
  )
}