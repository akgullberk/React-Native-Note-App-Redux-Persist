import React from 'react';
import { View, StyleSheet } from 'react-native';
import NoteInput from '../../components/NoteInput/NoteInput';
import NoteList from '../../components/NoteList/NoteList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NoteInput />
      <NoteList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
});

export default HomeScreen;
