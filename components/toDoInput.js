import {View, Button, StyleSheet,TextInput, Modal, Image} from 'react-native';
import {useState} from 'react';

function ToDoInput(props){
    const [enteredItem, setEnteredItem] = useState('');

    function itemInputHandler(inputText) {
        setEnteredItem(inputText);
      }

      function addItemHandler() {
        props.onAddItem(enteredItem);
        setEnteredItem('');
      }
return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image source={require('../assets/images/main.png')} style={styles.inputLogo}/>
      <TextInput
      style={styles.textInput} 
      placeholder="To do Item"
      value={enteredItem}
      onChangeText={itemInputHandler}/>
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button color='#4CAF50' title="Add" onPress={addItemHandler}/>
      </View>
      <View style={styles.button}>
      <Button color='#FF5252' title="Cancel" onPress={props.onCancel}/>
      </View>
      </View>
    </View>
    </Modal>
)
}

export default ToDoInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        backgroundColor:'#C1EFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      inputLogo:{
        width: 100,
        height: 100,
        margin:20,
      }
      ,
      textInput:{
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: 50,
        width: '100%',
        padding: 16,
      },
      buttonContainer:{
        marginTop: 16,
        flexDirection: 'row',
      },
      button:{
        width:100,
        marginHorizontal:8,
      }
})