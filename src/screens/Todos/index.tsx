import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {TODOS} from '../../constants';
import styles from './styles';
const Todos = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={TODOS}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={styles.taskRow}
              onPress={() => {
                navigation.navigate('Details', {
                  id: item.id,
                });
              }}>
              <Text style={styles.serialNumber}>{index + 1}</Text>
              <Text style={styles.taskData}>{item.task}</Text>
              <Text style={styles.taskStatus}>{item.status}</Text>
            </TouchableOpacity>
          )}
          numColumns={1}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Add new Task</Text>
      </TouchableOpacity>
    </>
  );
};

export default Todos;
