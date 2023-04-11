import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {TODOS} from '../../constants';
import styles from './styles';
const TodoDetails = ({navigation, route}: {navigation: any; route: any}) => {
  const currentTodo = TODOS.find(todo => route.params.id === todo.id);
  const [status, setStatus] = useState(currentTodo?.status || 'N/A');
  const [buttonState, setButtonState] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Task</Text>
        <Text style={styles.data}>{currentTodo?.task || 'N/A'}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.data}>{status || 'N/A'}</Text>
      </View>
      <TouchableOpacity
        disabled={buttonState}
        style={[styles.btn, buttonState ? {opacity: 0.5} : {}]}
        onPress={() => {
          if (currentTodo?.status === 'Pending') {
            let index = TODOS.findIndex(x => x.id === currentTodo.id);
            TODOS[index].status = 'Finished';
            setStatus('Finished');
            navigation.navigate('Home', {TODOS});
          } else {
            setButtonState(true);
          }
        }}>
        <Text style={styles.btnText}>Mark As Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoDetails;
