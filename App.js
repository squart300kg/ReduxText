/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
 
// import * as gesture from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenStack } from 'react-native-screens';
import Fetch from './Fetch';
import { TextInput } from 'react-native-gesture-handler';
import RNKakaoLogins from '@react-native-seoul/kakao-login';

import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import allReducers from './src/reducers';
import { 
  normal_login,
  kakao_login,
  user_register,
  login_success,
  login_fail,
  search_id,
  search_pw,
} from './src/reducers/loginReducer';
import Login from './src/components/login'
import Hello from './src/components/hello' 



const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  const store = createStore(allReducers);
  return (
    <>
    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SelectAllList" component={SelectAllList} />
        <Stack.Screen name="BoardInsert" component={BoardInsert} />
        <Stack.Screen name="OneBoard" component={OneBoard} />
        <Stack.Screen name="JwtTest" component={JwtText} />
      </Stack.Navigator>
    </NavigationContainer> */}

    <Provider store = {store}>
      <Login/>
    </Provider>
    </>
  );
};
  // const [accessToken, setAccessToken] = useState('EMPTY_TOKEN');
  
  // const kakaoLogin = () => {
    
  //   RNKakaoLogins.login((err, result) => {
  //     if (err) {
  //       Alert.alert('Error : ', err.toString());
  //       console.log("Error : ", err.toString());
  //     }
      
  //     console.log('================================= JWT출력 =================================')
  //     console.log(' ')
  //     console.log('ACCESS_TOKEN             : ', result.accessToken);
  //     console.log('ACCESS_TOKEN_EXPIRED_AT  : ', result.accessTokenExpiresAt);
  //     console.log('REFERSH_TOKEN            : ', result.refreshToken);
  //     console.log('REFERSH_TOKEN_EXPIRED_AT : ', result.refreshTokenExpiresAt);
  //     console.log('SCOPE                    : ', result.scopes);
  //     console.log(' ')
  //     console.log('===========================================================================')
  //     setAccessToken(result.accessToken);
  //   });
  
  // };

  // const getKakaoUserProfile = () => {
  //   RNKakaoLogins.getProfile()
  //     .then(result => {
  //       // setProfile(result);
  //       console.log('============================ USER_PROFILE 출력 ============================')
  //       console.log(' ')
  //       console.log('ID                  : ', result.id);
  //       console.log('NICKNAME            : ', result.nickname);
  //       console.log('DISPLAY_ID          : ', result.display_id);
  //       console.log('PHONE_NUMBER        : ', result.phone_number);
  //       console.log('EMAIL               : ', result.email);
  //       console.log('PROFILE_IMAGE_URL   : ', result.profile_image_url);
  //       console.log(' ')
  //       console.log('===========================================================================')
        
  //     })
  // }
  
  // const kakaoLogout = () => {
  //   console.log('접큰토큰 존재 여부 확인 : ', accessToken);
  //   fetch("https://kapi.kakao.com/v1/user/unlink", {
  //     method: 'POST',
  //     headers: {
  //       'Authorization' : 'Bearer ' + accessToken,
  //     }
  //   })
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //     // setResponse(responseJson);
  //     console.log("LOGOUT_RESULT : " + responseJson.id);
  //     setAccessToken('EMPTY_TOKEN');
  //   })
  //     .catch((error) => {
  //       console.error(error);
  //   })
  
  //   RNKakaoLogins.logout()
  //    .catch(err => {
  //     console.log('============================== ERROR_CODE 출력 ==============================')
  //     console.log(' ')
  //     console.log('LOGOUT_ERROR_CODE    : ', err.code.toString());
  //     console.log('LOGOUT_ERROR_MESSAGE : ', err.message.toString());
  //     console.log(' ')
  //    console.log('============================================================================')
  //     Alert.alert('LOGOUT', '로그아웃 되었습니다!');
      
  //    });
  // };
  
  // const FetchInsertBoard = (title, contents ) => {
  //   fetch("http://localhost:8082/add?title=" + title + "&contents=" + contents)
  //     .catch((error) => {
  //       console.error(error);
  //   })
  //   Alert.alert("입력이 완료되었습니다!!!\n" + "제목 : " + title + "\n" + "내용 : " + contents );
  // }
  
  // const FetchDeleteBoard = ( id, navigation ) => {
  //   fetch("http://localhost:8082/delete?id=" + id)
  //     .catch((error) => {
  //       console.error(error);
  //   })
  //   console.log("FetchDeleteBoard_id : " +id)
  //   Alert.alert("삭제가 완료되었습니다!");
  //   navigation.goBack();
  // }
  
  
  
  // const FetchUpdateBoard = ( id, title, contents ) => {
  //   fetch("http://localhost:8082/update?id=" + id + "&title=" + title + "&contents=" + contents)
  //     .catch((error) => {
  //       console.error(error);
  //   })
  //   Alert.alert("수정이 완료되었습니다!");
  // }
  
  
  

  

  
  // function HomeScreen( { navigation }){
  //   return(
  //     <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <Button
  //         title="데이터 조회하기"
  //         onPress={() => navigation.navigate('SelectAllList')}
  //       />
  //       <Button
  //         title="데이터 추가하기"
  //         onPress={() => navigation.navigate('BoardInsert')}
  //       />
  //       <Button
  //         title="테스트"
  //         onPress={() => navigation.navigate('JwtTest')}
  //       />
         
         

        
         
      
  //       {/* <Text
  //         block 
  //           style={{ margin: 50, 
  //           padding : 30,
  //           color: '#3C1E1E', 
  //           fontWeight: 'bold', 
  //           backgroundColor: '#F7E314' }}
  //           onPress={() => kakaoLogin()}>
  //           카카오 로그인
  //       </Text>

  //       <Text
  //         block 
  //           style={{ margin: 50, 
  //           padding : 30,
  //           color: '#3C1E1E', 
  //           fontWeight: 'bold', 
  //           backgroundColor: '#F7E314' }}
  //           onPress={() => getKakaoUserProfile()}>
  //           사용자 정보 받아오기
  //       </Text>
  
  //       <Text
  //         block 
  //           style={{ margin: 50, 
  //           padding : 30,
  //           color: '#3C1E1E', 
  //           fontWeight: 'bold', 
  //           backgroundColor: '#F7E314' }}
  //           onPress={() => kakaoLogout()}>
  //           카카오 로그아웃
  //       </Text> */}

                
        
  //     </View>
  //   )
  // }
  
  // function SelectAllList( { navigation }){
  
  //   const [response, setResponse] = useState([]);
  //   const FetchFunction = () => {
  //     fetch("http://localhost:8082/selectAllList")
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //     setResponse(responseJson);
  //     console.log("SelectAllList_response : "+response);
  //   })
  //     .catch((error) => {
  //       console.error(error);
  //   })
  //   }
  
  //   useEffect( () => {
  //     FetchFunction()
  //     console.log("SelectAllList_useEffect발동");    
  // })
    
  
  //   return(
  //     <View>
  //       <View style = {{alignItems: 'center', margin: '5%'}}>
  //         <Text>데이터 조회하기</Text>
  //       </View>
  //       <View style = {{margin: '5%', width: '100%', flexDirection: 'row'}}>
  //         <Text style = {{flex: 2}}>번호</Text>
  //         <Text style = {{flex: 8, textAlign: 'center', justifyContent: 'center'}}>제목</Text>
  //       </View>
  //       <View>
  //       <FlatList
  //           style = {{margin: '5%'}}
  //           data={response}
  //           renderItem={({item}) => <Text style = {{borderColor: 'black', padding: 20,borderWidth: 1, margin: '2%'}} onPress={() => navigation.navigate('OneBoard', {id : item.id})}>{item.id}                                                     {item.title}</Text>}
  //           keyExtractor={({id}, index) => id}
  //         />
  //       </View>
        
        
  //     </View>
  //   )
  // }
  // function OneBoard( { route, navigation }){
  //   const { id } = route.params;
  //   const [response, setResponse] = React.useState();
  //   const [title, setTitle] = React.useState();
  //   const [contents, setContents] = React.useState();
  
  //   const FetchFunction = () => {
  //     fetch("http://localhost:8082/selectOneBoard?id=" + id)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //     console.log("OneBoard_title : " + responseJson.title)
  //     console.log("OneBoard_contents : " + responseJson.contents)  
  //     setTitle(responseJson.title);
  //     setContents(responseJson.contents); 
  //   })
  //     .catch((error) => {
  //       console.error(error);
  //   })
  //   }
    
  
  //   useEffect( () => {
  //     FetchFunction()    
  // },[])
    
  
  //   return(
  //     <View style = {{flex: 1}}>
  //       <View style = {{flexDirection: 'column', margin: 20}}>
  //         <Text style = {{width: '100%', textAlign:'center'}}>{id}번째 게시물</Text>
  //       </View>
  //       <View>
  //         <View style = {{flexDirection: 'column', margin: 20}}>
  //           <TextInput
  //       style={{ height: 40, width: '100%', borderColor: 'black', borderWidth: 1 }}
  //       onChangeText={text => setTitle(text)}
  //       value={title}
  //       />
  //         </View>
  //         <View style = {{flexDirection: 'column', margin: 20}}>
  //           <TextInput
  //       style={{ height: 40, width: '100%', borderColor: 'black', borderWidth: 1 }}
  //       onChangeText={text => setContents(text)}
  //       value={contents}
  //       />
  //         </View>
  //       </View>
  //       <View style = {{flexDirection: 'row', margin: 10, justifyContent: 'flex-end'}}>
  //         <Button title = "수정하기" onPress = {() => FetchUpdateBoard( id, title, contents )}></Button>
  //         <Button title = "삭제하기" onPress = {() => FetchDeleteBoard( id, navigation )}></Button>
  //       </View>
        
  //     </View>
  //   )
  // }
  // function BoardInsert( { navigation }){
  //   const [title, setTitle] = React.useState();
  //   const [contents, setContents] = React.useState();
  
  //   return(
  //     <View style = {{flex: 1}}>
  //       <View style = {{flexDirection: 'column', margin: 20}}>
  //         <Text style = {{width: '10%', alignContent:'center'}}>제목</Text>
  //         <TextInput
  //       style={{ height: 40, width: '100%', borderColor: 'black', borderWidth: 1 }}
  //       onChangeText={text => setTitle(text)}
  //       value={title}
  //       />
     
  //       </View>
  //       <View style = {{flexDirection: 'column', margin: 20}}>
  //         <Text style = {{width: '10%', alignContent:'center'}}>내용</Text>
  //         <TextInput
  //       style={{ height: '50%', width: '100%', borderColor: 'black', borderWidth: 1 }}
  //       onChangeText={text => setContents(text)}
  //       value={contents}
  //     />
  //     <Button title = "입력" onPress={() => FetchInsertBoard(title, contents)}></Button>
  //       </View>
        
  //     </View>
  //   )
  // }
  
  
//   const Stack = createStackNavigator();
//   const store = createStore(allReducers);
//   return (
//     <>
//     {/* <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="SelectAllList" component={SelectAllList} />
//         <Stack.Screen name="BoardInsert" component={BoardInsert} />
//         <Stack.Screen name="OneBoard" component={OneBoard} />
//         <Stack.Screen name="JwtTest" component={JwtText} />
//       </Stack.Navigator>
//     </NavigationContainer> */}

//     <Provider store = {store}>
//       <Login/>
//     </Provider>
//     </>
//   );
// };

export default App;
