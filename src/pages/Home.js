import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import Task from '../components/Task';

const  Home = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([])

    const handleAddTask = () => {
        setTaskItems([...taskItems, task]);
        setTask(null)
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }
  return (
    <>
    <View style={styles.container}>
        <View style={styles.taskWrapper}>
            <Text style={styles.sectionTitle}> TODO Ekle </Text>
            <View style={styles.items}>
               {
                taskItems.map((item, index) => {
                   return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                        <Task text={item}/>
                    </TouchableOpacity>
                        
                   )
                })
               }
            </View>
        </View>


        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
        >
            <TextInput style={styles.input} placeholder={'Add Task'} value={task} onChangeText={(text) => setTask(text)}/>

            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED'
      },
    taskWrapper:{
       paddingTop: 80,
       paddingHorizontal: 20
    },
    sectionTitle: {
       fontSize: 24,
       fontWeight: 'bold'
    },
    items: {
        marginTop: 30
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 350,
        marginLeft: 10
    },
    addWrapper: {
        width: 55,
        height: 55,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginRight: 10,
    },
    addText: {

    }
})
export default Home
