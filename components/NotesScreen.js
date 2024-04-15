import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';

function NotesScreen() {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleSaveNote = () => {
        if (note.trim() !== '') {
            setNotes([...notes, note]);  // Add the current note to the notes array
            setNote('');  // Clear the current note input after saving
        } else {
            alert('Please enter a note!');
        }
    };

    // Function to handle deletion of a note
    const handleDeleteNote = (index) => {
        const newNotes = notes.filter((item, idx) => idx !== index);
        setNotes(newNotes);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Write your note here..."
                multiline
                value={note}
                onChangeText={setNote}
            />
            <Button title="Save Note" onPress={handleSaveNote} />
            <FlatList
                data={notes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.noteItem}>
                        <Text>{item}</Text>
                        <TouchableOpacity onPress={() => handleDeleteNote(index)} style={styles.deleteButton}>
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    noteItem: {
        padding: 10,
        marginTop: 5,
        backgroundColor: '#eee',
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: 'white',
    },
});

export default NotesScreen;
