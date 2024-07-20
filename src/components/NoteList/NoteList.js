import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import NoteItem from '../NoteItem/NoteItem';
import styles from './styles';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <FlatList
      data={notes}
      renderItem={({ item }) => <NoteItem note={item} />}
      style={styles.list}
    />
  );
};

export default NoteList;
