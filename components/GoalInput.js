import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Modal } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('')
    
    const goalInputHandler = (textInput) => {
        setEnteredGoal(textInput)
    }

    const addHandleGoal = () => {
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
            <View style={styles.buttonContainer}>
                <View style={ styles.addButton }>
                    <Button 
                    title="ADD" 
                    color="green"
                    onPress={addHandleGoal}
                    style={ { borderColor: 'green', borderWidth: 1 } }
                    />
                </View>
                <View style={ styles.cancelButton }>
                    <Button 
                    title='CANCEL'
                    color='red'
                    onPress={props.handleModal}
                    />
                </View>
            </View>
            
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
      },
      buttonContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "space-between",
        width: '60%'
      },
      addButton: {
        borderColor: 'green', 
        borderWidth: 1, 
        width: '40%'
      },
      cancelButton: {
        borderColor: 'red', 
        borderWidth: 1, 
        width: '40%'
      }
})

export default GoalInput;