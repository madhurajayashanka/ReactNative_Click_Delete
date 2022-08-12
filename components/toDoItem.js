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
        backgroundColor: '#f0ad4e',
      },
      presssedItem:{
        opacity:0.5,
        borderRadius: 6,
      }
      ,
      itemText:{
        color: '#fff',
        fontSize: 15,
        padding: 8,
      }
});