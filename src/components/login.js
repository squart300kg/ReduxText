import React, {useState, useEffect, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { NORMAL_LOGIN, KAKAO_LOGIN, USER_REGISTER, LOGIN_SUCCESS, LOGIN_FAIL, SEARCH_ID, SEARCH_PW } from '../reducers/loginReducer';
import { normal_login, kakao_login, user_register, login_success, login_fail, search_id, search_pw } from '../reducers/loginReducer';
import * as loginActions from '../reducers/loginReducer';
import { ThemeProvider } from '@react-navigation/native';

const login = (props) => {
  const [id, setId] = React.useState();
  const [password, setPassword] = React.useState();
  
  const requestToken = ( id, password ) => {
    Alert.alert("id : " + id + " password : " + password);
    fetch("http://localhost:8082/jwt/requestToken?id=" + id + "password=" + password)
    .then((response) => response.json())
    .then((responseJson) => {
    console.log("requestToken_response : "+responseJson.toString());
  })
    .catch((error) => {
      console.error(error);
    })
  }

  return (
      <View style = {{flex: 1, justifyContent: 'center'}}>
        
        <View style = {{justifyContent:'center'}}>
              <Text style = {{textAlign:'center'}}>동작 이벤트 체크 : {props.login_state}</Text>
        </View>

        <View style = {{flexDirection: 'column', margin: 20}}>
          <Text style = {{width: '30%', alignContent:'center'}}>ID</Text>
          <TextInput
        style={{ height: 40, width: '100%', borderColor: 'black', borderWidth: 1 }}
        onChangeText={text => setId(text)}
        value={id}
        />
        </View>

        <View style = {{flexDirection: 'column', margin: 20}}>
          <Text style = {{width: '30%', alignContent:'center'}}>PASSWORD</Text>
          <TextInput
        style={{ height: 40, width: '100%', borderColor: 'black', borderWidth: 1 }}
        onChangeText={text => setPassword(text)}
        value={password}
      />

        </View>
        <View style = {{flexDirection: 'column', margin: 20}}>
          <Button title = "로그인" style = {{margin: 10}} onPress={() => props.normal_login()}></Button>
        </View>

        <View style = {{flexDirection: 'column', margin: 20}}>
          <TouchableOpacity style={{backgroundColor:'#F7E314'}}>
            <Text
              style={{ margin: 10, 
              color: '#3C1E1E', 
              textAlign:'center',
              fontWeight: 'bold', 
              backgroundColor: '#F7E314' }}
              onPress={() => props.kakao_login()}>
                카카오로그인
            </Text>
          </TouchableOpacity>
        </View>

        <View style = {{flexDirection: 'row', margin: 20}}>
          <View></View>
          <Text onPress = {() => props.user_register()}>회원가입하기</Text>
          <Text style = {{marginLeft:'30%'}}></Text>
          <Text onPress = {() => props.search_id()}>아이디 찾기</Text>
          <Text style = {{marginLeft:'2%', marginRight: '2%'}}>|</Text>
          <Text onPress = {() => props.search_pw()}>비밀번호 찾기</Text>
        </View>
        
        
      </View>
    ) 
  }

  //login.js의 prpos값과 loginReducer.js의 상태값 매칭함을 정의
  const mapStateToProps = (state) => {
    return {
      login_state: state.loginReducer.login_state
    };
  }

  //login.js의 prpos값과 loginReducer.js의 액션값 매칭함을 정의
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(loginActions, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(login);