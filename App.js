import { useState } from 'react';
import {StyleSheet, View, FlatList, Button } from 'react-native';
import ToDoItem from './components/toDoItem';
import ToDoInput from './components/toDoInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const[modalIsVisible, setModalIsVisible] = useState(false);
  const [toDoItems, setToDoItems] = useState([]);

  function startAddItemHandler(){
    setModalIsVisible(true);
  }

  function endAddItemHandler(){
    setModalIsVisible(false);
  }

  function addItemHandler(enteredItem) {
    setToDoItems(prevItems=>[ 
      {text:enteredItem, id: Math.random().toString()},
      ...prevItems]);
      endAddItemHandler();
  }

  function deleteItemHandler(itemId) {
    setToDoItems(prevItems=>{
      return prevItems.filter(item=>item.id !== itemId);
    });
  }
  
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
    <Button title='Add new Item' 
    color="#5e0acc" 
    onPress={startAddItemHandler}/>
<ToDoInput visible={modalIsVisible} onAddItem={addItemHandler} onCancel={endAddItemHandler}/>
    <View style={styles.itemContainer}>
    <FlatList data={toDoItems}
    renderItem={(itemData)=>{
      return(<ToDoItem 
      text={itemData.item.text}
      id={itemData.item.id}
        onDeleteItem={deleteItemHandler}
      />);
    }}
    keyExtractor={(item,index)=>{
      return item.id;
    }}
     alwaysBounceVertical={true}/>
    </View>
    
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#CDF0EA',
    paddingTop:50,
    paddingHorizontal:16,
  },
  itemContainer:{
flex:5,
  },
  

});
