import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const CONTENT = {
  tableHead: ['ADDRESS', 'DATA'],
  tableData: [
    ['0', '0001'],
    ['1', '0010'],
    ['2', '0110 0110'],
    ['3', ' '],
    ['4',  '4'],
    ['5', '8'],
    ['6', ' '],

  ],
};

export default function Add2num({navigation}) {
  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={CONTENT.tableHead}
          flexArr={[1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={CONTENT.tableTitle}
            heightArr={[2, 28]}
            textStyle={styles.text}
          />
          <Rows
            data={CONTENT.tableData}
            flexArr={[1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 50, backgroundColor: 'orange', fontWeight:'bold'},
  wrapper: { flexDirection: 'row' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});