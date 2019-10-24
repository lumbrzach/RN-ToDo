import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([]) 

  const goalInputHandler = (textInput) => {
    setEnteredGoal(textInput)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  }


  return (
    <View style={styles.screen}>
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
          onPress={addGoalHandler}
        />
      </View>
      <View>
        {courseGoals.map((goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center' 
    },
    input: {
      width: '80%', 
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 10
    },
    listItem: {
      padding: 10,
      backgroundColor: "green",
      borderColor: "black",
      borderWidth: 1,
      margin: 10
    }
})