import React, { useState } from 'react';
import { StyleSheet,
  Button, 
  View, 
  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([]); 
  const [modalOpen, setModalOpen] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }])
    setModalOpen(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  };

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={handleModal}/>
      <GoalInput 
        modalOpen={modalOpen}
        addGoalHandler={addGoalHandler}
        handleModal={handleModal}
      />
      <FlatList 
        data={courseGoals} 
        keyExtractor={ (item, index) => item.id }
        renderItem={ itemData => (
          <GoalItem 
            itemData={itemData} 
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    }
})