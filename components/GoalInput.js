import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Modal } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')
    
    const goalInputHandler = (textInput) => {
        setEnteredGoal(textInput)
    }

    const addHandleGoal = (enteredGoal) => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.modalOpen} animationType="slide" >
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Goals"  
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button 
            title="ADD" 
            color="#f194ff"
            onPress={addHandleGoal}
            />
            <Button 
            title='Cancel'
            color='red'
            onPress={props.handleModal}
            />
        </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10
      },
      inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1 
      }
})

export default GoalInput;