import {StyleSheet,View, Text, Pressable} from 'react-native';

function ToDOItem(props){
return(
      <View style={styles.toDoItem}>
          <Pressable style={({pressed})=>pressed && styles.presssedItem} android_ripple={{color:'#5e0acc'}} onPress={props.onDeleteItem.bind(this,props.id)}>
        <Text style={styles.itemText}>{props.text}</Text>
    </Pressable>
        </View>
)
};

export default ToDOItem;

const styles = StyleSheet.create({
    toDoItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      presssedItem:{
        opacity:0.5,
      }
      ,
      itemText:{
        color: '#fff',
        padding: 8,
      }
});