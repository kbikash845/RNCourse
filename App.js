import { View, Text, StyleSheet, Button } from "react-native"
import { StatusBar } from "expo-status-bar"


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInputs}>Hello World</Text>
      <View>
        <Button title="Tell Me !" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"


  },
  textInputs: {
    borderWidth: 1,
    padding: 8,
    color: "blue",
    margin: 10
  },

})

export default App;