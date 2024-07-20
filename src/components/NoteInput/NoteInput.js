import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/actions';
import styles from './styles';

const NoteInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
      dispatch(addNote({
        text,
      }));
      setText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Notunuzu Girin..."
        
      />
      <Button title="Add" onPress={handleAddNote} />
    </View>
  );
};

export default NoteInput;
