export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (noteText) => ({
  type: 'DELETE_NOTE',
  payload: noteText,
});
