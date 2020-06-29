import React from 'react';
import {
  Text,
  Alert,
  Picker,
  ActivityIndicator,
  View,
  StyleSheet,
  AsyncStorage,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Animated,
  WebView,
  Modal,
  Switch,
} from "react-native";


const TodoItems = ({ entries }) => (
  <View >
    <TouchableOpacity >
    {entries.map(({ heading, key }) => (
      <Text style={styles.items} key={key}>{heading}</Text>
    ))}
   </TouchableOpacity>
  </View>
  
);

export default  class App extends React.Component{
  state = {
    items : []
  }
  addTodo = (heading) => heading !== '' && this.setState(({ items }) => ({
    items: items.concat({ 
      heading,
      key: Date.now()
    })
  }));
   
  render(){

    return (
      <View >
        <TodoItems entries={this.state.items} />
       <InputForm onSubmit={this.addTodo}></InputForm>
     </View>
        ) 
  }
}
class InputForm extends React.Component{
  state = {
    input: ''
  };

  onInput = (text) => this.setState({
    input: text
  });
  onSubmit = (input) => {
   
    this.props.onSubmit(this.state.input);
  }
  render(){
   return (
        <View>
           
          <label>Task</label>
            
          <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.onInput}
  
          /> 

              
      <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.onSubmit(this.state.input)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
            
            
          
        </View>
        
      
 )
  }
} 

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
  items : {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    margin: 2,
    borderColor: "#2a4944",
    borderWidth: 1,
    backgroundColor: "#d2f7f1",
  },
});
