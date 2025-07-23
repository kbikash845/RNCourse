import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Platform, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const App = () => {
  const[inputText, setInputText] = useState('');
  const [goalList, setGoalList] = useState([])

  const HandleAdd =()=>{
   if(inputText.trim() === ''){
    return
   }
    setGoalList((prev) =>[...prev, {text:inputText.trim(),key:Math.random().toString()}])
    setInputText('')
  }
 
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Enter Your Goal"
          style={styles.textInput}
          placeholderTextColor="#888"
          onChangeText={setInputText}
          value={inputText}
        />
        <TouchableOpacity style={styles.addButton} onPress={HandleAdd}>
          <Text style={styles.addButtonText} >Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={goalList}
        renderItem={(itemData) =>{
          console.log("item",itemData.item)
          return (
             <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
          )
        }}
        keyExtractor={(item) => item.id} 
        alwaysBounceVertical={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 25 : 0,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginTop: 16,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  goalItem: {
    backgroundColor: '#4e9bde',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    marginHorizontal: 10, // 👉 adds space on both left and right
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  goalText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
