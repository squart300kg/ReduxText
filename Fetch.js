import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const FetchView = () => {
    const [response , setResponse] = useState({})
    const FetchFunction = () => {
        fetch("http://localhost:8080/greeting?name=송상윤")
        .then((response) => response.json())
        .then((responseJson) => {
            setResponse(responseJson)
        })
        // .then(function(responseJson) {
        //     setResponse(responseJson)
        // })
        .catch((error) => {
          console.error(error);
        });
    }

    useEffect( () => {
        FetchFunction()    
    },[])

    return(
    <Text>{"data :" + response.content}</Text>)
}

export default FetchView;