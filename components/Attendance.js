import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Table, Row, Rows } from 'react-native-table-component';

const Attendance = ({ navigation }) => {
  const [tableHead, setTableHead] = useState(['Date', 'Class', 'Attendance']);
  const [tableData, setTableData] = useState([
    ['2023-01-01', 'Math', 'Present'],
    ['2023-01-01', 'Science', 'Absent'],
    ['2023-01-02', 'Math', 'Absent'],
    ['2023-01-02', 'Science', 'Present'],
    ['2023-01-03', 'Math', 'Present'],
    ['2023-01-03', 'Science', 'Present'],
    ['2023-01-04', 'Math', 'Present'],
    ['2023-01-04', 'Science', 'Absent'],
    ['2023-01-05', 'Math', 'Absent'],
    ['2023-01-05', 'Science', 'Absent'],
  ]);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', alignSelf:'center', fontSize:30}}>Attendance Record</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head}  />
        <Rows data={tableData} style={styles.row }  />
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'grey', fontSize: 'l'},
  row: { height: 35, backgroundColor: '#f1f8ff' },
  text: { margin: 0 },
});

export default Attendance