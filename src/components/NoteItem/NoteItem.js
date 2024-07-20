import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../redux/actions';
import styles from './styles';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.noteItem}>
      <View style={styles.noteTextContainer}>
        <Text style={styles.noteText}>{note.text}</Text>
      </View>
      <Button title="Delete" onPress={() => dispatch(deleteNote(note.text))} />
    </View>
  );
};

export default NoteItem;
